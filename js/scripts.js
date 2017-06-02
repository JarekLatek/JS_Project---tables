var femaleNames = ['Ania', 'Kasia', 'Monika', 'Agata', 'Magda'],
	maleNames = ['Jarek', 'Artek', 'Michał', 'Piotr'];

var allNames = femaleNames.concat(maleNames);
var newName = 'Marta';

if (allNames.indexOf(newName) === -1) {
	allNames.splice(7, 0, newName);
} else {
	console.log('To imię zostało już użyte');
};

console.log(allNames);