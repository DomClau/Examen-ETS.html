/* Controlador */
/* Vamos a usar ua funcion para cada operacion (Create,Read,Update,Delete)*/
function actionCreate() {
    //Referencias a mi tabla --> example1 --> es mi tabla
    var tabla               = $('#example1').DataTable();

    var nombre_actividad_create   = document.getElementById("nombre_actividad_create").value;
    var fecha_inicio_create       = document.getElementById("fecha_inicio_create").value;
    var fecha_termino_create      = document.getElementById("fecha_termino_create").value;
    var horas_create              = document.getElementById("horas_create").value;
    var archivo_create            = document.getElementById("archivo_create").value;
    var observaciones_create      = document.getElementById("observaciones_create").value;
    //Modelo = Comunicarnos con el servidor = Guardar la informacion 
    //Asincrona
    $.ajax({
        url: "php/crud-constancias.php",
        data: {
          actividad         : nombre_actividad_create, 
          fecha_inicio      : fecha_inicio_create,
          fecha_fin         : fecha_termino_create,
          horas             : horas_create,
          archivo           : archivo_create,
          observaciones     : observaciones_create,
          accion            : 'Create'
        },
        success: function( resultado ) {
          alert("Respuesta del servidor: "+resultado);
        }
      });

    //Vista
            
    var botones             = '<a class="btn btn-info btn-sm"  data-toggle="modal" data-target="#modal-lg-actualizar"  href="#">';
    var botones             = botones + '<i class="fas fa-pencil-alt">';
    var botones             = botones + '</i>';
    var botones             = botones + ' Editar';
    var botones             = botones + '</a>';
    var botones             = botones + ' <a class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-default" href="#">';
    var botones             = botones + '<i class="fas fa-trash">';
    var botones             = botones + '</i>';
    var botones             = botones + ' Eliminar';
    var botones             = botones + '</a>';  
    
    tabla.row.add( [
        nombre_actividad_create,
        fecha_inicio_create,
        horas_create,
        botones
    ] ).draw( false );

    //Linea 48 se ejecuta antes que la linea 24
    alert("Crear registro (C reate)");
    
}

function actionRead() {
    alert("Leer registro (R ead)");
    
}

function actionUpdate() {
    alert("Actualizar registro (U date)");
}

function actionDelete() {
    alert("Eliminar registro (D elete)");
}