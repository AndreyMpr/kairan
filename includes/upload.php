<?php
$statusMsg = '';

  //file upload path
  $targetDir = "../uploads/";
  $fileName = basename($_FILES["file"]["name"]);
  $targetFilePath = $targetDir . $fileName;
  $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

  if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])) {
    //allow certain file formats
    $allowTypes = array('pdf');
    if(in_array($fileType, $allowTypes)){
        //upload file to server
      if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            $statusMsg = "PDFファイル".$fileName. "登録完了しました。";
      }else{
            $statusMsg = "アプロードする時にエラーが発生しました。";
      }
    }else{
        $statusMsg = 'PDFファイル以外アプロードできません。';
    }
  }else{
    $statusMsg = 'PDFファイルを選択せてください。';
  }

//display status message
echo $statusMsg;