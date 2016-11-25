var defaultValuesJSON = null;
var requiredFieldsJSON = null;

//const pg = require('pg');
//const connectionString = "postgres://wellcatreaders2:thatbackendtho@welcat-working.cz3evk2oqbiz.us-west-2.rds.amazonaws.com/5432/WelcatWorking";

export function getTopicList() {
	var topicList;
	// Setup Topic List
	
	// Get topics from the database
	// INSERT DATABASE CODE HERE AND DELETE THIS LINE WHEN INSERTED
	//var pgClient = new pg.Client(connectionString);
	//pgClient.connect();
	
	// DEMO PURPOSES
	tempTopicList = {
		"topic":[
					"Is my cat obese?",
					"Is my cat healthy?",
					"Is my cat awesome?",
					"Favourite cat food brand?",
					"Favourite cat toy?",
					"Favourite cat food treats?",
					"Favourite colours for cats?",
					"Favourite sounds for cats?",
					"How many cats are rescue cats?",
					"How many cats have a mutation?"
				]
	};
	
	return tempTopicList;
}

/*-------
	Purpose: On launch of the script this function is called, calls the reset function to reset everything
	Parameters: NONE
	Return: NONE
-------*/
function init (){
	//reset();
	
	// Load JSON files
	load();
	//getData('json/inputFile.json')
}
	
/*-------
	Purpose: Resets the program to the original state
	Parameters: NONE
	Return: NONE
-------*/
function reset (question, region, catBreed, age, weight, gender, height, regionDisplay, catBreedDisplay, ageDisplay, weightDisplay, genderDisplay, heightDisplay) {
	document.getElementById(question).value = "";
	document.getElementById(region).value = "region0";
	document.getElementById(catBreed).value = "catBreed0";
	document.getElementById(age).value = "age0";
	document.getElementById(weight).value = "weight0";
	document.getElementById(gender).value = "gender0";
	document.getElementById(height).value = "height0";
	
	document.getElementById(regionDisplay).innerHTML = "";
	document.getElementById(catBreedDisplay).innerHTML = "";
	document.getElementById(ageDisplay).innerHTML = "";
	document.getElementById(weightDisplay).innerHTML = "";
	document.getElementById(genderDisplay).innerHTML = "";
	document.getElementById(heightDisplay).innerHTML = "";
	
	// Demo purposes to hide the JSON Object we are passing around
	document.getElementById('showResult2').innerHTML = "";
}

function submit(question, region, catBreed, age, weight, gender, height, regionDisplay, catBreedDisplay, ageDisplay, weightDisplay, genderDisplay, heightDisplay){
	// Get the slot of the question selected
	var shownVal = document.getElementById(question).value;
	
	// Catch any input in the question box that is not empty or a valid question and throw an error
	var questionSelected;
	try {
		questionSelected = document.querySelector("#questions option[value='"+shownVal+"']").dataset.value;
	}catch (e) {
		alert("Please enter a question from the drop-down menu.");
		return;
	}
	
	// Error checking to see if the question field was left blank
	if (questionSelected == "question0"){
		alert("Please enter a question from the drop-down menu.");
		return;
	}
	
	// Strip all characters from the string -- Strip out "question" part and leave the number Ex. question2 --> 2
	var slot = questionSelected.replace(/\D/g,'');

	try {
		// Set the default values
		document.getElementById(region).value = defaultValuesJSON.questions[slot].region;
		document.getElementById(catBreed).value = defaultValuesJSON.questions[slot].catBreed;
		document.getElementById(age).value = defaultValuesJSON.questions[slot].age;
		document.getElementById(weight).value = defaultValuesJSON.questions[slot].weight;
		document.getElementById(gender).value = defaultValuesJSON.questions[slot].gender;
		document.getElementById(height).value = defaultValuesJSON.questions[slot].height;
	}catch (e) {
		alert("Error - That question is not setup in interfaceSettings for defaultValues -- question" + slot);
		return;
	}
	
	try {
		var regionDisplayAsterisk = "";
		var catBreedDisplayAsterisk = "";
		var ageDisplayAsterisk = "";
		var weightDisplayAsterisk = "";
		var genderDisplayAsterisk = "";
		var heightDisplayAsterisk = "";
		
		if (requiredFieldsJSON.questions[slot].region == "true"){
			regionDisplayAsterisk = "*";
		}
		if (requiredFieldsJSON.questions[slot].catBreed == "true"){
			catBreedDisplayAsterisk = "*";
		}
		if (requiredFieldsJSON.questions[slot].age == "true"){
			ageDisplayAsterisk = "*";
		}
		if (requiredFieldsJSON.questions[slot].weight == "true"){
			weightDisplayAsterisk = "*";
		}
		if (requiredFieldsJSON.questions[slot].gender == "true"){
			genderDisplayAsterisk = "*";
		}
		if (requiredFieldsJSON.questions[slot].height == "true"){
			heightDisplayAsterisk = "*";
		}
		// Set the required fields
		document.getElementById(regionDisplay).innerHTML = regionDisplayAsterisk;
		document.getElementById(catBreedDisplay).innerHTML = catBreedDisplayAsterisk;
		document.getElementById(ageDisplay).innerHTML = ageDisplayAsterisk;
		document.getElementById(weightDisplay).innerHTML = weightDisplayAsterisk;
		document.getElementById(genderDisplay).innerHTML = genderDisplayAsterisk;
		document.getElementById(heightDisplay).innerHTML = heightDisplayAsterisk;
	}catch (e) {
		alert("Error - That question is not setup in interfaceSettings for requiredFields -- question" + slot);
		return;
	}
}

function load() {
	// Catch any input in the question box that is not empty or a valid question and throw an error
	try {
		// Convert defaultValues to JSON object
		defaultValuesJSON = JSON.parse(defaultValues);
		
		// Convert requiredFields to JSON object
		requiredFieldsJSON = JSON.parse(requiredFields);
	}catch (e) {
		alert("Error - interfaceSettings is either not defined, or missing the correct data structure");
		return;
	}
	
}

/*-------
	Purpose: Testing Jasmine Framework
	Parameters: NONE
	Return: "Hello world!"
-------*/
function generate(question, region, catBreed, age, weight, gender, height){
	// Reset Display - Demo purposes only
	document.getElementById('showResult2').innerHTML = "";

	// Shown question on the screen Ex. Favourite cat toy?
	var shownVal = document.getElementById(question).value;
	
	
	
	// Catch any input in the question box that is not empty or a valid question and throw an error
	try {
		var questionSelected = document.querySelector("#questions option[value='"+shownVal+"']").dataset.value;
	}catch (e) {
		alert("Please enter a question from the drop-down menu.");
		return;
	}
	
	// Strip all characters from the string -- Strip out "question" part and leave the number Ex. question2 --> 2
	var slot = questionSelected.replace(/\D/g,'');
	
	// Error checking to see if the question field was left blank
	if (questionSelected == "question0"){
		alert("Please enter a question from the drop-down menu.");
		return;
	}
	
	var missingRequiredFieldsStr = "";
	var missingRequiredField = false;
	// Error checking to see if a required field was left blank
	if (requiredFieldsJSON.questions[slot].region == "true" && document.getElementById(region).value == "region0"){
		missingRequiredFieldsStr += " region";
		missingRequiredField = true;
	}
	if (requiredFieldsJSON.questions[slot].catBreed == "true" && document.getElementById(catBreed).value == "catBreed0"){
		missingRequiredFieldsStr += " catBreed";
		missingRequiredField = true;
	}
	if (requiredFieldsJSON.questions[slot].age == "true" && document.getElementById(age).value == "age0"){
		missingRequiredFieldsStr += " age";
		missingRequiredField = true;
	}
	if (requiredFieldsJSON.questions[slot].weight == "true" && document.getElementById(weight).value == "weight0"){
		missingRequiredFieldsStr += " weight";
		missingRequiredField = true;
	}
	if (requiredFieldsJSON.questions[slot].gender == "true" && document.getElementById(gender).value == "gender0"){
		missingRequiredFieldsStr += " gender";
		missingRequiredField = true;
	}
	if (requiredFieldsJSON.questions[slot].height == "true" && document.getElementById(height).value == "height0"){
		missingRequiredFieldsStr += " height";
		missingRequiredField = true;
	}
	
	if (missingRequiredField){
		alert("Please fill in required fields: " + missingRequiredFieldsStr);
		return;
	}
	
	// Setup JSON object based on the input from the user on the interface
	var input =	'{ "interface" : [' +
				'{ "question":"' + questionSelected + '" , "region":"'+ document.getElementById(region).value +'" , "catBreed":"'+ document.getElementById(catBreed).value +'" , "age":"'+ document.getElementById(age).value +'" , "weight":"'+ document.getElementById(weight).value +'" , "gender":"'+ document.getElementById(gender).value +'" , "height":"'+ document.getElementById(height).value +'" } ]}';
			
	// Convert from String to JSON Object
	var jsonObj = JSON.parse(input);
	
	// Display JSON object on the screen - Demo purposes only
	document.getElementById('showResult2').innerHTML = jsonObj.interface[0].question + " " + jsonObj.interface[0].region + " " + jsonObj.interface[0].catBreed + " " + jsonObj.interface[0].age + " " + jsonObj.interface[0].weight + " " + jsonObj.interface[0].gender + " " + jsonObj.interface[0].height;
}