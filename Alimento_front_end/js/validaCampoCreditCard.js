// Función que valida el campo de la targeta
function onkeyPress(event){

    var creditcard = document.getElementById('creditcard');
 
    var send = document.getElementById('send');
 
send.addEventListener('click', function(e){
    e.preventDefault();
    alert('Tarjate de credito es: '+creditcard.value.replace(/ /g, '') );
});
 
    creditcard.value = creditcard.value.replace(/[a-zA-Z]/g, '');
 
    //validamos si es american express para esto quitamos todos los espacios en blaco y luego veriricamos que tenga 4, 6 y 5 digitos.
    if(creditcard.value.replace(/ /g, '').match(/\b(\d{4})(\d{6})(\d{5})\b/))
        creditcard.value = creditcard.value
            .replace(/\W/gi, '')//quitamos todos los espacios demas
            .replace(/\b(\d{4})(\d{6})(\d{5})\b/, '$1 $2 $3') //si cumple el formato añadimos 3,6 y 5 digitos
            .trim();
    else //si no es american express entonces es una tarjeta visa o master card
        creditcard.value = creditcard.value
            .replace(/\W/gi, '')
            .replace(/(.{4})/g, '$1 ')
            .trim()
}
 
creditcard.addEventListener('keypress',onkeyPress);
creditcard.addEventListener('keydown',onkeyPress);
creditcard.addEventListener('keyup',onkeyPress);
// Fin de la función validar targeta