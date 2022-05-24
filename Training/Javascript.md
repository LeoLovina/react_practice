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
    [a,b]
    ```


