console.log("linked to main.js");
var dogs = [];
var breeds = [];

function runAfterDogsLoads(){	
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
}

function runAfterBreedsLoads(){
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
}

function itBroke(){
	console.log("It Broke");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener('load', runAfterDogsLoads);
myDogs.addEventListener('error', itBroke);
myDogs.open('GET', 'dogs.json');
myDogs.send();

var myBreeds = new XMLHttpRequest();
myBreeds.addEventListener('load', runAfterBreedsLoads);
myBreeds.addEventListener('error', itBroke);
myBreeds.open('GET', 'breeds.json');
myBreeds.send();