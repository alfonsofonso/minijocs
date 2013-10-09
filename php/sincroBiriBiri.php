<?php
session_start();

require_once("config.php");
include("bbdd.php");

$nom =  $_POST['nom']; // "super3"; //
$UID = $_POST['UUID']; // "super3"; //
$punts =  $_POST['punts']; // "super3"; //
$emoticJoc =  $_POST['emoticJoc']; // "super3"; //
$emoticCuina =  $_POST['emoticCuina']; // "super3"; //
$emoticBany =  $_POST['emoticBany']; // "super3"; //
$emoticDorm =  $_POST['emoticDorm']; // "super3"; //
$brut =  $_POST['brut']; // "super3"; //	

if( isset($_SESSION['logged']) && $_SESSION['logged'] == true )
{
	//TODO: guardar a base de dades
	$user= $_SESSION['nom'];
	$query_ip = "SELECT id_biribiri FROM biribiris WHERE usuari = '$user' AND nom = '$nom'";
	
	$res_ip = mysql_query($query_ip);
	if(mysql_num_rows($res_ip)>0)
	{
		// Si ja esiteix un biribiri amb aquest nom
		echo 'false';
	}else{			
		// Inserta biribiri
		$query = "INSERT INTO biribiris (nom, uuid, usuari, emoticJoc, emoticCuina, emoticBany, emoticDorm, punts, brut ) VALUES ('$nom', '$UID', '$user', $emoticJoc, $emoticCuina, $emoticBany, $emoticDorm, $punts, $brut)";
		
		$res = mysql_query($query);
		
		$id = mysql_insert_id();
		$sql = "UPDATE biribiris SET id2 = '$id' WHERE id_biribiri = '$id'";
		$result = mysql_query($sql);
	}
	echo $UID;
}
else
{
	//TODO: guadar a local
	echo 'false';
}
?>