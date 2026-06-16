<?php

$botToken = "8353093396:AAEu22kcF4PLhYC-K68woIsW9bGNpv33pZI";
$chatId = 7931320938;

$message = $_POST['message'];

$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
    "chat_id" => $chatId,
    "text" => $message
];

$options = [
    "http" => [
        "header"  => "Content-type: application/x-www-form-urlencoded",
        "method"  => "POST",
        "content" => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);

echo $result;
?>
