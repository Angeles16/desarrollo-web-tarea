console.log('hello solicitudes')

let generateSidebar = document.getElementById('sidebar-solicitud')
let domSidebar = (`
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Alertas
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