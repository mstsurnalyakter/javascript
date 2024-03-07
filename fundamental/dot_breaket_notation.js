const person = {
    name:'Lal Nil',
    profession:'Traffic Surgeon',
    age:39,
    address:'Dhaka',
    25:'summer',
    son_name:'Sunny'
}

let personAge = 'age';
let personName = 'name'
console.log(personAge);
console.log(person.name);
console.log(person["name"]);
console.log(person[personAge]);
console.log(person[personName]);

console.log(person[25]);
console.log(person['son_name']);