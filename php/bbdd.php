<?php	
	//require_once("config.php");
	
	$bbdd = mysql_connect($_CONF['host'], $_CONF['user'], $_CONF['password']) or die('ERROR - connect' . mysql_error());
	mysql_select_db($_CONF['bd']) or die('ERROR - select db');
	mysql_query('SET NAMES utf8');	
?>