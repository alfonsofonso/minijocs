<?php
session_start();

require_once("config.php");
include("bbdd.php");
	
if( isset($_SESSION['logged']) && $_SESSION['logged'] == true )
{
	//TODO: guardar a base de dades
	$user= $_SESSION['nom'];
	$query_ip = "SELECT uuid, nom, punts, brut, emoticJoc, emoticCuina, emoticBany, emoticDorm, lastupdate FROM biribiris WHERE usuari = '$user' ORDER BY lastupdate DESC, punts DESC";

	$res = mysql_query($query_ip);

	$biris = array();
	while ($row = mysql_fetch_array($res, MYSQL_ASSOC)) {
		$biris[]=$row;
	}
	echo (json_encode($biris));
}
else
{
	//TODO: guadar a local
	echo 'false';
}
?>