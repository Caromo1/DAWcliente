const values2=[7,8,5,3,6];

function multipleFactoria(values2){
    let s = 1;
    while (values2 > 1) {
        s *= values2;
        values2--;
    }
    return s;
}
let resultado=values2.map(multipleFactoria);
console.log(resultado);