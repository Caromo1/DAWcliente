
const values1=[7,8,5,3,6,3];
const xx=2;
//some
//every
function findGreaterThan(values1,xx){
   return values1>xx;
}
 let resultado2=values1.every(findGreaterThan);
console.log(resultado2);