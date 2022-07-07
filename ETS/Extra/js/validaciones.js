//Validar que no esten vacios los campos
function Validar() {
    //Recuperamos el usuario y contraseña del formulario de login
    let usuario = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    //Comprobamos que no este vacio ningun campo
    //-- La funcion $.trim de jquery permite quitar los espacios en blanco 
    //-- al princio y al final de una cadena
    if ($.trim(usuario).length > 0 && $.trim(pass).length > 0) {
        //Realizamos la peticion ajax con los datos ingresados 
        $.ajax({
            url: "./php/login.php",
            type: "POST",
            data: "usuario=" + usuario + "&pass=" + pass,
            cache: "false",
            beforeSend: function () {
                $('#log-admn').val("Conectando...");
            },
            success: function (data) {
                $('#log-admn').val("Ingresar");
                if (data == "1") {
                    $(location).attr('href', './views/dashboard.php');
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data,
                        toast:true,
                        position: 'bottom-end',
                        timer: 3000
                      });
                }
            }
        });
    } else { //en caso de que cualquiera de los datos esté vacio mostramos una alerta 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            toast:true,
            position: 'bottom-end',
            text: 'Faltan campos',
            timer: 3000
          });
    };
}