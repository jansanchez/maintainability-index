function Cat(cat){
	this.name = cat.name;
	return this;
}

var kitty = new Cat({name: 'michi'});
console.log(kitty.name);

