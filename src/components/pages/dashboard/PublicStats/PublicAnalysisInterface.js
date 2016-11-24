import 


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
	Purpose: Reads the JSON object 
	Parameters: NONE
	Return: NONE
-------*/
export function readJsonData(){
	//import data from db.json file
	console.log(requestData);
	// Performing a GET request
	return ;
}

/*-------
	Purpose: Grabs the topicList data from the publicStatsData and sets all the available topics for the user
	Parameters: NONE
	Return: Returns the topicList data in the publicStatsData
-------*/
export function populateTopics() {
	// Get the list of topics from the database
	// Currently it is static that grabs it from here
	topicList = {
		"topic":["Topic 1","Cat Age","Topic 3"]
	};
	return topicList;
}

/*-------
	Purpose: Populates the webpage based on the selected topic after user clicks "GO", it will show the fields, the enums of the fields, and gives default values / required fields
	Parameters: searchTopic (the selected topic)
	Return: Returns the optionList (fields and their enums based on the topic) data in the publicStatsData, or an error if incorrect input)
-------*/
export function populateOptions(selecedTopic) {

	// Get the options from the database
	options = {
			"optionList":{
				"age":["1-2","3"],
				"gender":["male","female"],
			},
			"optionRestriction":{
				"defaultValue":{"age":"1-2"},
				"requiredValue":["age","breed"]
			}
		};
		
	console.log("User selected topic: " + selecedTopic);
	
	var foundAvailableTopic = false;
	var i = 0;
	var tempChosenTopic = "";
	
	// Go through the topic list and see if our topic field matches any
	for (i in topicList.topic){
		if (selecedTopic == topicList.topic[i]){
			console.log("Found Topic: " + topicList.topic[i]);
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
	// Get the data from the Analysis Engine
	dataResponse = {
		"data": [{"value":300,"label":"male"},{"value":400,"label":"female"}],
		"chartType": "pie",
		"title": "Cat Age"
	}
	
	
	return dataResponse;
}




