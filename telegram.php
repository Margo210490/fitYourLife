<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$token = "6038073636:AAFwh6Jd7Pu1UK0SdjyzjRatohBjzFsryiM";
$chat_id = "-943499858";
$arr = array(
  'Імя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Коментар' => $comment
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
