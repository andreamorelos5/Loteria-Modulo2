

const boton1 = document.getElementById("butTab1")
const boton2 = document.getElementById("butTab2")
const boton3 = document.getElementById("butTab3")
butTab1.addEventListener("click", mostrarTablero1);
butTab1.addEventListener("click", mostrarPanel);

butTab2.addEventListener("click", mostrarTablero2);
butTab2.addEventListener("click", mostrarPanel);

butTab3.addEventListener("click", mostrarTablero3);
butTab3.addEventListener("click", mostrarPanel);


// Funciones para mostrar cada tablero

function mostrarTablero1 (){
    let tablero1 = document.getElementById("tablero1");
    if (tablero1.style.display === "none") {
        tablero1.style.display = "block";
        tablero2.style.display = "none";
        tablero3.style.display = "none";
    } else {
        tablero1.style.display = "none";
    }
}
function mostrarTablero2 (){
    let tablero2 = document.getElementById("tablero2");
    if (tablero2.style.display === "none") {
        tablero2.style.display = "block";
        tablero1.style.display = "none";
        tablero3.style.display = "none";
    } else {
        tablero2.style.display = "none";
    }
}
function mostrarTablero3 (){
    let tablero3 = document.getElementById("tablero3");
    if (tablero3.style.display === "none") {
        tablero3.style.display = "block";
        tablero1.style.display = "none";
        tablero2.style.display = "none";
    } else {
        tablero3.style.display = "none";
    }
}


// Función para desplegar el menú lateral con el mazo y botones
function mostrarPanel(){
    let panel = document.getElementById("panel");
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }   
}



// // Funcion para mostrar el mazo aleatoriamente

//  function imagenAleatoria(){
//     let mazo=document.getElementById("mazo")
//     var cantidadImágenes=54
//     var aleatorio=Math.floor(Math.random() * cantidadImágenes)
//     mazo.innerHTML='<img src="../cartas/'+aleatorio+'.jpg" alt="">'
//  }


// Funcion para iniciar juego y barajear

const numCartas = 54;
function mazoRand(numCartas){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * numCartas + 1 ));
    }

var cartasMazo = new Array();
cartasMazo[0] = "../cartas/1.jpg"
cartasMazo[1] = "../cartas/2.jpg"
cartasMazo[2] = "../cartas/3.jpg"
cartasMazo[3] = "../cartas/4.jpg"
cartasMazo[4] = "../cartas/5.jpg"
cartasMazo[5] = "../cartas/6.jpg"
cartasMazo[6] = "../cartas/7.jpg"
cartasMazo[7] = "../cartas/8.jpg"
cartasMazo[8] = "../cartas/9.jpg"
cartasMazo[9] = "../cartas/10.jpg"
cartasMazo[10] = "../cartas/11.jpg"
cartasMazo[11] = "../cartas/12.jpg"
cartasMazo[12] = "../cartas/13.jpg"
cartasMazo[13] = "../cartas/14.jpg"
cartasMazo[14] = "../cartas/15.jpg"
cartasMazo[15] = "../cartas/16.jpg"
cartasMazo[16] = "../cartas/17.jpg"
cartasMazo[17] = "../cartas/18.jpg"
cartasMazo[18] = "../cartas/19.jpg"
cartasMazo[19] = "../cartas/20.jpg"
cartasMazo[20] = "../cartas/21.jpg"
cartasMazo[21] = "../cartas/22.jpg"
cartasMazo[22] = "../cartas/23.jpg"
cartasMazo[23] = "../cartas/24.jpg"
cartasMazo[24] = "../cartas/25.jpg"
cartasMazo[25] = "../cartas/26.jpg"
cartasMazo[26] = "../cartas/27.jpg"
cartasMazo[27] = "../cartas/28.jpg"
cartasMazo[28] = "../cartas/29.jpg"
cartasMazo[29] = "../cartas/30.jpg"
cartasMazo[30] = "../cartas/31.jpg"
cartasMazo[31] = "../cartas/32.jpg"
cartasMazo[32] = "../cartas/33.jpg"
cartasMazo[33] = "../cartas/34.jpg"
cartasMazo[34] = "../cartas/35.jpg"
cartasMazo[35] = "../cartas/36.jpg"
cartasMazo[36] = "../cartas/37.jpg"
cartasMazo[37] = "../cartas/38.jpg"
cartasMazo[38] = "../cartas/39.jpg"
cartasMazo[39] = "../cartas/40.jpg"
cartasMazo[40] = "../cartas/41.jpg"
cartasMazo[41] = "../cartas/42.jpg"
cartasMazo[42] = "../cartas/43.jpg"
cartasMazo[43] = "../cartas/44.jpg"
cartasMazo[44] = "../cartas/45.jpg"
cartasMazo[45] = "../cartas/46.jpg"
cartasMazo[46] = "../cartas/47.jpg"
cartasMazo[47] = "../cartas/48.jpg"
cartasMazo[48] = "../cartas/49.jpg"
cartasMazo[49] = "../cartas/50.jpg"
cartasMazo[50] = "../cartas/51.jpg"
cartasMazo[51] = "../cartas/52.jpg"
cartasMazo[52] = "../cartas/53.jpg"
cartasMazo[53] = "../cartas/54.jpg"

function cambiarCarta(){
    document.getElementById("mazo").src = cartasMazo[mazoRand(54)-1];
}

const butIniciar = document.getElementById("butIniciar")
const butBarajear = document.getElementById("butBarajear")

butIniciar.addEventListener("click", function() {
    document.getElementById("mazo").src = cartasMazo[mazoRand(54)-1];
    // onClick code
}, {once : true});

butBarajear.addEventListener("click", cambiarCarta)