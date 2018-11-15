module.exports = {
	
	original : '',
	traces   : null,
	bowl     : "NOTHING",
	debug    : false,
	waterFull: true,

	checkBowl: function(item = null) {
		if (this.original == '' && item != null) {
			this.original = item;
			this.bowl     = this.original;
		}
		if (this.debug) console.log("Bowl contains " + this.bowl);
		return this.bowl;
	},

	isEmpty: function() {
		if (this.debug) console.log("Empty ? " + this.bowl);
		return (this.bowl.indexOf('NOTHING') >= 0);
	},

	isClean: function() {
		if (this.debug) console.log("Clean ? " + this.bowl);
		return this.bowl == "NOTHING";
	},

	flushButton: function(button) {
		let sound = (button == "SMALL") ? 'flushhh' : 'FLOOUUUSHHHHHH';
		console.log(sound);

		this.bowl = "NOTHING";
		if (this.original.indexOf('POO') >= 0 && this.traces == null) {
			this.bowl += " BUT TRACES";
			this.traces = true;
		}
	},

	waitWaterRefill: function() {
		if (!this.waterFull) {
			console.log('Glou Glou Glou');	
			this.waterFull = true;
		}
	},

	bross: function(state) {
		console.log('Frot Frot Frot');
		this.traces = false;
		this.bowl   = this.bowl.replace(/ BUT TRACES/gi, '');
	},

	smell: function() {
		return (this.original.indexOf('FART') >= 0 || this.original.indexOf('POO') >= 0) ? 'FART' : 'NOTHING';
	},

	parfume: function() {
		this.original = '';
		console.log('Pshit Pshit');
	},

	quit: function(message) {
		console.log(message);
	}
}