function Horse(){
}
Horse.prototype.jump = function(){
	console.log('jump...');
};

Horse.prototype.run = function(){
	console.log('Running...');
};
module.exports = Horse;
