let boton=document.getElementsByClassName("botonaso")[0];
let navegador=document.getElementsByClassName("navegador")[0];
let bandera=true;
boton.addEventListener("click",function(){
    if(bandera){
        navegador.style.top="60px";
    }
    else{
        navegador.style.top="-2000px";
    }
    bandera=!bandera;
});