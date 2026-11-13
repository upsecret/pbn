<?php
// Run with wp eval-file only on the dedicated HIMSSwire installation.
defined('ABSPATH') || exit;

if (rtrim(get_option('siteurl'), '/') !== 'https://cms.himsswire.com') {
    WP_CLI::error('Unexpected installation URL.');
}
$file = __DIR__ . '/../content/launch.json';
$stories = json_decode(file_get_contents($file), true, 512, JSON_THROW_ON_ERROR);
$topics = array(
    'interoperability' => 'EHR & Interoperability',
    'security' => 'Cybersecurity',
    'digital-health' => 'Digital Health',
    'data-ai' => 'Data & AI',
    'hospital-operations' => 'Hospital Operations',
);

require_once ABSPATH . 'wp-admin/includes/media.php';
require_once ABSPATH . 'wp-admin/includes/image.php';
require_once ABSPATH . 'wp-admin/includes/file.php';

foreach ($topics as $slug => $name) {
    $term = get_term_by('slug', $slug, 'category');
    if (!$term) {
        $result = wp_insert_term($name, 'category', array('slug' => $slug));
        if (is_wp_error($result)) {
            WP_CLI::error($result->get_error_message());
        }
    }
}

foreach ($stories as $story) {
    $existing = get_page_by_path($story['slug'], OBJECT, 'post');
    if ($existing) {
        WP_CLI::log('Existing post kept: ' . $story['slug']);
        continue;
    }

    $html = '';
    foreach ($story['sections'] as $section) {
        $html .= "<!-- wp:heading -->\n<h2>" . esc_html($section[0]) . "</h2>\n<!-- /wp:heading -->\n\n";
        $html .= "<!-- wp:paragraph -->\n<p>" . esc_html($section[1]) . "</p>\n<!-- /wp:paragraph -->\n\n";
    }
    $html .= "<!-- wp:heading -->\n<h2>Sources</h2>\n<!-- /wp:heading -->\n";
    foreach ($story['sources'] as $source) {
        $html .= '<!-- wp:paragraph --><p><a href="' . esc_url($source['url']) . '">'
            . esc_html($source['label']) . "</a></p><!-- /wp:paragraph -->\n";
    }
    $category = get_term_by('slug', $story['topic'], 'category');
    $post = wp_insert_post(wp_slash(array(
        'post_type' => 'post',
        'post_status' => 'draft',
        'post_name' => $story['slug'],
        'post_title' => $story['title'],
        'post_excerpt' => $story['summary'],
        'post_content' => $html,
        'post_category' => array((int) $category->term_id),
    )), true);
    if (is_wp_error($post)) {
        WP_CLI::error($post->get_error_message());
    }
    $tags = wp_set_post_tags($post, $story['tags']);
    if (is_wp_error($tags)) {
        WP_CLI::warning($tags->get_error_message());
    }
    if (!empty($story['image'])) {
        $image = __DIR__ . '/../public/images/' . basename($story['image']);
        $upload = wp_upload_bits(basename($image), null, file_get_contents($image));
        if ($upload['error']) {
            WP_CLI::warning($upload['error']);
        } else {
            $id = wp_insert_attachment(array(
                'post_mime_type' => 'image/jpeg',
                'post_title' => $story['alt'],
                'post_status' => 'inherit',
            ), $upload['file'], $post, true);
            if (is_wp_error($id)) {
                WP_CLI::warning($id->get_error_message());
            } else {
                wp_update_attachment_metadata($id, wp_generate_attachment_metadata($id, $upload['file']));
                update_post_meta($id, '_wp_attachment_image_alt', $story['alt']);
                set_post_thumbnail($post, $id);
            }
        }
    }
    WP_CLI::log('Draft #' . $post . ': ' . $story['slug']);
}

