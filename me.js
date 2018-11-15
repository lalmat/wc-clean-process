function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
	output: function() {
		switch(getRandomInt(3)) {
			case 0:
				return "PEE AND FART";
			case 1:
				return "FART POO AND PEE";
			case 2:
				return "BEN POO";
			default:
				return "NOTHING";
		}
	}
}