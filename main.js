const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i< matrizCodigo.length; i++){
        if (StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    ocultarContenido();
    return StringParaEncriptar;
    
}


function btndesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}
function desencriptar(StringParaDesencriptar) {
    let matrizCodigo2 = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i< matrizCodigo2.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo2[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo2[i][0],matrizCodigo2[i][1])
        }
    }
    ocultarContenido();
    return StringParaDesencriptar;
    
}

 /*Funcion de copiar el texto*/
 function copiar(){
    var contenido = document.getElementById('desifrar');
    contenido.select();
    document.execCommand('copy');
}

function ocultarContenido(){
    var texto = document.getElementById('insertar').value;

/*Si el usuario no ingresa ningun texto las imagenes y el texto se mantendran mostradas y el textarea y el boton de copiar se ocultaran */

    if (texto == ""){
        document.getElementById("imagenM").style.display="";         
        document.getElementById('text-1').style.display="";
        document.getElementById('text-2').style.display="";
        document.getElementById('desifrar').style.display="none";
        document.getElementById('copiar').style.display="none";
    }
    /* De lo contrario ocurra de manera invertida */
    else{
        document.getElementById("imagenM").style.display="none";
        document.getElementById('text-1').style.display="none";
        document.getElementById('text-2').style.display="none";
        document.getElementById('desifrar').style.display="";
        document.getElementById('copiar').style.display="";
    }
    }