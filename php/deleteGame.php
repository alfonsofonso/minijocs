<?php
session_start();

require_once("config.php");
include("bbdd.php");


$UUID =  $_POST['UUID']; // "super3"; //

if( $_SESSION['logged'] == true )
{		
	// Inserta biribiri
	$query = "DELETE FROM biribiris WHERE uuid = '$UUID'";
	
	$res = mysql_query($query);

	echo 'true';
}
else
{
	//TODO: guadar a local
	echo 'false';
}
?>  