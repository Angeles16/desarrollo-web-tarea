
function solicitudPost(e) {
    console.log('helloddddddddddddddddddddddddddddd')
    e.preventDefault();
    let titulo = document.getElementById('id_titulo') 
    let monto = document.getElementById('id_monto') 
    let fecha = document.getElementById('id_fecha') 
    //let departamento = document.getElementById('departamento') 
    let detalle = document.getElementById('id_justificacion') 
    //let file = document.getElementById('file') 

    let jsonSolicitud = {
        titulo, monto, fecha, detalle
    }

    console.log(jsonSolicitud)
}