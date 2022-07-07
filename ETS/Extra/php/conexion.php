<?php
$host = 'localhost';
$dbname = 'evento';
$username = 'root';
$password = '';
// Create connection
$con = mysqli_connect($host, $username, $password, $dbname);
// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
// Definir el juego de carácteres con el que se trabaja
$charset = "utf8";
mysqli_set_charset($con, $charset);