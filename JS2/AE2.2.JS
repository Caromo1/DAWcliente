const deletearray=[7,8,5,3,6];
function AVEREGE(deletearray){
    let long = deletearray.length;
    let sum = deletearray.reduce((previous, current) => current += previous);
    let avg = sum/long;
   return avg;
    }

  console.log(AVEREGE(deletearray));
