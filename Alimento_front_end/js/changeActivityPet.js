//Función que hace que aparezca una imagen diferente
//cada vez que se le da clik al radio button.
function changeImageActivity(id){
    var pet_quiet  = document.getElementById('pet_quiet');
    var pet_active = document.getElementById('pet_active');
    var pet_very_active  = document.getElementById('pet_very_active');
    if(id == 'pet_exerc_quiet'){
        pet_active.style.display = 'none';
        pet_very_active.style.display = 'none';
        pet_quiet.style.display = 'inline';
    }else if(id == 'pet_exerc_active'){
        pet_quiet.style.display = 'none';
        pet_very_active.style.display = 'none';
        pet_active.style.display = 'inline';
    }else  if(id == 'pet_exerc_very_active'){
        pet_quiet.style.display = 'none';
        pet_active.style.display = 'none';
        pet_very_active.style.display = 'inline';
    }
}

// --------------Fin de la función-------------------