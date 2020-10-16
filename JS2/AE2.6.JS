const users=["Marco","Josep","Javi","Ana"];
const blackListed=["Marco","Carlos","Marcos","Ana"];

function ban(users,blackListed){
 return users==blackListed;
}

let newArray=users.filter(ban);
console.log(newArray);
