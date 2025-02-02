<?php
$statusMsg = '';

  //file upload path
  $targetDir = "../uploads/";
  $fileName = basename($_FILES["file"]["name"]);
  $targetFilePath = $targetDir . $fileName;

echo $statusMsg;
?>
