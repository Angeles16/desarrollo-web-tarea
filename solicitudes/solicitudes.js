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





async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await res.json();

    let tbodyTodos = '';
    jsonData.map(({ userId, id, title, completed }) => {
        let solicitudBodyHistorico = (`
            <div class="accordion mb-3" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${id}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
                            ${title}
                        </button>
                    </h2>
                    <div id="collapse${id}" class="accordion-collapse collapse show" aria-labelledby="heading${id}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Tarea realizada por el departamento de .</strong> <br />
                            <code>14/10/2022</code> <br />
                            ${title}
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
window.onload = getTodos;




function solicitudPost(objeto) {
    let titulo = document.getElementById('titulo') 
    let monto = document.getElementById('monto') 
    let fecha = document.getElementById('fecha') 
    let departamento = document.getElementById('departamento') 
    let detalle = document.getElementById('detalle') 
    let file = document.getElementById('file') 
    let formulario = objeto.form;
    for (let i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].classList.remove("error");
        if (
            formulario.elements[i].type == "text" &&
            formulario.elements[i].value == ""
        ) {
            alert(
                "El campo: " +
                formulario.elements[i].name +
                " no puede estar en blanco"
            );
            formulario.elements[i].classList.add("error");
            formulario.elements[i].focus();
            return false;
        }
        else if (formulario.elements[i].id == "archivo") {
            let letFile = formulario.elements[i].value;
            if (isNaN(letFile) || letFile < 0 || letFile > 115) {
                alert(
                    "El campo: " +
                    formulario.elements[i].name +
                    " debe ser un formato pdf"
                );
                formulario.elements[i].classList.add("error");
                formulario.elements[i].focus();
                return false;
            }
        } else if (formulario.elements[i].id == "matricula") {
            const patron = /^\d{4}\s?[A-Z]{3}$/;

            if (patron.test(document.getElementById("matricula").value)) {
                document.getElementById("matricula").classList.remove("error");
                return true;
            } else {
                alert(
                    "El campo: Matricula no está correcto.\n\nCuatro números, espacio en blanco opcional y 3 letras mayúsculas."
                );
                document.getElementById("matricula").focus();
                document.getElementById("matricula").classList.add("error");
                return false;
            }
        }
    }

    const urlport = 'http://solicitudes.com/post'

    postData(urlport, formulario)
    // Si todos los campos de texto son válidos se envia la peticion post

    async function postData(url, data) {
        const response = await fetch(url, {
          method: 'POST', 
          mode: 'cors', 
          cache: 'no-cache', 
          body: JSON.stringify(data) 
        });
      
        return response.json(); 
    }

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