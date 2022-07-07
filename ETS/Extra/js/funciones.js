function mostrarModal() {
    $('#modalProducto').modal('show');
    $('.modal-title').text("Nuevo Evento");
    $('#action').val("Agregar");
}

$(document).ready(function () {
    var table = $('#sortTable').DataTable({
        "ajax": {
            url: "../php/leerEventos.php",
            type: "POST"
        },
        

    });

    $(document).on('click', '.update', function () {
        let id = $(this).attr("id");
        $.ajax({
            url: "../php/editarEvento.php",
            method: "POST",
            data: {
                id: id
            },
            dataType: "json",
            success: function (data) {
                $('#modalProducto').modal('show');
                $('.modal-title').text("Editar Evento");
                $('#nombre').val(data.nombre);
                $('#fecha').val(data.fecha);
                $('#id').val(id);
                $('#action').val("Editar");
            }
        });
    });

    $(document).on('click', '.delete', function () {
        let id = $(this).attr("id");
        
                    $.ajax({
                        url: "../php/borrarEvento.php",
                        method: "POST",
                        data: {
                            id: id
                        },
                        success: function (data) {
                            if (data.indexOf("error") > -1) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: data,
                                    toast:true,
                                    position: 'bottom-end',
                                    timer: 3000
                                  });

                            }
                            else {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'excelente',
                                    text: data,
                                    toast:true,
                                    position: 'bottom-end',
                                    timer: 3000
                                  });
                            }
                            table.ajax.reload();
                        }
                    });   
    });


    $("#formEvento").on('submit', function (e) {
        let action = $('#action').val();
        let id = $('#id').val();
        let fecha =  $('#fecha').val();
        var frmData = new FormData(this);
        frmData.append('fecha', fecha);
        frmData.append('id', id);
        frmData.append('action', action);
        if (frmData.nombre == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Falta nombre del evento',
                toast:true,
                position: 'bottom-end',
                timer: 3000
              });
        }
        else if (frmData.fecha == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Falta fecha del evento',
                toast:true,
                position: 'bottom-end',
                timer: 3000
              });
        }

        else if (frmData.img == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Falta imagen del evento',
                toast:true,
                position: 'bottom-end',
                timer: 3000
              });
        }
        else {
            $.ajax({
                url: "../php/agregarEvento.php",
                type: "POST",
                data: frmData,
                processData: false,
                contentType: false,
                cache: false,
                error: function (p3) {
                    alert(p3);
                },
                beforeSend: function () {
                    $('#uploadStatus').html('<img style="width:45px;" src="../img/uploading.gif"/>');
                },
                success: function (data) {
                    if (data.indexOf("error") > -1) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: data,
                            toast:true,
                            position: 'bottom-end',
                            timer: 3000
                          });

                    }
                    else {
                        Swal.fire({
                            icon: 'success',
                            title: 'excelente',
                            text: data,
                            toast:true,
                            position: 'bottom-end',
                            timer: 3000
                          });
                    }
                    $('#formEvento')[0].reset();
                    $('#modalProducto').modal('hide');
                    table.ajax.reload();
                }

            });

            return false;
        }
    });

});