let num1=4
function num(){
 let num1=5;

}


 function par(num1){
    if(Number.isInteger(num1)){
      console.log("Es entero");
      if (num1%2==0){ console.log("Es par");
    }else {
      console.log("No es par" );
  }
    
    }else{
       return console.log("El numero no es entero");
    }
    
}
console.log(num(par(num1)));

