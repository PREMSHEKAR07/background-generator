const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('body')

color1.addEventListener("input", ()=>{
    body.style.backgroundImage = `linear-gradient(to right, ${color1.value},${color2.value})`
})
color2.addEventListener("input", ()=>{
    body.style.backgroundImage = `linear-gradient(to right, ${color1.value},${color2.value})`
})