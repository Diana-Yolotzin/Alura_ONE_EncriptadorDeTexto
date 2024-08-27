document.getElementById('valorUsuario').addEventListener('input', function() {
    const input = this.value;
    const alert = document.getElementById('alert');
    const regex = /^[a-z]+$/;

    if (!regex.test(input)) {
        alert.style.display = 'block';
    } else {
        alert.style.display = 'none';
    }
});

document.getElementById ("copiarBoton").style.display = "none";

function ocultar() {
    document.getElementById ("vacio").style.display = "none";
    document.getElementById ("copiarBoton").style.display = "block";
}

function ocultarMensaje(){
    document.getElementById ("valorUsuario").value= "";
}

function copiar() {
    var texto = document.getElementById("respuesta").innerText;
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
}

function encriptador (){
        ocultar( );
        let mensaje = document.getElementById ("valorUsuario").value;
        ocultarMensaje();
        let respuesta ='';
        for (let i = 0; i < mensaje.length; i++) {
            let c = mensaje.charAt(i);

            if(c === 'a') {
                respuesta += "ai";
            } else if (c === 'o') {
                respuesta += "ober";
            } else if (c === 'e'){
                respuesta += "enter";
            } else if (c === 'i'){
                respuesta += "imes";
            } else if (c === 'u'){
                respuesta += "ufat";
            }
            else {
                respuesta += c;
            }
        }
        document.getElementById ("respuesta").innerText = respuesta;
    
}

function desencriptador (){
        ocultar( );
        let mensaje = document.getElementById ("valorUsuario").value;
        ocultarMensaje();
        let respuesta ='';
        for (let i = 0; i < mensaje.length; i++) {
            let subString = mensaje.substring(i);
        
            if(subString.indexOf("ober") === 0 ){
                respuesta += 'o';
                i += 3;
            } else if (subString.indexOf("ai") === 0 ){
                respuesta += 'a';
                i += 1;
            } else if (subString.indexOf("enter") === 0 ){
                respuesta += 'e';
                i += 4;
            } else if (subString.indexOf("imes") === 0 ){
                respuesta += 'i';
                i += 3;
            }else if (subString.indexOf("ufat") === 0 ){
                respuesta += 'u';
                i += 3;
            }

            else {
                respuesta += mensaje.charAt(i);
            }

        //console.log(subString);
    }
    document.getElementById ("respuesta").innerText = " "+respuesta;
}

