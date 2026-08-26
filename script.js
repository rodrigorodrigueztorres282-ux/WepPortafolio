let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){

    var skills = document.getElementById("skills");

    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 300){

        let habilidades = document.getElementsByClassName("progreso");

        habilidades[0].classList.add("diseno-grafico");
        habilidades[1].classList.add("animacion-2d");
        habilidades[2].classList.add("motion-graphics");
        habilidades[3].classList.add("edicion-video");
        habilidades[4].classList.add("edicion-imagenes");
        habilidades[5].classList.add("manipulacion-imagenes");
        habilidades[6].classList.add("diseno-publicitario");
        habilidades[7].classList.add("comunicacion-visual");
        habilidades[8].classList.add("ilustracion-digital");
        habilidades[9].classList.add("contenido-digital");
        habilidades[10].classList.add("after-effects");
        habilidades[11].classList.add("adobe-animate"); 
        habilidades[12].classList.add("photoshop");
        habilidades[13].classList.add("bridge");
        habilidades[14].classList.add("mailchimp");
        habilidades[15].classList.add("meta-business");
        habilidades[16].classList.add("office");
    }

}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

function descargarCV() {
    const enlace = document.createElement("a");
    enlace.href = "CV Rodrigo Rodriguez.pdf";
    enlace.download = "CV Rodrigo Rodriguez.pdf";
    enlace.click();
}

function descargarCarta() {
    const enlace = document.createElement("a");
    enlace.href = "Carta_Recomendacion.pdf";
    enlace.download = "Carta_Recomendacion.pdf";
    enlace.click();
}

// AMPLIAR IMAGENES DEL PORTFOLIO

window.addEventListener("load", function(){

    const proyectos = document.querySelectorAll(".portfolio .proyecto");
    const visor = document.getElementById("visor-imagen");
    const imagenGrande = document.getElementById("imagen-grande");
    const cerrar = document.querySelector(".visor-imagen .cerrar");

    proyectos.forEach(function(proyecto){

        proyecto.addEventListener("click", function(){

            const imagen = proyecto.querySelector("img");

            imagenGrande.src = imagen.src;
            visor.style.display = "flex";

        });

    });

    cerrar.addEventListener("click", function(){

        visor.style.display = "none";

    });

    visor.addEventListener("click", function(e){

        if(e.target === visor){
            visor.style.display = "none";
        }

    });

});