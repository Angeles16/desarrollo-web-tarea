console.log('hello solicitudes')

const URL_API = 'https://compras.com';

let generateSidebar = document.getElementById('sidebar-solicitud')
let domSidebar = (`
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Acciones
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>
                                    <a class="nav-link" href="/solicitudes/index.html"> Solicitudes </a>
                                </li>
                                <li>
                                    <a class="nav-link" href="/solicitudes/nuevasolicitud.html"> Nueva Solicitud </a>
                                </li>
                                <li>
                                    <a class="nav-link" href="/solicitudes/historico.html"> Historial de solicitudes </a>
                                </li>
                                <li>
                                    <a class="nav-link" href="/solicitudes/rechazado.html"> Solicitudes rechasadas </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
`);
generateSidebar.innerHTML = domSidebar;





async function getSolicitudes() {
    const departamentoCod = document.getElementById('codigoDepartamento').value;
    const fechads = document.getElementById('fechaIdS').value;
    const res = await fetch(`https://7354-20-85-156-46.ngrok.io/solicitudes/mostrar?filtrodep=${departamentoCod}&filtrofecha=${fechads}`);
    const jsonData = await res.json();
    console.log(jsonData)
    let tbodyTodos = '';
    jsonData.map(({ cotizacion, departamento, estado, fecha, justificacion, monto, nombre}, index) => {
        console.log({ cotizacion, departamento, estado, fecha, justificacion, monto, nombre})
        let solicitudBodyHistorico = (`
            <div class="accordion mb-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${cotizacion}fasdf
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Tarea realizada por el departamento de - ${departamento}.</strong> <br />
                            <code>${fecha}</code> <br />
                            ${departamento}
                            <br />
                            ${justificacion}
                        </div>
                    </div>
                </div>
            </div>
        `)

        tbodyTodos += solicitudBodyHistorico
    })
    let generateSolicitudesPendientes = document.getElementById('solicituders-p')
    generateSolicitudesPendientes.innerHTML = tbodyTodos;
};



async function solicitudPosts(e) {
       let codigo = document.getElementById('id_codigo').value
    let titulo = document.getElementById('id_titulo').value;
    let monto = document.getElementById('id_monto').value;
    let detalle = document.getElementById('id_justificacion').value;
    let fecha = document.getElementById('id_fecha').value;
    let departamento = document.getElementById('id_departamento').value;
    //let fecha = document.getElementById('id_fecha').value;

    let nombreDepartamento = ""
    switch (departamento) {
        case 1:
            nombreDepartamento = 'logistica'
        break;
        case 2:
            nombreDepartamento = 'Servicio al cliente'
        break;
        case 3:
            nombreDepartamento = 'bodega'
        break;
        case 4:
            nombreDepartamento = 'compras'
        break;
        case 5:
            nombreDepartamento = 'Contabilidad'
        break;
        default:
            break;
    }

    let jsonSolicitud = {
        "codigo": codigo,
        "cotizacion": titulo, 
        "Codigoepartamento": departamento,
        "departamento": nombreDepartamento,
        "estado": "Activo",
        "fecha": fecha,
        "justificacion": detalle, 
        "monto": monto, 
        "nombre": "Luis Angel"
    }
    console.log(jsonSolicitud);
   //const URL_API = 'https://compras.com/solicitud';
    const response = await fetch('https://7354-20-85-156-46.ngrok.io/solicitudes', {
      method: "POST",
      mode: "cors",          
      headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Origin": "*",      
        "Content-Type": "application/json",        
      },
      body: JSON.stringify(jsonSolicitud),
    });
    return 200
}




async function getSolicitudes() {
    console.log('entre a solicitudes por el boton');
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await res.json();

    let tbodyHistorico = '';
    jsonData.map(({ id, title, body }) => {
        let tablebodyHistorico = (`
        <tr>
        <th scope="row">${id}</th>
        <td>${title}</td>
        <td>${body}</td>
        </tr>
        `)

        tbodyHistorico += tablebodyHistorico;
    })
    let domTableHistorico = (`
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Detalle</th>
            </tr>
        </thead>
        <tbody>
        ${tbodyHistorico}
        </tbody>
    </table>
        `);

    let generateTableHistorico = document.getElementById('table-historico');
    generateTableHistorico.innerHTML = domTableHistorico;
}

async function searchHistoricoUser(usuario) {
    console.log(usuario)

    // const res = await fetch(`http://apipaiton/solicitudes/historico/searchforuser/${usuario}`);
    // const jsonData = await res.json();

    // let bodyTableHistoricoUser = '';
    // jsonData.map(({ id, title, body }) => {
    //     let incrementTableBodyHistoricoUser = (`
    //     <tr>
    //     <th scope="row">${id}</th>
    //     <td>${title}</td>
    //     <td>${body}</td>
    //     </tr>
    //     `)

    //     bodyTableHistoricoUser += incrementTableBodyHistoricoUser;
    // })
    // let ElementTableHistoricoUser = (`
    // <table class="table">
    //     <thead>
    //         <tr>
    //         <th scope="col">Id</th>
    //         <th scope="col">Title</th>
    //         <th scope="col">Detalle</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //     ${bodyTableHistoricoUser}
    //     </tbody>
    // </table>
    //     `);

    // let generateTableHistorico = document.getElementById('table-historico');
    // generateTableHistorico.innerHTML = ElementTableHistoricoUser;
}

async function getTodos() {    
    const departamentoCod = document.getElementById('codigoDepartamento').value;
    const fechads = document.getElementById('fechaIdS').value;
    // const res = await fetch('../PRUEBAS/solicitudes.json');
    // const jsonData = await res.json();
    const jsonData = JSON.parse(localStorage.getItem("solicitudes"));
    let tbodyTodos = '';
    
    jsonData.map(({ cotizacion, Codigoepartamento, departamento, estado, fecha, justificacion, monto, nombre}, index) => {
        console.log({ cotizacion, departamento, estado, fecha, justificacion, monto, nombre})
        if(Codigoepartamento === departamentoCod || fechads === fecha) {
        let solicitudBodyHistorico = (`
            <div class="accordion mb-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            ${cotizacion}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Tarea realizada por el departamento de - ${departamento}.</strong> <br />
                            <code>${fecha}</code> <br />
                            <br />
                            ${justificacion}
                        </div>
                    </div>
                </div>
            </div>
        `)

        tbodyTodos += solicitudBodyHistorico
        }
    })
    let generateSolicitudesPendientes = document.getElementById('solicituders-p')
    generateSolicitudesPendientes.innerHTML = tbodyTodos;
};

async function searchHistoricoTime(time) {
    console.log(usuario)

    // const res = await fetch(`http://apipaiton/solicitudes/historico/searchforuser/${time}`);
    // const jsonData = await res.json();

    // let tbodyHistoricoTime = '';
    // jsonData.map(({ id, title, body }) => {
    //     let headerTableHistoricoTime = (`
    //     <tr>
    //     <th scope="row">${id}</th>
    //     <td>${title}</td>
    //     <td>${body}</td>
    //     </tr>
    //     `)

    //     tbodyHistoricoTime += headerTableHistoricoTime;
    // })
    // let dobyTableHistoricoTime = (`
    // <table class="table">
    //     <thead>
    //         <tr>
    //         <th scope="col">Id</th>
    //         <th scope="col">Title</th>
    //         <th scope="col">Detalle</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //     ${tbodyHistoricoTime}
    //     </tbody>
    // </table>
    //     `);

    // let generateHistoricoTime = document.getElementById('table-historico');
    // generateHistoricoTime.innerHTML = dobyTableHistoricoTime;
}

async function solicitudPost(e) {
    let codigo = document.getElementById('id_codigo').value
    let titulo = document.getElementById('id_titulo').value;
    let monto = document.getElementById('id_monto').value;
    let detalle = document.getElementById('id_justificacion').value;
    let fecha = document.getElementById('id_fecha').value;
    let departamento = document.getElementById('id_departamento').value;
    //let fecha = document.getElementById('id_fecha').value;

    let nombreDepartamento = ""
    switch (departamento) {
        case 1:
            nombreDepartamento = 'logistica'
        break;
        case 2:
            nombreDepartamento = 'Servicio al cliente'
        break;
        case 3:
            nombreDepartamento = 'bodega'
        break;
        case 4:
            nombreDepartamento = 'compras'
        break;
        case 5:
            nombreDepartamento = 'Contabilidad'
        break;
        default:
            break;
    }

    let jsonSolicitud = {
        "codigo": codigo,
        "cotizacion": titulo, 
        "Codigoepartamento": departamento,
        "departamento": nombreDepartamento,
        "estado": "Activo",
        "fecha": fecha,
        "justificacion": detalle, 
        "monto": monto, 
        "nombre": "Luis Angel"
    }
    console.log(jsonSolicitud);
     const jsonData = JSON.parse(localStorage.getItem("solicitudes"));
     jsonData.push(jsonSolicitud);
      localStorage.setItem('solicitudes', JSON.stringify(jsonData))

}