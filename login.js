
const formIn = document.getElementById('singin')


async function singin() {
    e.preventDefault();
    let alertLogin;
    let generateAlert = document.getElementById('alert-login');

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user.value === "" || password.value === '') {
        alertLogin = (`<div class="alert alert-warning mt-2" role="alert">
                debe ingresar usuario y contraseña</div>`);
        generateAlert.innerHTML = alertLogin;
    } else {
        sendUser(user, password)
    } 
}

async function sendUser (user, pswordD) {
    const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    };
    const res = await fetch("http://localhost/api/user", options)
    const {status, date} = await res.json();
    if(state === 200) {
        console.log('usuario valido');
    } else {
        console.log('usuario invalido')
    }
}

function encriptar(password) {
    return textoCifrado = password.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
}

function desencriptar() {
    var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
}



formIn.addEventListener('submit', (e) => {
    e.preventDefault();
    let alertLogin;
    let generateAlert = document.getElementById('alert-login');

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user.value === "" || password.value === '') {
        alertLogin = (`<div class="alert alert-warning mt-2" role="alert">
                debe ingresar usuario y contraseña</div>`);
        generateAlert.innerHTML = alertLogin;
    } else {
        getLogin(user, password)
    } 
})

async function getLogin(user, passwordP) {
    const getItems = await fetch('./PRUEBAS/user.json');
    let data = await getItems.json();
    const getDataSol = await fetch('./PRUEBAS/solicitudes.json');
    let localDataSet = await getDataSol.json()
    console.log(localDataSet);
    localStorage.setItem('solicitudes', JSON.stringify(localDataSet))
    data.map(({username, password}) => {
        if(user === username && passwordP === password) {
            console.log('el usuario si existe')
            return window.location.href = "home/index.html";
        }
    })
    let alertLogin;
    let generateAlert = document.getElementById('alert-login');
    alertLogin = (`<div class="alert alert-warning mt-2" role="alert">
                usuario o contraseña incorrectos</div>`);
        generateAlert.innerHTML = alertLogin;

    console.log('fin de la solicitud')    
}