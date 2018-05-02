<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;

$pp = new FormHandler();

$validator = $pp->getValidator();
$validator->fields(['name', 'email'])->areRequired()->maxLength(50);
$validator->fields(['mobile', 'internship_duration', 'work_area'])->areRequired();
$validator->field('email')->isEmail();
$validator->field('message')->maxLength(6000);

$mailer = $pp->getMailer();
$mailer->setFrom('noreply@giptechnologies.com', 'Contact Form', false);
// $pp->requireCaptcha();
$pp->sendEmailTo('dewan@mailinator.com'); // ← Your email here

$process_result = $pp->process($_POST);
$decoded_msg    = json_decode($process_result);
if ($decoded_msg->result == 'success') {
    $pp->sendEmailTo($_POST['email']);
    $pp->afterProcess();
}

echo $process_result;
