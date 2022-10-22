

async function getAlertas() {
    console.log('entre a solicitudes por el boton');
    const res = await fetch('https://api/alertas/inicio');
    const jsonData = await res.json();

    let tbodyHistorico = '';
    jsonData.map(({ id, title, body }) => {
        let tablebodyHistorico = (`
        <div class="card m-1" style="width: 18rem;">
            <div class="card-header">
                ${title}
            </div>
            <div class="card-body">
                ${body}
            </div>
        </div>
        `)
        
        tbodyHistorico += tablebodyHistorico;
    })
        
    let generateTableHistorico = document.getElementById('table-alertas');
    generateTableHistorico.innerHTML = tbodyHistorico;
}

window.onload = getAlertas;

