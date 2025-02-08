/**
 * Autor: jl_
 * ADSI - SENA
 * email: devluisluzardo@gmail.com
 * Fecha creacion : 21 - Sept- 2023
 * 
 * desscripcion:
 * 
**/

//Firebase: Authentication
//Google Firebase : Google Popu up
import { getIdTokenResult } from "firebase/auth";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

//Firebase: RealTime Database
import {
  getDatabase,
  ref,
  set,
  onValue,
  query,
  orderByKey,
  get,
  limitToLast,
  equalTo,
  child,
  update
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";


//texto original: plantilla contacto whp form
const input = document.getElementById("textwhpform");


// Importa la función desde index.js
//import { miFuncion} from './whpformconvert.js';
// Llama a la función importada

let direccion = "", celular = "", ciudad = "";

//Firebase: Initialize service
const firebaseApp = initializeApp({
  apiKey: "AIzaSyApf3ZmNqhjhIVSRWV7BNISx4H2YIBwT6Q",
  authDomain: "gmynimaxitiendaregadd.firebaseapp.com",
  databaseURL: "https://gmynimaxitiendaregadd-default-rtdb.firebaseio.com",
  projectId: "gmynimaxitiendaregadd",
  storageBucket: "gmynimaxitiendaregadd.firebasestorage.app",
  messagingSenderId: "835030557718",
  appId: "1:835030557718:web:7045e20c0d741b817a8137",
  measurementId: "G-SJBQEZNLJJ"
});

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider(firebaseApp);

// Asignamos el objeto a la constante
// Obtenemos el elemento, imagen,...
const login = document.getElementById("accedergoogle");
const cerrarsesion = document.getElementById("cerrarsesion");
const emailsesion = document.getElementById("emailinisesion");
const logininac = document.getElementById("logininac");
const loginac = document.getElementById("loginac");
//const myDiv = document.getElementById("sliderinisesion");
const info = document.getElementById("idinfo");
const loginactivo = document.getElementById("loginactivo");
const cmdlimpiar = document.getElementById("cmdlimpiar");
const textwhp = document.getElementById("textwhpform");
const result = document.getElementById("resultado");
const idresout = document.getElementById("idresout");
const cmdgrabaregcontacti = document.getElementById("cmdgrabaregcontacti");

login.addEventListener("click", (e) => {
  signInWithRedirect(auth, provider);

  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;

    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});


//CERRAR SESION
cerrarsesion.addEventListener("click", (e) => {
  auth.signOut()
    .then(() => {
      // Cierre de sesión exitoso
      document.getElementById("login").style.display = "block";
      //habilitar cuentas google
      document.getElementById("accedergoogle").style.display = "block";
      //Ocultar Cerrar sesion
      document.getElementById("cerrarsesion").style.display = "none";
      //Mostrar texto          
      document.getElementById("emailinisesion").innerText = "Email";
      ////console.log('Sesión cerrada correctamente.');
      // Aquí puedes redirigir al usuario a una página de inicio de sesión o mostrar un mensaje de confirmación.
    })
    .catch((error) => {
      // Manejo de errores
      console.error('Error al cerrar sesión:', error);
    });
});
//---


//AL cambiar el estado de autenticacion
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const uname = user.displayName;
    const uemail = user.email;
    let id = 1;

    const emailEncoded = btoa(uemail); // Codificar el email en Base64
    const db = getDatabase();

    const dbf = ref(db, 'usuario/idkey:' + emailEncoded);
    onValue(dbf, (snapshot) => {
      let data = snapshot.val();

      if (data !== null) {
        // Si data no es nulo, significa que hay un valor en el nodo
        ///console.log('Hay un valor en el nodo: ......... ');
        //console.log(data);

        //info.value = "Usuario autenticado. " + uemail;               

        //--- porque el usuario ya fue autenticado
        //ocultar login
        document.getElementById("login").style.display = "none";
        //ver login activo.
        document.getElementById("loginactivo").style.display = "block";
        //bloquear cuentas google
        document.getElementById("accedergoogle").style.display = "none";
        //ver Cerrar sesion
        document.getElementById("cerrarsesion").style.display = "block";
        //Modtrar texto          
        document.getElementById("emailinisesion").innerText = uemail;
        //myDiv.style.backgroundColor = "lightblue";
        //ocultar login inactivo
        document.getElementById("logininac").style.display = "none";
        //---
      }
      else {
        //--- porque el usuario no ha sido autenticado
        //Ver login
        document.getElementById("login").style.display = "block";
        //ocultar login activo.
        document.getElementById("loginactivo").style.display = "none";
        //Ocultar Cerrar sesion
        document.getElementById("cerrarsesion").style.display = "none";
        //Mostrar texto          
        document.getElementById("emailinisesion").innerText = "Email";
        //myDiv.style.backgroundColor = "lightblue";
        //Ver login inactivo
        document.getElementById("logininac").style.display = "block";
        //---  
        // Si data es nulo, significa que no hay un valor en el nodo
        //console.log('No hay un valor en el nodo');
        const path = 'usuario/idkey:' + emailEncoded;
        // Luego, puedes usar 'path' en tu función set
        set(ref(db, path), {
          nombre: uname,
          email: uemail,
          key: uid,
          idrol: 4,
          idnivel: 2
        });
      }
    });
    // ...
  }
  else {
    // User is signed out .
    //Desplegamos
    login.style.display = "block";
    loginactivo.style.display = "none";
    emailsesion.style.display = "none";
    cerrarsesion.style.display = "none";
    logininac.style.display = "block";
    loginac.style.display = "none";
    //myDiv.style.backgroundColor = "lightblue";
  }
});

cmdlimpiar.addEventListener('click', () => {
  // Limpiar text
  textwhp.value = "";
  result.value = "";
  info.innerText= "Info ...";
  idresout.innerText="(Resultado Registro Whp Form...)";
});


//Grabar registro de contacto en Realtime Database
cmdgrabaregcontacti.addEventListener("click", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      var idresout = document.getElementById('idresout');
      // El usuario ya ha iniciado sesión
      const uid = user.uid;
      const uname = user.displayName;
      const uemail = user.email;
      let id = 1;
      // Codificar el email en Base64
      var emailEncoded = btoa(uemail);

      //Datos de contacto. Asignados al vector
      var resultado = miFuncion(input.value);
      var arregloDatos = [];
      arregloDatos = resultado.split(",");
      //#respuesta + email encode: llave principal de registro
      //emailEncoded = ""+arregloDatos[0] + emailEncoded;    
      //const emailEncoded = btoa(uemail); // Codificar el email en Base64    

      var resp = arregloDatos[0].trim() + "_" + emailEncoded;
      var resp1 = arregloDatos[1].trim();
      var resp2 = arregloDatos[2].trim();
      var resp3 = arregloDatos[3].trim();
      var resp4 = arregloDatos[4].trim();
      var resp5 = arregloDatos[5].trim();

      const db = getDatabase();
      const dbf = ref(db, "usuario/respuesta:" + resp);
      onValue(dbf, (snapshot) => {
        let data = snapshot.val();
        var path = "usuario/respuesta:" + resp;
        // Luego, puedes usar 'path' en tu función set
        set(ref(db, path), {
          nombre: resp1,
          correoelectronico: resp2,
          whatsapp: resp3,
          preferencias: resp4,
          observaciones: resp5
        });
      });

      info.innerText = "Registro Grabado Correctamente";

      //const vectorDatos = ["10004", "Olaf Luzardo", "devluisluzardo@gmail.com", "+57 3236992344", "Avena", "Ssss"];
      var claves = ["Respuesta #", "Nombre", "Correo electronico", "Whatsapp", "Preferencias", "Observaciones"];
      var objetoRespuesta = {};
      for (var i = 0; i < arregloDatos.length; i++) {
        objetoRespuesta[claves[i]] = arregloDatos[i];
      }
      //console.log(JSON.stringify(objetoRespuesta, null, 2));
      idresout.innerText = arregloDatos[0] + "" + JSON.stringify(objetoRespuesta, null, 2);
      // arregloDatos =[];
    } else {
      // El usuariono ha iniciado sesión
      //console.log("Usuario no autenticado.");    
      info.innerText = "Usuario no autenticado.";
    }
  });
});
// !!!! fin grabar registro


