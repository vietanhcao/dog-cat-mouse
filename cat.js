let Mouse = require('./mouse.js');

function Cat(name,age) {
	this.name = name;
	this.age = age;
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse){

	this.stomach.push(animal);
	}else{
		throw new Error('Cat can only eat mouse!');
	}

};


//



module.exports = Cat;