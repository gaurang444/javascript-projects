<?php 
$db=new mysqli;
$db->connect('localhost','root','123gaurangB','crud');


if($db){
	echo "success";
}
else{
	echo "database not connected";
}


?>