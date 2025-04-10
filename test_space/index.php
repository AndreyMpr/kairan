<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <title>PDF Upload TEST PAGE</title>
</head>
    <body>
        <h1>Upload a PDF Document</h1>
        <?php if(!empty($statusMsg)){ ?>
            <p class="statusMsg <?php echo !empty($msgClass)?$msgClass:''; ?>">
                                     <?php echo $statusMsg; ?>
            </p>
        <?php } ?>
        <form action="upload.php" method="post" enctype="multipart/form-data">
            <label for="pdfFile">Select PDF to upload:</label>
            <input type="file" name="pdfFile" id="pdfFile" accept="application/pdf">
            <input type="submit" value="Upload" name="submit">
        </form>
    </body>
</html>
                                                            
