const prompt = require('prompt-sync')();

let precioproducto;
let total=0;
let cancelar;
do{
    precioproducto = Number(prompt("ingrese el precio del producto "));
    if(precioproducto == 0){
    console.log("EL VALOR NO PUEDE SER IGUAL A 0");
    }  
else if(precioproducto !=0);
total += precioproducto;
cancelar = Number(prompt("presione 0 si desea agregar otro prodcuto /presione otro numero para finalizar: "));
}while(cancelar == 0);{
        console.log(total)
}