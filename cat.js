let Mouse = require('./mouse.js');

function Cat(name,age) {
	this.name = name;
	this.age = age;
	this.stomach = [];
}
Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);

};
let tom = new Cat(tom,2);

//

tom.eat(Mouse);


module.exports = Cat;