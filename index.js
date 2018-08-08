let Dog1 = require('./dog1.js');
let Cat = require('./cat.js');
let Mouse = require('./mouse.js');

let dog = new Dog1('cho');

// dog.sayHi();
// let tom = new Cat('tom', 3);

var cat = new Cat('tom',5);
var mouse = new Mouse('jerry',0.2);

try {
	cat.eat(dog);
} catch(e) {
	
	console.log('error while cat eating a dog');
}
console.log(cat);

