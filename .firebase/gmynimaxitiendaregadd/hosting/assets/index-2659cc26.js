import{initializeApp as p}from"https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";import{getAuth as f,GoogleAuthProvider as a,signInWithRedirect as I,getRedirectResult as E,onAuthStateChanged as b}from"https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";import{getDatabase as B,ref as c,onValue as h,set as v}from"https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();document.getElementById("textwhpform");const r=p({apiKey:"AIzaSyApf3ZmNqhjhIVSRWV7BNISx4H2YIBwT6Q",authDomain:"gmynimaxitiendaregadd.firebaseapp.com",databaseURL:"https://gmynimaxitiendaregadd-default-rtdb.firebaseio.com",projectId:"gmynimaxitiendaregadd",storageBucket:"gmynimaxitiendaregadd.firebasestorage.app",messagingSenderId:"835030557718",appId:"1:835030557718:web:7045e20c0d741b817a8137",measurementId:"G-SJBQEZNLJJ"}),d=f(r),x=new a(r),m=document.getElementById("accedergoogle"),y=document.getElementById("cerrarsesion"),k=document.getElementById("emailinisesion"),L=document.getElementById("logininac"),A=document.getElementById("loginac");document.getElementById("sliderinisesion");const N=document.getElementById("idinfo");m.addEventListener("click",o=>{I(d,x),E(d).then(t=>{a.credentialFromResult(t).accessToken,t.user}).catch(t=>{t.code,t.message,a.credentialFromError(t)})});y.addEventListener("click",o=>{d.signOut().then(()=>{document.getElementById("login").style.display="block",document.getElementById("accedergoogle").style.display="block",document.getElementById("cerrarsesion").style.display="none",document.getElementById("emailinisesion").innerText="Email"}).catch(t=>{console.error("Error al cerrar sesión:",t)})});b(d,o=>{if(o){const t=o.uid,l=o.displayName,i=o.email,e=btoa(i),n=B(),s=c(n,"usuario/idkey:"+e);h(s,g=>{if(g.val()!==null)N.innerText="Usuario autenticado. "+i,document.getElementById("login").style.display="none",document.getElementById("loginactivo").style.display="block",document.getElementById("accedergoogle").style.display="none",document.getElementById("cerrarsesion").style.display="block",document.getElementById("emailinisesion").innerText=i;else{document.getElementById("login").style.display="block",document.getElementById("loginactivo").style.display="none",document.getElementById("cerrarsesion").style.display="none",document.getElementById("emailinisesion").innerText="Email",console.log("No hay un valor en el nodo");const u="usuario/idkey:"+e;v(c(n,u),{nombre:l,email:i,key:t,idrol:4,idnivel:2})}})}else m.style.display="block",loginactivo.style.display="none",k.style.display="none",y.style.display="none",L.style.display="block",A.style.display="none"});
