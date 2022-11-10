# class
- ES6
``` javascript
class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super(); // call parent's constructor
        this.name = 'Max';

    }
    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();
```
- ES7 
``` javascript
class Human {
    gender = 'male';
    printGender(){
        console.log(this.gender);
    }
}
```
    - skip the constructor function. Behind the scenes, this will still be transformed to use constructor functions.

# Spread & Rest operators (...)
- spread: used to split array OR object properties 
- safely coping array OR object
``` javascript 
const newArray = [...oldArray, 1,2]
const newObject = {...oldObject, newProp:5}
```
- rest: used to merge a list of function arguments into an array
``` javascript
funciton sortArgs(...args){
    return args.sort();
}
```

# Destructuring
- Easily extract array elements or object properties and store them in varaibles.
    - array destructuring
    ``` javascript
    [a,b] = ['Hello','Max']
    console.log(a);  // Hello
    console.log(b);  // Max

    const numbers = [1,2,3,4];
    [n1,,n3] = numbers;     // no n2 here
    console.log(n1,n3)


    let {birthday} = {name:'Max', birthday: { year:2000, month:0}}; 
    console.log(birthday)   // will be { year:2000, month:0}
    ```

# reference
- primitive types: copy the value 
- objects and arrays are reference types
``` javascript
const person = {
  name: 'Max'
}

// secondPerson and person point to the same object
const secondPerson = person;

// user spread operator to copy the object
const thirdPerson = {
  ...person
};

person.name = 'Leo';

console.log(secondPerson.name)  // show Leo
console.log(thirdPerson.name)   // show Max     
```

# Array function
- map((element) => { /* … */ })
	- map((element) => { return {key: element.key} })
# Trick
- force to number by adding "+" to the beginning of a variable.
	- +myVariable
- set default value
	- ``` type={props.type || 'button'}```
    - if props.type is undefined, then type is "button"