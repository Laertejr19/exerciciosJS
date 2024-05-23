let meuInput = document.getElementById('numero');
function ValidarNumeroPositivo() {
   if (meuInput.value > 0){
    console.log(`O Número ${meuInput.value} é positivo!`);
   } else {
console.log(`ERRO!`);
   }
}
