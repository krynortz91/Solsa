<?php
$msg = $_POST["message"];
$remitente = $_POST["email"];
$destino = "ventas@solsa.cl";
$asunto = $_POST["subject"];

$header = "From: " . $remitente ."\r\n";
$header .= "Reply-To:". $remitente . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion();

$mail = @mail($destino, $asunto, $msg, $header);

if($mail){
  echo "<h1>EXITO</h1>";
  echo $remitente;
  echo $destino;
  echo $asunto;
  echo $msg;
  
  header("Location: https://www.solsa.cl/");
}
else{
  echo "NO EXITO";
  header("Location: https://www.solsa.cl/");
}
?>