/* Controlador */
/* Vamos a usar ua funcion para cada operacion (Create,Read,Update,Delete)*/
function actionCreate() {
    //Referencias a mi tabla --> example1 --> es mi tabla
    var tabla               = $('#example1').DataTable();

    var eje_tematico_create = document.getElementById("eje_tematico_create").value;
    var modalidad_create    = document.getElementById("modalidad_create").value;
    var descripcion_create  = document.getElementById("descripcion_create").value;
    var factor_create       = document.getElementById("factor_create").value;
    var ejemplos_create     = document.getElementById("ejemplos_create").value;
    //Modelo = Comunicarnos con el servidor = Guardar la informacion 
    //Asincrona
    $.ajax({
        url: "php/crud-denominacion.php",
        method: 'POST', //Usamos el metodo con POST para crear los registros de las denomiaciones
        data: {
          eje_tematico  : eje_tematico_create, 
          modalidad     : modalidad_create,
          descripcion   : descripcion_create,
          factor        : factor_create,
          ejemplos      : ejemplos_create,
          accion        : 'Create'
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
        eje_tematico_create,
        modalidad_create,
        descripcion_create,
        botones
    ] ).draw( false );
    //Linea 48 se ejecuta antes que la linea 24
    alert("Crear registro (C reate)");
    
}

function actionRead() {
  // method: 'GET', --> usamos el metodo GET para Leer/Consultar los registros, nuestro recurso especifico a usar es DENOMINACIONES (tabla de la base de datos)
    alert("Leer registro (R ead)");
    
}

function actionUpdate() {
    // method: 'PUT', --> usamos el metodo PUT para reemplazar los registros 
    alert("Actualizar registro (U date)");
}

function actionDelete() {
    // method: 'DELETE', --> usamos el metodo DELETE para eliminar los registros 
    alert("Eliminar registro (D elete)");
}