<?php 

$_CONF = array();

if(!preg_match('/tw\-dev/',$_SERVER['SERVER_NAME'])){
	// Si no �s tw-dev	
	// Servidor local tw-dev
$_CONF['produccio']	= true;
			$_CONF['host']		=  'localhost';
			$_CONF['user']		=  'mygridofth';//'15_super3p';
			$_CONF['password']	=  'VE9rq4Z8';// 'super3p123';
			$_CONF['bd']		=   'biri';//'15_super3p';
}else{ 
	// Servidor local tw-dev
	$_CONF['produccio']	= false;
		$_CONF['host']		=  'localhost';
    			$_CONF['user']		=   'mygridofth';//'15_super3p';
    			$_CONF['password']	=  'VE9rq4Z8';// 'super3p123';
    			$_CONF['bd']		=   'biri';//'15_super3p';
	/*$_CONF['mail_host']	= '';
	$_CONF['mail_user'] = '';
	$_CONF['mail_password'] = '';*/
}


?>