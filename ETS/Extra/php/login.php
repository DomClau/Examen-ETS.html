<?php
include("conexion.php");

if (isset($_POST['usuario']) && isset($_POST['pass'])) {
    $usuario = mysqli_real_escape_string($con, $_POST['usuario']);
    $pass = mysqli_real_escape_string($con, $_POST['pass']);

    $sql = "SELECT nombre FROM usuario WHERE nombre='" . $_POST['usuario'] . "' AND contraseña='" . $_POST['pass'] . "'";

    $resultado = mysqli_query($con, $sql) or die("Error");
    $numRegistro = mysqli_num_rows($resultado);
    if ($numRegistro == 0) {
        echo "Usuario y/o contraseña incorrectos";
    } else {
        $data = mysqli_fetch_array($resultado);
        session_start();
        $_SESSION['usuario'] = $data['nombre'];
        $_SESSION['estado'] = 'Autorizado';
        echo "1";
    }
} else {
    echo "Introduce usuario y contraseña;
}