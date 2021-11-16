{
  var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
document.documentElement.style.setProperty('main-bg-color', gerar_cor);
}


cores = [];
for(let i = 0; i < 10; i++){
  cores[i] = gerar_cor();
}


const botao = document.getElementById("btn cor1")

botao.addEventListener("click", Acertou)

function gerar_cor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  
  return 'rgb('+r+','+g+','+b+')';
}

function Acertou(){
  return alert("Acertou") 
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}





