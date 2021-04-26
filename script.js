const arrayAlerts = [];
const arrayName = [];
const arrayFecha = [];
const arrayComentario = [];
const alerts = document.getElementById("alerts");
var names = document.getElementById("nombreAutor");
var datee = document.getElementById("datee");
var coments = document.getElementById("coments");

function drawAlerts(a, b, c) {

    alerts.innerHTML = arrayAlerts.map((alert, index) =>

        `<div class="alert alert-${alert} text-center " role="alert" onclick="deleteAlert()">
        <p>Nombre:${a}</p>
        <p>Fecha Publicacion: ${c}</p>
        <p>Comentario: ${b}</p>
        
      </div>`).join('');


}
const addAlert = (type) => {
    

    
    var a = names.value;
    var b = coments.value;
    var c = datee.value;
    if ((a == "") || (b == "") || (c == "")) {  //COMPRUEBA CAMPOS VACIOS
        document.getElementById("char").innerHTML = '<span style="color: red;">Campos vacios</span>';
    }else{
        arrayAlerts.unshift(type);
        drawAlerts(a, b, c);
    }

    

}

function deleteAlert() {

    arrayAlerts.shift();
    drawAlerts();
}

function countChars(obj, a) {
    var maxLength = a;
    var strLength = obj.value.length;
    switch (maxLength) {
        case 200:
            if (strLength > maxLength) {
                document.getElementById("charNum2").innerHTML = '<span style="color: red;">' + strLength + ' de ' + maxLength + ' caracteres maximo.</span>';
            } else {
                document.getElementById("charNum2").innerHTML = strLength + ' de ' + maxLength + ' caracteres maximo.';
            } break;
        case 3:
            if (strLength >= maxLength) {
                document.getElementById("charNum").innerHTML = strLength + ' de ' + maxLength + ' caracteres minimo.';

            } else {
                document.getElementById("charNum").innerHTML = '<span style="color: red;">' + strLength + ' de ' + maxLength + ' caracteres minimo.</span>';
            } break;


        default:
            document.getElementById("charNum").innerHTML = '<span style="color: red;">nada</span>';
            break;
    }

}