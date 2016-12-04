var analysisEngine = require('./PublicAnalysisEngine');
var interfaceSettings = require('./PublicAnalysisInterfaceSettings');

// This is for the front end, where you have the selected topic and the data after the user clicks generate in dataRequest
var requestData = {
	"selectedTopic":{
		"selectedTopic": "Cat Age"
	},
	"dataRequest":{
		"topic": "Cat Age",
		"options": {"Region": "Canada","Age": "Less than 1 year"}
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
			"errorLocation":"Topic",
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
	// Get the topics that the user can select
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
	var questionSlot = 0;
	var tempChosenTopic = "";
	
	var optionList = {};
	var defaultValues = {};
	var requiredValues = [];
	
	//console.log("User selected topic: " + selecedTopic);
	
	// Go through the topic list and see if our topic field matches any available topics
	for (i in topicList.topic){
		if (selecedTopic == topicList.topic[i]){
			//console.log("Found Topic: " + topicList.topic[i]);
			tempChosenTopic = topicList.topic[i];
			questionSlot = i;
			foundAvailableTopic = true;
		}
	}
	
	// Check if we found the valid topic based on user input for the topic field
	if(foundAvailableTopic){
		
		// Get data from the database
		// INSERT DATABASE CODE HERE AND DELETE THIS LINE WHEN INSERTED
		
		// DEMO PURPOSES
		// Get the fields and enums of the fields
		optionList = interfaceSettings.optionList;
		// Get the default values for the fields to set the enums
		defaultValues = interfaceSettings.defaultValues.values[questionSlot];
		// Get the required values for the fields to set the '*'
		requiredValues = interfaceSettings.requiredValues[questionSlot];
		
		// Setup options based on data given
		options = {
				"optionList": optionList,
				"optionRestriction":{
					"defaultValue": defaultValues,
					"requiredValue": requiredValues
				}
			};
		
		return options;
	}else{
		error.errorMessage = "Your selected topic is not found."
		return error;
	}
	
}

/*-------
	Purpose: After the user clicks "Generate", we will get the topic and all the set fields and pass the data along to the PublicAnalysisEngine to get us the generated graph from the data
	Parameters: tempRequestData (the front end data)
	Return: Returns the dataResponse (graph results), or an error
-------*/
export function populateData(tempRequestData) {
	var foundError = false;
	var errorMessage = "";
	var i = 0;
	var j = 0;
	
	/*
	console.log("********* START OF GIVEN DATA *********");
	for (i in tempRequestData.dataRequest.options){
		console.log("KEY: "+ i);
		console.log("VALUE: "+ tempRequestData.dataRequest.options[i])
	}
	console.log("********* END OF GIVEN DATA *********");
	*/
	
	// Check if required fields were filled in
	for (i in tempRequestData.dataRequest.options){
		var requestDataKey = i;
		var requestDataValue = tempRequestData.dataRequest.options[i];
		
		//console.log(i+ " : "+ tempRequestData.dataRequest.options[i])
		//console.log ("REQUEST DATA KEY : " + requestDataKey);
		//console.log ("REQUEST DATA VALUE : " + requestDataValue);
		
		for (j in options.optionRestriction.requiredValue){
			var requiedFieldValue = options.optionRestriction.requiredValue[j];
			
			//console.log("REQUIRED FIELD : " + requiedFieldValue)
			
			// Check if requestDataKey is found inside the requiredFieldValues, if so we check the value of the key in requestData
			if (requestDataKey == requiedFieldValue){
				// Check if it is empty to determine if it was filled in or not
				if (requestDataValue == ""){
					//console.log("FOUND EMPTY REQUIRED FIELD: " + requestDataKey)
					errorMessage += requestDataKey + ", ";
					foundError = true;
				}	
			}
		}
	}
	
	if (!foundError){
		// Generate graph
		var generatedGraph = {};
		
		// Send to AnalysisEngine to do further calculations on the data
		generatedGraph = analysisEngine.getGraphData(tempRequestData);
		
		if (generatedGraph != -1){
			return generatedGraph;
		}else{
			// Found error with generating graph
			error.errorMessage = "Not enough data for graph to be generated!";
			return error;
		}
		
	}else{
		// Found missing field, return an error
		// Trim off any trailing ", "
		errorMessage = errorMessage.substring(0, errorMessage.length - 2);
		error.errorMessage = "Missing required field(s): " + errorMessage;
		return error;
	}
}




