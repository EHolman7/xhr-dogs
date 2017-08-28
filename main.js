console.log("linked to main.js");
var dogs = [];
var breeds = [];

function runDogs(){	
	var data = JSON.parse(this.responseText);
	console.log("dogs", data);
}

function runBreeds(){
	var data = JSON.parse(this.responseText);
	console.log("breeds", data);
}

function itBroke(){
	console.log("It Broke");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener('load', runDogs);
myDogs.addEventListener('error', itBroke);
myDogs.open('GET', 'dogs.json');
myDogs.send();

var myBreeds = new XMLHttpRequest();
myBreeds.addEventListener('load', runBreeds);
myBreeds.addEventListener('error', itBroke);
myBreeds.open('GET', 'breeds.json');
myBreeds.send();