<?php
include("ayuda.php");
include("conexion2.php");

$sql = $pdo->prepare("SELECT * FROM `lista_evento`");
$sql->execute();
$eventos = $sql->fetchAll(PDO::FETCH_ASSOC);
$data = array();

foreach ($eventos as $evento) {
    $sub_array = array();
    $sub_array[] = $lista_evento["nombre"];
    $sub_array[] = $lista_evento["fecha"];
    $sub_array[] = '<button type="button" name="update" id="' . $lista_evento["id_evento"] . '" class="btn btn-primary  update" ><i class="fas fa-pen"></i> </button>';
    $sub_array[] = '<button type="button" name="delete" id="' . $lista_evento["id_evento"] . '" class="btn btn-danger  delete"><i class="fas fa-trash"></i></button>';
    $data[] = $sub_array;
}
$output = array(
    "data"                =>    $data
);
echo json_encode($output);