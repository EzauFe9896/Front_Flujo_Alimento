// Esta funcion trae el nombre de la mascota cuando se registra en el primer paso
function setName(){
    var petName = document.getElementById('pet_name').value;
    var divName = document.getElementsByClassName('name');
    for (i = 0; i < divName.length; i++) {
        divName[i].innerHTML = petName.toUpperCase();
    }
}
// ----------------Fin de la función--------------