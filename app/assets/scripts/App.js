import $ from 'jquery';
import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "70%");

















//var Person = require('./modules/Person');
/*import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + " owes so much tax!!");
	}
}

var john = new Person("John Doe", "Yellow");
john.greet();

var jane = new Adult("Jane Smith", "Purple");
jane.greet();
jane.payTaxes();


$('h1').remove();*/


