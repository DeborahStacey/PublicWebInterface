//var testEngine = require('./Test');
//var analysisEngine = require('./PublicAnalysisEngine');
//var backendInteraction = require('./BackendInteraction');
var interfaceSettings = require('./PublicAnalysisInterfaceSettings');

// This is for the front end, where you have the selected topic and the data after the user clicks generate in dataRequest
var requestData = {
	"selectedTopic":{
		"selectedTopic": "Cat Age"
	},
	"dataRequest":{
		"topic": "Cat Age",
		"options": {"region": "Canada","age": "1-2"}
	}	
}

// Set these fields when we pull data from database

// The topics that are available to the user
var topicList = {};
// The options where it contains all the fields, their available options, the default values of the specific selected question, and the required values of the specific question
var options = {};
// The graph data that will be sent back to the front end
var dataResponse = {};

// The error options
var error = {
			"errorType":"Topic",
			"errorLocation":"",
			"errotCode":"007",
			"errorMessage":"Your selected topic is not found."
		}

/*-------
	Purpose: Grabs the topicList data from the database
	Parameters: NONE
	Return: Returns the topicList data to the front end
-------*/
export function populateTopics() {	
	// Setup Topic List
	
	// Get topics from the database
	// INSERT DATABASE CODE HERE AND DELETE THIS LINE WHEN INSERTED
	// var pgClient = new pg.Client(connectionString);
	// pgClient.connect();
	
	// DEMO PURPOSES
	topicList = interfaceSettings.topicList;
	
	return topicList;
}

/*-------
	Purpose: Populates the webpage based on the selected topic after user clicks "GO", it will show the fields, the enums of the fields, and gives default values / required fields
	Parameters: searchTopic (the selected topic)
	Return: Returns the optionList (fields and their enums based on the topic) data in the publicStatsData, or an error if incorrect input)
-------*/
export function populateOptions(selecedTopic) {
	var foundAvailableTopic = false;
	var i = 0;
	var tempChosenTopic = "";
	
	var optionList = {};
	var defaultValues = {};
	var requiredValues = [];
	
	// Get data from the database
	// INSERT DATABASE CODE HERE AND DELETE THIS LINE WHEN INSERTED
	
	// DEMO PURPOSES
	optionList = {
				"age":["1-2","6"],
				"gender":["male","female"],
			};
			
	defaultValues = {
				"age":"1-2"
			};
			
	requiredValues = ["age","breed"];
	

	// Setup options based on data given
	options = {
			"optionList": optionList,
			"optionRestriction":{
				"defaultValue": defaultValues,
				"requiredValue": requiredValues
			}
		};
	
	//console.log("User selected topic: " + selecedTopic);
	
	// Go through the topic list and see if our topic field matches any
	for (i in topicList.topic){
		if (selecedTopic == topicList.topic[i]){
			//console.log("Found Topic: " + topicList.topic[i]);
			tempChosenTopic = topicList.topic[i];
			foundAvailableTopic = true;
		}
	}
	
	// Check if we found the valid topic based on user input for the topic field
	if(foundAvailableTopic){
		return options;
	}else{
		return error;
	}
	
}

/*-------
	Purpose: After the user clicks "Generate", we will get the topic and all the set fields and pass the data along
	Parameters: searchTopic (the selected topic), searchOptions (the set fields)
	Return: Returns the dataResponse (graph results)
-------*/
export function populateData(dataRequest) {
	var foundError = false;
	var i = 0;
	var j = 0;
	
	console.log("********* POPULATE DATA *********");
	
	//requestData.dataRequest = dataRequest;
	
	for (i in dataRequest.options){
		console.log(i);
	}
	
	console.log("********* AFTER CHECK *********");
	
	// Check if required fields were filled in
	for (i in requestData.dataRequest.options){
		console.log(i+ " : "+ requestData.dataRequest.options[i])
		var requestDataKey = i;
		var requestDataValue = requestData.dataRequest.options[i];
		
		console.log ("REQUEST DATA KEY : " + requestDataKey);
		console.log ("REQUEST DATA VALUE : " + requestDataValue);
		
		// region : Canada
		// age : 1-2
		for (j in options.optionRestriction.requiredValue){
			var requiedFieldValue = options.optionRestriction.requiredValue[j];
			
			console.log("REQUIRED FIELD : " + requiedFieldValue)
			
			// Check if requestDataKey is found inside the requiredFieldValues, if so we check the value of the key in requestData
			if (requestDataKey == requiedFieldValue){
				// Check if it is empty to determine if it was filled in or not
				if (requestDataValue == ""){
					console.log("FOUND EMPTY REQUIRED FIELD: " + requestDataKey)
					foundError = true;
				}	
			}
		}
	}
	
	if (!foundError){
		// Generate graph
		dataResponse = {
			"data": [{"value":300,"label":"male"},{"value":400,"label":"female"}],
			"chartType": "pie",
			"title": "Cat Age"
		}
		
		return dataResponse;
	}else{
		return error;
	}
	
}




