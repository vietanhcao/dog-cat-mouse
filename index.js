let Dog1 = require('./dog1.js');
let Cat = require('./cat.js');

let dog = new Dog1('cho');

dog.sayHi();
let tom = new Cat('tom', 3);

dog.eat(tom);
console.log(dog);