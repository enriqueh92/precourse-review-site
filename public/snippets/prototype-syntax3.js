const PandaAssassin = function(preferredweapon) {
	this.preferredweapon = preferredweapon
}

PandaAssassin.prototype.terminate = function(target) {
	 return `${target} terminated with ${this.preferredWeapon}.`;
}