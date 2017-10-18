require('../css/style.css');
const WebFont = require('webfontloader');
const people = require('../js/people.js');
const $      = require('jQuery');

// Array with names to show.
$.each(people, (key, val) => {
	$('body').append(`<h1> ${people[key].name} </h1>`);
});



console.log(people[1].name);
