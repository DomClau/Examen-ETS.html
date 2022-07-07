<?php
    if(!isset($_SESSION)) session_start();
    if(isset($_SESSION['usuario']) && $_SESSION['estado'] == "Autorizado") {
        /// ----
    }
    else {
        echo ("<script>window.location = 'salir.php';</script>");
        exit;
    }