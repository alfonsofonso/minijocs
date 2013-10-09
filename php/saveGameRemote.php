<?php
session_start();

require_once("config.php");
include("bbdd.php");

$nom_biri =  $_POST['nom']; // "super3"; //
$UID = $_POST['UUID']; // "super3"; //
$punts =  $_POST['punts']; // "super3"; //
$emoticJoc =  $_POST['emoticJoc']; // "super3"; //
$emoticCuina =  $_POST['emoticCuina']; // "super3"; //
$emoticBany =  $_POST['emoticBany']; // "super3"; //
$emoticDorm =  $_POST['emoticDorm']; // "super3"; //
$brut =  $_POST['brut']; // "super3"; //

$login =  $_POST['usuari'];		//"super3";  //
$pwd =    $_POST['clau'];		// "super3"; //
	
$c = curl_init("https://secure.ccrtvi.com/su/Register?hiTarget=*.swf&hiRegServiceId=SP3_REG&hiAction=1020&hiServiceId=SP3_REG&hiRetrievalXsl=casiopea.xsl&hiUsrField=USERID&hiPwdField=PWD&USERID=".trim($login)."&PWD=".trim($pwd)."");

curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
$contingut_xml = curl_exec($c);
curl_close($c);

if( strpos($contingut_xml, "err.user.login-failed") !== false )
{
	echo 'false';
}
else
{
		$nom =  utf8_encode (addslashes (get_string_between($contingut_xml, "<NOM>", "</NOM>")));
		$cognom =  utf8_encode(addslashes (get_string_between($contingut_xml, "<COGNOM>", "</COGNOM>")) ) ;
		$user = $nom." ".$cognom ;
		
		//TODO: guardar a base de dades
		$query_ip = "SELECT id_biribiri FROM biribiris WHERE usuari = '$user' AND nom = '$nom_biri'";
		
		$res_ip = mysql_query($query_ip);
		if(mysql_num_rows($res_ip)>0)
		{
			$query = "UPDATE biribiris SET emoticJoc = $emoticJoc, emoticCuina = $emoticCuina, emoticBany = $emoticBany, emoticDorm = $emoticDorm, punts = $punts  WHERE uuid = '$UID'";
	
			$res = mysql_query($query);

			echo 'true';
		}else{			
			// Inserta biribiri
			$query = "INSERT INTO biribiris (nom, uuid, usuari, emoticJoc, emoticCuina, emoticBany, emoticDorm, punts, brut ) VALUES ('$nom_biri', '$UID', '$user', $emoticJoc, $emoticCuina, $emoticBany, $emoticDorm, $punts, $brut)";
			
			$res = mysql_query($query);
			
			$id = mysql_insert_id();
			$sql = "UPDATE biribiris SET id2 = '$id' WHERE id_biribiri = '$id'";
			$result = mysql_query($sql);
			
			echo 'true';
		}
		

}

function get_string_between($string, $start, $end)
{
	//$string = " ".$string;
	$ini = strpos($string,$start);
	if ($ini == 0) return "NULL";
	$ini += strlen($start);
	$len = strpos($string,$end)-$ini;
	return substr($string,$ini,$len);
}
?>