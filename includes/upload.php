<?php
$statusMsg = '';

if(isset($_POST["submit"])) {

  if(empty($_FILES["file"]["name"])) {
    $statusMsg = "Please select file to upload";
  } else {
    $targetDir = "../uploads/";
    $fileName = basename($_FILES["file"]["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);

    //allow certain file formats
    $allowTypes = array('pdf');
    $maxFileSize = 31457280;

    if(in_array($fileType, $allowTypes)){
      // Check if file already exists
      if (file_exists($targetFilePath)) {
        $statusMsg = "すみません、".$fileName. "フファイルは既に存在します。ファイル名を変更、あるいは違うファイルを選択してください。";
      } else {
          //upload file to server
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
              $statusMsg = "PDFファイル".$fileName. "登録完了しました。";
        }else{
              $statusMsg = "アプロードする時にエラーが発生しました。";
        }
      }
    }else{
        $statusMsg = 'PDFファイル以外アプロードできません。';
    }
  }
} else {
    $statusMsg = "";
}

//display status message
echo $statusMsg;
?>