require('../css/style.css');
const people = require('../js/people.js');
const $      = require('jQuery');


$.each(people, (key, val) => {
	$('body').append(`<h1> ${people[key].name} </h1>`);
});



console.group(people[1].name);
