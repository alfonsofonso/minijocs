<?php
session_start();

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
		
	$_SESSION['logged'] = true;
	$_SESSION['usuari'] = trim($login);
	$_SESSION['clau'] = trim($pwd);
	$_SESSION['nom'] = $nom." ".$cognom ;
	
	echo $_SESSION['nom'] ;
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