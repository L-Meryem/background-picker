document.getElementById('solid').onclick = solid
document.getElementById('disco').onclick = disco
document.getElementById('gradient').onclick = gradient

let b=0;



function solid() {
   r = Math.floor(Math.random() * 256);
   g = Math.floor(Math.random() * 256);
   b = Math.floor(Math.random() * 256);
  document.querySelector('body').style.background = ' none'
   document.querySelector('body').style.backgroundColor = `rgba(${r},${g},${b})`
   document.querySelector('#solid').style.backgroundColor = `rgba(${r},${g},${b})`

  document.querySelector('body').style.color = 'white'
}

function disco() {
  document.querySelector('body').style.backgroundImage = ' url("img/disco.jpg")'
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('body').style.backgroundRepeat = 'no-repeat'
  document.querySelector('body').style.color = 'white'
}

function gradient() {
  document.querySelector('body').style.background = 'repeating-linear-gradient(90deg, rgb(255, 99, 71, 0.5), rgb(255, 99, 71, 0.5) 50px, hsl(240, 100%, 50%, 0.5) 50px, hsl(240, 100%, 50%, 0.5) 100px), repeating-linear-gradient(tomato, tomato 50px, blue 50px, blue 100px)'
  document.querySelector('body').style.color = 'white'
}