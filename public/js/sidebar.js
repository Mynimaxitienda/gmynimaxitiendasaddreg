/**
* Autor : Luis Luzardo
  jl
  ADSI - SENA
  Barranquilla - Colombia
  Fecha Inicio : Jueves 26 sept
  Hora  Inicio : 09:00 am
  Descripción  : Colapsible Sidebar.
  manejo de eventos y efectos.
*/


//evento clic botón menuside

  const menuside = document.getElementById("idbtnside");
  const sidebar  = document.getElementById("mySidebar");
  const btnside  = document.getElementById("idbtnside");
  
  const op1 = document.getElementById("opside1");
  const op2 = document.getElementById("opside2");
  const op3 = document.getElementById("opside3");
  const op4 = document.getElementById("opside4");
  const op5 = document.getElementById("opside5");
  const op6 = document.getElementById("opside6"); 
  const op7 = document.getElementById("opside7");  
  const op8 = document.getElementById("opside8");
  const op9 = document.getElementById("opside9");
  
  const img1 = document.getElementById("idinicio");
  const img2 = document.getElementById("idproductos");  
  const img3 = document.getElementById("idcuenta"); 
  const img4 = document.getElementById("idcarrito");  
  const img5 = document.getElementById("idacercade");  
  const img6 = document.getElementById("idcontacto");  
  const img7 = document.getElementById("idinfo");  
  const img8 = document.getElementById("idblog");  
  const img9 = document.getElementById("idfooter");
  
  const mainpage  = document.getElementById("mainpage");
  const mainencab = document.getElementById("idmainencab"); 
  
  
  btnside.style.background = "black";
  sidebar.style.width = "170px";
  //mainencab.style = " padding-top: 120px; width: 100%;"
          
  //texto opciones
  limp();  
  
  /*
  sidebar.addEventListener("click", (e) => {
    var x = document.getElementsByClassName("sidebar");
    //alert(x); //objectHtmlcollection
    //limp();
    //op1.innerHTML = "Inicio";           
  });       
  */ 
 
  var seg1, t;
  
  img1.addEventListener("click", (e) => {
    limp();
    op1.innerHTML = "Inicio"
    op1.style = "font-size: 18px;"
    op1.style = "color: white;"
    //var seg_=segtimedCount1();
    //alert(seg_);
    //timedCount1();
  });  
  
  img2.addEventListener("click", (e) => {
    limp();
    op2.innerHTML = "Productos";     
    op2.style = "font-size: 18px;"
    op2.style = "color: white;"     
  });
  
  img3.addEventListener("click", (e) => {
    limp();
    op3.innerHTML = "Cuenta";           
    op3.style = "font-size: 18px;"
    op3.style = "color: white;"  
  });
  img4.addEventListener("click", (e) => {
    limp();
    op4.innerHTML = "Carrito";
    op4.style = "font-size: 18px;"
    op4.style = "color: white;"     
  });     
  img5.addEventListener("click", (e) => {
    limp();
    op5.innerHTML = "Acerca de";         
    op5.style = "font-size: 18px;"
    op5.style = "color: white;"    
  });     
  img6.addEventListener("click", (e) => {
    limp();
    op6.innerHTML = "Contacto";      
    op6.style = "font-size: 18px;"
    op6.style = "color: white;"         
  });
  img7.addEventListener("click", (e) => {
    limp();
    op7.innerHTML = "Info";      
    op7.style = "font-size: 18px;"
    op7.style = "color: white;"         
  });
  img8.addEventListener("click", (e) => {
    limp();
    op8.innerHTML = "Blog";         
    op8.style = "font-size: 18px;"
    op8.style = "color: white;"      
  });
  img9.addEventListener("click", (e) => {
    limp();
    op9.innerHTML = "Pie Pagina";    
    op9.style = "font-size: 18px;"
    op9.style = "color: white;"           
  });          
     
  //menu flotante : top      
  if (menuside) {
    
    menuside.addEventListener("click", (e) => {     

      if (sidebar.style.width === "310px") {
        // Si el sidebar está abierto, ciérralo : #0000ff
        sidebar.style.width = "75px";
        sidebar.style.height = "586px";
        
        //efectos para el boton hamb: cambiar a ☰
        btnside.innerHTML = "☰  "; // Cambia el icono a "☰ "
        btnside.style = "margin-left:12px";
        
        //mainencab.style = "padding-left: 78px; padding-top: 120px; width: 100%;"
        
        //texto opciones
        limp();  
        
        //desplegar pagina a la derecha...
        /* mainpage.style= "margin-left : 70px"; */       
        
      }
      else {      
        // Si el sidebar está cerrado, ábrelo
        sidebar.style.width = "310px";
        sidebar.style.height = "586px";
        //efectos para el boton hamb: cambiar a x
        btnside.innerHTML = "X "; // Cambia el icono a "X"
        //Boton X cerrar, moverlo a la derecha
        btnside.style = "margin-left:247px";        
        
        //mainencab.style = "padding-left: 78px; padding-top: 120px; width: 100%;"
        
        
                
        //texto opciones
        op1.innerHTML = "Inicio";
        op2.innerHTML = "Productos";
        op3.innerHTML = "Cuenta";
        op4.innerHTML = "Carrito";
        op5.innerHTML = "Acerca de";
        op6.innerHTML = "Contacto";
        op7.innerHTML = "Info";
        op8.innerHTML = "Blog";
        op9.innerHTML = "Pie de Pagina";
        
        //quitar margen  a la ozquierda... 
        /* mainpage.style= "margin-left : 70px"; */
                
        op1.style = "color: white;"
        op2.style = "color: white;"
        op3.style = "color: white;"
        op4.style = "color: white;"        
        op5.style = "color: white;"
        op6.style = "color: white;"
        op7.style = "color: white;"
        op8.style = "color: white;"
        op9.style = "color: white;"
      }
             
    });
}  

//Limpiar variables de las opciones del sidebar    
function limp(){
  //texto opciones
  op1.innerHTML = ""; op2.innerHTML = ""; op3.innerHTML = ""; 
  op4.innerHTML = ""; op5.innerHTML = ""; op6.innerHTML = ""; 
  op7.innerHTML = ""; op8.innerHTML = ""; op9.innerHTML = "";
}

//f
 


