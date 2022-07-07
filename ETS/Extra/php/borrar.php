<?php
include("ayuda.php");
include("conexion2.php");

if (isset($_POST['id'])) {
    try {
        $id = $_POST['id'];
        $sql = "DELETE FROM `lista_evento` WHERE `id_evento`= '" . $id . "' ";
        // use exec() because no results are returned
        $pdo->exec($sql);
        echo "Evento borrado correctamente";
    } catch (PDOException $e) {
        echo  $e->getMessage();
    }
}