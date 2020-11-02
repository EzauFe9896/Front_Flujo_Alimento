
// pasa el .value o .valueAsNumber al primer parámetro de new Date()
document.querySelector("input[type=number]")
.oninput = e => console.log(new Date(e.target.valueAsNumber, 0, 1))