function gerar_cor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  
  return 'rgb('+r+','+g+','+b+')';
}

cores = [];

for(let i = 0; i < 10; i++){

cores[i] = gerar_cor();

}

console.log(cores);

document.body.style.backgroundCOlor = 'rgb('+r+','+g+','+b+')';