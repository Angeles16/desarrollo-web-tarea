
const formIn = document.getElementById('singin')
console.log('hello')

formIn.addEventListener('submit', (e) => {
    e.preventDefault();
    let alertLogin;
    let generateAlert = document.getElementById('alert-login');

    const user = document.getElementById('user');
    const password = document.getElementById('password');

    if (user.value === "" || password.value === '') {
        alertLogin = (`<div class="alert alert-warning mt-2" role="alert">
                debe ingresar usuario y contraseña</div>`);
        generateAlert.innerHTML = alertLogin;
    } else {
        const valueUser = user.value;
        const valuePassword = password.value;
        let encrip = encriptar(valuePassword);
        console.log({valueUser, encrip})
        alertLogin = ''
        generateAlert.innerHTML = alertLogin;
    } 
})


function encriptar(password) {
    return textoCifrado = password.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
}

function desencriptar() {
    var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
}

async function sendUser (user) {
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