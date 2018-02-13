const add =  ( a, b) => {
	// console.log(arguments);
	return a + b;
};

console.log(add(55, 1));

const user = {
	name: 'Mare',
	cities: ['Belgrade', 'New york', 'Los angeles'],
	printPlacesLived () {
	return this.cities.map((city) => this.name + 'has lived in ' + city);

	}
};
console.log(user.printPlacesLived());



const multiplier = {
	numbers: [1, 2, 3],
	multiplyBy: 2,
	multiply () {
		return this.numbers.map((number) => number * this.multiplyBy);
	}

};

console.log(multiplier.multiply()); [1, 2, 3] [2, 4, 6];