console.log("linked to main.js");

//1. XHR to dogs.json
//2. Call helper function that sets up XHR to breeds and passes dogs
//3. put XHR breeds.json load function inside helper function
//4. call combinedArray

//function to run after dogs.json loads
function runAfterDogsLoads(){	
	var dogsData = JSON.parse(this.responseText).dogs;
	//console.log("dogs", dogsData);
	var myBreeds = getBreeds(dogsData);//passing dogsData into getBreeds function
}

// function to run for errors
function itBroke(){
	console.log("It Broke");
}

var myDogs = new XMLHttpRequest();
myDogs.addEventListener('load', runAfterDogsLoads);
myDogs.addEventListener('error', itBroke);
myDogs.open('GET', 'dogs.json');
myDogs.send();

function getBreeds (dogz){ //dogsData = dogz
// console.log("dogs array inside getBreeds", dogz)
var myBreeds = new XMLHttpRequest();
myBreeds.addEventListener('load', runAfterBreedsLoads);
myBreeds.addEventListener('error', itBroke);
myBreeds.open('GET', 'breeds.json');
myBreeds.send();

//function to run after breeds loads
function runAfterBreedsLoads (){
	var breedsData = JSON.parse(this.responseText).breeds;
	// console.log("breeds", breedsData);
	// console.log("dogs next to breeds", dogz);
	combinedArray(dogz, breedsData);
	}
}

function combinedArray (dogsArray, breedsArray){
	// console.log("dogsArray", dogsArray);
	// console.log("breedsArray", breedsArray);
	//loop through dogsand look at breed_id
	dogsArray.forEach(function(dog){
		var currentBreedId = dog["breed-id"];
		
		//console.log("dog breed_id", currentBreedId);
		breedsArray.forEach(function(breed){
			if(currentBreedId === breed.id){
			//console.log("one breed", breed);
			dog["dogBreed"] = breed.name;
			dog["basePrice"] = breed["base-price"];
			dog["description"] = breed.description;
			dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
			}
		});
		//console.log("one dog", dog);
	});
	//loop through breeds and find matching breed_id
	//make final price
	console.log("all the dogs", dogsArray);
	domString(dogsArray)
}

function domString(dogs){
	var reallyLongDomString = "";
	//usual stuff - fat for loop
	writeToDom(reallyLongDomString)
}

function writeToDom(strang){
//put in the DOM
dogDiv.innerHTML = strang;
}