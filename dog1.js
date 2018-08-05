let chalk = require('chalk');

let Cat = require('./cat.js');

function Dog1(name) {
	this.stomach = [];
	this.name = name;
}


Dog1.prototype.eat = function(cat) {
	this.stomach.push(cat); 
}
Dog1.prototype.sayHi = function(){
	console.log(`Hi I am a dog . My name is ${chalk.blue(this.name)}`);
};


module.exports = Dog1;
