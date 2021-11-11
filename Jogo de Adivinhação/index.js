function gerar_cor_hexadecimal()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}

let cores = [];

for(var i = 0; i < 10; i++){
    
cores[i] = gerar_cor_hexadecimal(); 

}

cores;




