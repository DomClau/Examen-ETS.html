<?php
include('ayuda.php');
include('conexion2.php');
if (isset($_POST["id"])) {
    $output = array();
    $statement = $pdo->prepare(
        "SELECT * FROM lista_evento 
		WHERE id_evento = '" . $_POST["id"] . "' 
		LIMIT 1"
    );
    $statement->execute();
    $result = $statement->fetchAll();
    foreach ($result as $row) {
        $output["nombre"] = $row["nombre"];
        $output["fecha"] = $row["fecha"];
        $output["img"] = $row["img"];
    }
    echo json_encode($output);
}