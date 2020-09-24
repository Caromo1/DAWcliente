/*do {
    n1=prompt("Dame un numero");
    if(n1<=15 || n1>=1){
        alert("Numero incorrecto");
    }else{
     alert("Numero correcto");
    }
    
} while (n1>15 || n1<1);*/
n1=prompt("Dame un numero");

function dado(){
    let dado=Math.floor(Math.random() * (12 - 1)) + 1;
    
    return dado;
   
}
while(n1>15 || n1<1){
    if(n1<=15 || n1>=1){
        alert("Numero incorrecto");
        n1=prompt("Dame un numero");
    }

}
alert("Numero correcto");
let dado1=(dado(dado));
let acierta=prompt("Dime un numero para el dado")
     if(dado1==acierta){
         alert("Numero del dado acertado");
         alert(dado1);
     }else{
         alert("Numero del dado no es correcto");
         alert(dado1);
     }
    



