class Person {
	constructor(fullName, myColor) {
		this.name = fullName;
		this.color = myColor;
	}
	
	greet() {
		console.log("Yoh, my name is " + this.name + " and my favorite color is " + this.color + ".");
	}
}

//module.exports = Person;
export default Person;

