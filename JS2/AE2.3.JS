const values=[7,8,5,3,6];

function findMinimum(values){

 return values.reduce((a, b) => Math.min(a, b)); 

}
console.log(findMinimum(values));
