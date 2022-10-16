// use ES6/Babel to execute

class Human {
    gender = 'male';
    printGender = () =>{
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Max';
    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();
