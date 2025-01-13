<?php



// Headers
$origin = 'http://localhost:3201'; // TODO: Read from env
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $contents = file_get_contents('php://input');
    if ($contents === false) {
        echo 'Bad contents';
        exit;
    }

    $body = json_decode($contents, true, JSON_THROW_ON_ERROR);

    if ($body === false) {
        echo 'Bad json';
        exit;
    }

    $body['message_clean'] = trim(htmlspecialchars($body['message']));

    echo json_encode([
            'language' => 'php',
            'data' => $body
    ], flags: JSON_THROW_ON_ERROR);

} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo 'hi from GET';

}
