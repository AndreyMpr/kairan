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
   $targetFilePath = $targetDir . $fileName;

   all_source_files = {
      '515.xlsx': 3,   # Column D
      '5151.xlsx': 4,  # Column E
      '5152.xlsx': 5,  # Column F
      '5153.xlsx': 6,  # Column G
      '5154.xlsx': 7,  # Column H
      '545.xlsx': 8,   # Column I
      '5451.xlsx': 9,  # Column J
      '5452.xlsx': 10, # Column K
      '514.xlsx': 11,  # Column L
      '544.xlsx': 12   # Column M
   }

   }