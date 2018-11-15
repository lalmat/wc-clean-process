/**
 * TOILET CLEANER SCRIPT FOR DEVELOPPERS
 */ 
 
const wc = require(__dirname+"/wc.js");
const me = require(__dirname+"/me.js");

// A SENTENCE CONTAINING POO, PEE, FART, ETC.
let output = wc.checkBowl(me.output()); 

while(!wc.isEmpty()) {
	wc.waitWaterRefill();
	let contain = wc.checkBowl();
	let button  = (contain.indexOf('POO') >= 0 ) ? 'BIG' : 'SMALL';
	wc.flushButton(button);
}

while(!wc.isClean()) {
	wc.bross();
	wc.flushButton('SMALL');
}

if (wc.smell() == 'FART') {
	wc.parfume();
}

wc.quit('Go wash your hands !')