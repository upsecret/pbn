<?php
/**
 * DeepBot - WordPress CORS Setup
 * cms.deepbot.com 테마의 functions.php 하단에 붙여넣기
 */

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $allowed = ['https://deepbot.com', 'https://www.deepbot.com', 'http://localhost:3000'];
        $origin  = $_SERVER['HTTP_ORIGIN'] ?? '';
        header('Access-Control-Allow-Origin: ' . (in_array($origin, $allowed, true) ? $origin : '*'));
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, Accept');
        return $value;
    });
}, 15);
