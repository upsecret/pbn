<?php
/**
 * Plugin Name: HIMSSwire Editorial
 * Description: Connects editor previews and the public frontend to this CMS.
 */

defined('ABSPATH') || exit;

function himsswire_frontend() {
    return defined('HIMSSWIRE_FRONTEND') ? rtrim(HIMSSWIRE_FRONTEND, '/') : 'https://www.himsswire.com';
}

add_filter('preview_post_link', function ($link, $post) {
    if ($post->post_type !== 'post' || !current_user_can('edit_post', $post->ID)) {
        return $link;
    }
    $token = bin2hex(random_bytes(32));
    set_transient('himsswire_preview_' . hash('sha256', $token), array(
        'post' => $post->ID,
        'user' => get_current_user_id(),
    ), 10 * MINUTE_IN_SECONDS);
    return himsswire_frontend() . '/preview?token=' . $token;
}, 10, 2);

add_action('rest_api_init', function () {
    register_rest_route('himsswire/v1', '/preview', array(
        'methods' => WP_REST_Server::CREATABLE,
        'permission_callback' => function ($request) {
            $token = $request->get_param('token');
            if (!is_string($token) || !preg_match('/^[a-f0-9]{64}$/D', $token)) {
                return false;
            }
            $grant = get_transient('himsswire_preview_' . hash('sha256', $token));
            if (!is_array($grant) || !user_can($grant['user'], 'edit_post', $grant['post'])) {
                return false;
            }
            $request->set_param('preview_grant', $grant);
            return true;
        },
        'callback' => function ($request) {
            $grant = $request->get_param('preview_grant');
            $post = get_post($grant['post']);
            if (!$post || $post->post_type !== 'post' || in_array($post->post_status, array('trash', 'auto-draft'), true)) {
                return new WP_Error('himsswire_preview_missing', 'Preview not found.', array('status' => 404));
            }

            $editor_id = (int) $grant['user'];
            wp_set_current_user($editor_id);
            $autosave = wp_get_post_autosave($post->ID, $editor_id);
            if ($autosave && $autosave->post_modified_gmt >= $post->post_modified_gmt) {
                $post = clone $post;
                foreach (array('post_title', 'post_content', 'post_excerpt') as $field) {
                    $post->$field = $autosave->$field;
                }
            }
            $controller = new WP_REST_Posts_Controller('post');
            $prepared = $controller->prepare_item_for_response($post, new WP_REST_Request('GET'));
            $data = $prepared->get_data();
            $data['content']['rendered'] = apply_filters('the_content', $post->post_content);
            $data['excerpt']['rendered'] = $post->post_excerpt;
            if (empty($data['date_gmt'])) {
                $data['date_gmt'] = gmdate('Y-m-d\TH:i:s');
            }
            if (empty($data['modified_gmt'])) {
                $data['modified_gmt'] = $data['date_gmt'];
            }
            $response = new WP_REST_Response($data);
            $response->header('Cache-Control', 'private, no-store, max-age=0');
            return $response;
        },
    ));
});

add_filter('rest_post_dispatch', function ($response, $server, $request) {
    $route = $request->get_route();
    if (preg_match('#^/(?:wp/v2/(?:posts|categories)(?:/|$)|himsswire/v1/)#', $route)) {
        do_action('litespeed_control_set_nocache', 'HIMSSwire publishing routes');
        $response->header('Cache-Control', 'private, no-store, max-age=0');
        $response->header('X-Robots-Tag', 'noindex, nofollow');
    }
    return $response;
}, 10, 3);

add_action('template_redirect', function () {
    if (is_robots()) {
        return;
    }
    if (is_singular('post') && get_post_status() === 'publish' && !post_password_required()) {
        wp_redirect(himsswire_frontend() . '/news/' . get_queried_object()->post_name, 302, 'HIMSSwire');
        exit;
    }
    nocache_headers();
    status_header(404);
    header('X-Robots-Tag: noindex, nofollow', true);
    exit;
});

