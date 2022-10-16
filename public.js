
console.log("hellos word")

/*-- Renderizado para nadvar --*/
let domElement = (`
<nav class="navbar navbar-expand navbar-light" style="background: #425F57">
<div class="collapse navbar-collapse mx-4" id="navbarSupportedContent">
       <ul class="navbar-nav mr-auto">
       <li class="nav-item active mx-1" >
       <a class="nav-link" style="color: #ffffff" href="/home/index.html">Inicio</a>
       </li>
       <li class="nav-item active mx-1" >
       <a class="nav-link" style="color: #ffffff" href="/solicitudes/index.html">Solicitudes</a>
       </li>
       <li class="nav-item mx-1">
       <a class="nav-link" style="color: #ffffff" href="/autorizaciones/index.html">Autorizaciones</a>
       </li>
       <li class="nav-item mx-1">
       <a class="nav-link" style="color: #ffffff" href="/seguimiento/index.html">Seguimiento</a>
       </li>
       <li class="nav-item mx-1">
       <a class="nav-link" style="color: #ffffff" href="/corizaciones/index.html">Cotizaciones</a>
       </li>
       <li class="nav-item mx-1">
       <a class="nav-link" style="color: #ffffff" href="/reportes/index.html">Reportes</a>
       </li>
       <li class="nav-item mx-1">
       <a class="nav-link" style="color: #ffffff" href="/estado/index.html">Estados</a>
       </li>
           <li class="nav-item mx-1">
           <a class="nav-link" style="color: #ffffff" href="/presupuesto/index.html">Presupuestos</a>
           </li>
           </ul>
           <div style="width: 100%; text-align: end;">
           <button onclick="myFunction()" style="border: none; background: none">
           <img src="../public-icons/singout.svg" style="height: 40px;"></img>
           </button>
           </div>
           </div>
           </nav>`)
let generateNadvar = document.getElementById('nadvarId');
generateNadvar.innerHTML = domElement

/*-- Renderizado para nadvar fin --*/

/*-- Funciones --*/
function myFunction() {
    console.log('me precionaron xd')
}