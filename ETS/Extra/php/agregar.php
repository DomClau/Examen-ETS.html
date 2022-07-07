<?php
include('ayuda.php');
include('conexion2.php');

if (isset($_POST)) {
    $mensaje = '';
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];

    switch ($_POST['action']) {
        case 'Agregar':
            if (isset($_POST['nombre'], $_POST['fecha'])) {
                if (!empty($_FILES['img']["tmp_name"])) {
                    //echo $_SERVER['DOCUMENT_ROOT'] por si se necesita cambiar ruatas a absolutas
                    $nombreImg = $_FILES["img"]["name"];
                    $extencion = pathinfo($nombreImg, PATHINFO_EXTENSION);
                    $nombre_base = basename($nombreImg, '.' . $extencion);
                    $ruta_carpeta = "../img/";
                    $ruta_carpeta2 = "img/";
                    $nombre_archivo =  $nombre_base . "." . $extencion;
                    $ruta_guardar_archivo = $ruta_carpeta . $nombre_archivo;
                    $ruta_archivo = $ruta_carpeta2 . $nombre_archivo;

                    if (file_exists($ruta_guardar_archivo)) {
                        $mensaje = "Ok";
                    } else {
                        if (move_uploaded_file($_FILES["img"]["tmp_name"], $ruta_guardar_archivo)) {
                            $mensaje = "Ok";
                        } else {
                            $mensaje =  "error no se pudo cargar";
                        }
                    }

                  

                        $sentencia = $pdo->prepare("INSERT INTO `lista_evento` (`id_evento`, `nombre`, `fecha`, `img`)
                    VALUES (NULL, :nombre, :fecha, :img);");
                        $sentencia->bindParam(":nombre", $nombre);
                        $sentencia->bindParam(":fecha", $fecha);
                        $sentencia->bindParam(":img", $ruta_archivo);
                        $sentencia->execute();

                        $mensaje .= " evento agregado";
                    
                } else {
                    $mensaje = "error falta imagen del evento";
                }
            } else {
                $mensaje = " error verifica todos los campos";
            }

            break;

        case 'Editar':

            $id = $_POST['id'];
            if (!empty($_FILES["img"]["name"])) {
                $img = $_FILES["img"]["tmp_name"];
                $nombreImg = $_FILES["img"]["name"];
                $extencion = pathinfo($nombreImg, PATHINFO_EXTENSION);
                $nombre_base = basename($nombreImg, '.' . $extencion);
                $ruta_carpeta = "../img/";
                $ruta_carpeta2 = "img/";
                $nombre_archivo =  $nombre_base . "." . $extencion;
                $ruta_guardar_archivo = $ruta_carpeta . $nombre_archivo;
                $ruta_archivo = $ruta_carpeta2 . $nombre_archivo;

                if (file_exists($ruta_guardar_archivo)) {
                    $mensaje = "Ok";
                } else {
                    if (move_uploaded_file($_FILES["img"]["tmp_name"], $ruta_guardar_archivo)) {
                        $mensaje = "Ok";
                    } else {
                        $mensaje =  "Error no se pudo cargar";
                    }
                }

                $sentencia = $pdo->prepare("UPDATE `lista_evento` SET `nombre`= :nombre,`fecha`= :fecha,
                    `img`= :img WHERE `id_evento`= :id ");
                    $sentencia->bindParam(":nombre", $nombre);
                    $sentencia->bindParam(":fecha", $fecha); 
                    $sentencia->bindParam(":img", $ruta_archivo);  
                    $sentencia->bindParam(":id", $id);
                    $sentencia->execute();
                    $mensaje = "Evento actualizado correctamente";
               
            } else {

                    $sentencia = $pdo->prepare("UPDATE `lista_evento` SET `nombre`= :nombre,`fecha`= :fecha
                     WHERE `id_evento`= :id ");
                    $sentencia->bindParam(":nombre", $nombre);
                    $sentencia->bindParam(":fecha", $fecha);
                    $sentencia->bindParam(":id", $id);
                    $sentencia->execute();
                    $mensaje = "Producto actualizado correctamente";
                
            }

            break;
    }
}

echo $mensaje;