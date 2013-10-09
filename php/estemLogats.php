<?php 
session_start();
/*
$_SESSION['nom'] ="TWENTIC SL" ;
$_SESSION['logged'] = true;
echo 'true';
*/
if( !isset( $_SESSION['logged'] )) $_SESSION['logged'] = false;

if( !$_SESSION['logged']) echo 'false';
else echo $_SESSION['nom'] ;

?>