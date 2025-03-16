<?php

   // db config
   $dbHost     = "localhost";
   $dbUsername = "root";
   $dbPassword = "";
   $dbName     = "pdf_database";

   // connect to db
   $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

   // check connection
   if ($db->connect_error) {
   die("Connection failed: " . $db->connect_error);
   }

   $statusMsg = '';
   $msgClass = '';

   $targetDir = "test_uploads/";
   $fileName = basename($_FILES["pdfFile"] ["name"]);
   $targetFilePath = $targetDir.$fileName;