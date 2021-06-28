function roll() {
const resultado = Math.floor(Math.random() * 6 + 1)
let img = document.getElementById('dado')
let pontos = document.getElementsByTagName('p')[0]
if (resultado == 1) {
    img.src = 'face1.png'
    pontos.innerHTML = '1 ponto!'
} else if (resultado == 2) {
    img.src = 'face2.png'
    pontos.innerHTML = '2 pontos!'
} else if (resultado == 3) {
    img.src = 'face3.png'
    pontos.innerHTML = '3 pontos!'
} else if (resultado == 4) {
    img.src = 'face4.png'
    pontos.innerHTML = '4 pontos!'
} else if (resultado == 5) {
    img.src = 'face5.png'
    pontos.innerHTML = '5 pontos!'
} else {
    img.src = 'face6.png'
    pontos.innerHTML = '6 pontos!'
} 
}