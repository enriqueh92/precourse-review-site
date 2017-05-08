class Dog {
  constructor(name) {
  	this.name = name;
  }

  listen() {
  	if (humanSpeech.indexOf(this.name) !== -1) {
    return this.bark();
  }
}
}

  Dog.prototype.bark = function() {
  return 'ruff!';
}