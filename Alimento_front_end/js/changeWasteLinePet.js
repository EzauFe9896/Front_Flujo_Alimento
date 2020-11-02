  //Función que hace que aparezca una imagen diferente
//cada vez que se le da clik al radio button.
function changeImageWaistline(id){
    var pet_slim    = document.getElementById('pet_slim');
    var pet_very_thin = document.getElementById('pet_very_thin');
    var pet_ideal   = document.getElementById('pet_ideal');
    var pet_fat     = document.getElementById('pet_fat');
    var pet_very_fat= document.getElementById('pet_very_fat');
    if(id == 'pet_waistline_slim'){
        pet_very_thin.style.display = 'none';
        pet_ideal.style.display = 'none';
        pet_fat.style.display = 'none';
        pet_very_fat.style.display = 'none';
        pet_slim.style.display = 'inline';
    }else if(id == 'pet_waistline_very_thin'){
        pet_slim.style.display = 'none';
        pet_ideal.style.display = 'none';
        pet_fat.style.display = 'none';
        pet_very_fat.style.display = 'none';
        pet_very_thin.style.display = 'inline';
    }else  if(id == 'pet_waistline_ideal'){
        pet_slim.style.display = 'none';
        pet_very_thin.style.display = 'none';
        pet_fat.style.display = 'none';
        pet_very_fat.style.display = 'none';
        pet_ideal.style.display = 'inline';
    }else if(id == 'pet_waistline_fat'){
        pet_slim.style.display = 'none';
        pet_very_thin.style.display = 'none';
        pet_ideal.style.display = 'none';
        pet_very_fat.style.display = 'none';
        pet_fat.style.display = 'inline';
    }else if(id == 'pet_waistline_very_fat'){
        pet_slim.style.display = 'none';
        pet_very_thin.style.display = 'none';
        pet_ideal.style.display = 'none';
        pet_fat.style.display = 'none';
        pet_very_fat.style.display = 'inline';
    }
}
// --------------Fin de la función-------------------