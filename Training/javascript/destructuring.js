[a,b] = ['Hello','Max']
console.log(a);  // Hello
console.log(b);  // Max

const numbers = [1,2,3,4];
[n1,,n3] = numbers;     // no n2 here
console.log(n1,n3)


let {birthday} = {name:'Max', birthday: { year:2000, month:0}}; 
console.log(birthday)   // will be { year:2000, month:0}
