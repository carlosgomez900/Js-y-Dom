 //console.log('Funciona correctamente');

 //querySelector  

 //nos va a retornar ya sea ninguno o hasta un elemnto que concuerde con el selector que escribimos y tiene un sintaxis como css

 const heading = document.querySelector('.header__texto h2')  //retorna 0 o 1 elementos
 heading.textContent = 'Nuevo Heading'; //se modifica texto desde js 
 //heading.classList.add('nueva-clase');
 console.log(heading);
 //console.log(heading);





 //querySelectorAll //retorna a ceros  si el selector esta mal hasta todos los elementos que concuerden con el selector tipo css que le pasemos

 const enlaces = document.querySelectorAll('.navegacion a');
 //console.log(enlaces[0]);   //[] podemos seleccionar el enlace que queremos 

 enlaces[0].textContent = 'Nuevo Texto para Enlace';
 enlaces[0].classList.add('nueva-clase');   //crea o agregar clases
 //enlaces[0].classList.remove('navegacion__enlace'); // eliminar una clase
 //enlaces[0].href = 'http://google.com';



//  //getElementById

//  const heading2 = document.getElementById('heading');
//  console.log(heading2);


// Crear HTML con createElement
//Generar un nuevo enlace 

const nuevoEnlace = document.createElement('A') // esto nos permite crear codigo html ()selecionas la etiquete que quieras crear se recomiendo escribir el codigo en mayusculas ejemplo div - DIV solo en createElemnt


//Agregar el href

nuevoEnlace.href = 'nuevo-enlace.html'; //Parte 1

//agregar la clase 

nuevoEnlace.classList.add('navegacion__enlace'); //parte 2

//Agregar el texto 

nuevoEnlace.textContent = 'Tienda Virtual'; //parte 3


// Parte 1 <a href="nosotros.html" //Parte 2 class="nuevo-enlace">    //Parte 3 Nosotros </a>

// Agregarlo al Documento  al finalizar el codigo JS de HTML pasa decirle donde queremos agregarlo

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)    //esta funcion nos permite agregar un elemento digamos una variable eh insertarlaen otro lugar 


console.log(nuevoEnlace);



//Eventos en JavaScript

// console.log(1);
//  //window es un nivel mas alto que document  "document seria como el html"


//  //load espera a que el JS y los archivos que dependen del HTML esten listos
// //en funcion aparte pasariamos de esto 

//  window.addEventListener('load', function() {   
//      console.log(2);

//  });

// //a esto 

// //window.addEventListener('load', imprimir);


// //otra forma de registrar este log es 

// window.onload = function() {
//     console.log(3)
// }
 
// // Un tercer evento //este es el que mas se utiiza por que carga mas rapido el html

// document.addEventListener('DOMContentLoaded', function() {  //Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4);
// });

// console.log(5);

//funciones aparte 

// function imprimir () {
//     console.log(2);
// }


//  window.onscroll = function(e) {
//     console.log(e);
//  }



//Seleccionar  elementos y asociarles un evento 

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault();   //no recarga la pagina hace la accion y es especialmente para formularios

//     //Validar un Formulario 

//     console.log('enviando formulario');
// });



//Eventos de los Input y de los Texarea

const datos = {
    nombre :  '',
    email :   '',
    mensaje : ''
    
}



const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');



// nombre.addEventListener('input', function(e) {
//     console.log(e.target.value)
// });

// email.addEventListener('input', function(e) {
//     console.log(e.target.value)
// });

// mensaje.addEventListener('input', function(e) {
//     console.log(e.target.value)
// });


//podemos ahorrar codigo de esta manera 

//validar formulario



nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//El evento de Submit 

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
   
    
    //Validar el  formulario 


    const { nombre, email, mensaje } = datos;

    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);

    if(nombre === '' || email === '' || mensaje === '') {
       // console.log('Todos los campos son Obligatorios')
       mostrarAlerta('Todos los campos son Obligatorios', true);
        return; // corta le ejecucion del codigo
    } 

    //crear la otra alerta  //Enviar formulario

    //console.log('Enviando Formulario');

    mostrarAlerta('Mensaje enviado Correctamente');



   });


function leerTexto(e) {
   // console.log(e.target.value);

   datos[e.target.id] = e.target.value;

  // console.log(e.target);


    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout( () => {
        alerta.remove();
    }, 5000)

}


//mostrar mensaje de que se envio Correctamente 

// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto')

//     formulario.appendChild( alerta );


    // que desaparezca despues de 5 segundos 

//     setTimeout( () => {
//     alerta.remove();
//     }, 5000);

// }



//Muestra un error en Pantalla

// function mostrarError(mensaje) {
//     //console.log(mensaje);
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

  

//     //console.log(error);
    

//     formulario.appendChild( error );

    

//     //Desaparezca despues de 5 segundos

//     setTimeout( () => {
//         error.remove();
//     }, 5000);

  
// }







