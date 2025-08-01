const person = {
    name: 'Sanda',
    age : 24,
    // isStudent : true
    profession : 'developer',
    salary : 25000,
    married : true,
    'fav Place': ['bandarban', 'sajek', 'sylhet']
}

// console.log(person);


// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);


// bracket notation
console.log(person['age']);
const boyos = person['age']
console.log(boyos);
console.log(person['fav Place']);


const keyName = 'profession';
console.log(person[keyName]);