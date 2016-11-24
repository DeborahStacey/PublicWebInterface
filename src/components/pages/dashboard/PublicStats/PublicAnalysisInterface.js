//functions in file in charge fetch data from back end
//see db.json for sample data,and DataFormat.text for detail explaination of data

//this is front end request data format
const requestData = {
	"selectedTopic":{
		"selectedTopic": "Cat Age"
	},
	"dataRequest":{
		"topic": "Cat Age",
		"options": {"region": "Canada","age": "1-2"}
	}	
}

//this is just for debugging (ignore this)
export function readJsonData(){
	//import data from db.json file
	console.log(requestData);
	// Performing a GET request
	return ;
}

//populate list of topic for user to select
export function populateTopics() {
	//you get list of topics from database
	//NEEDS TO BE DONE
	var topicList={
		"topic":["Topic 1","Cat Age","Topic 3"]
	};
	return topicList;
}

//populate options based on specific topic
export function populateOptions(selecedTopic) {
	//here you proccessing selecedTopic
	//check if you selected topic is in your topic list in your database

	//dumb check for front end testing
	if(selecedTopic==requestData.selectedTopic.selectedTopic){
		//build optionList object to return
		var options ={
			"optionList":{
				"age":["1-2","3"],
				"gender":["male","female"],
			},
			"optionRestriction":{
				"defaultValue":{"age":"1-2"},
				"requiredValue":["age","breed"]
			}
		};
		return options;
	}
	else{
		//buidl error object to return
		var error = {
			"errorType":"Topic",
			"errorLocation":"",
			"errotCode":"007",
			"errorMessage":"Your selected topic is not found."
		}
		return error;
	}
	
}

//populate data based on specific topic and options
export function populateData(dataRequest) {
	//processing request and return the data
	//NEEDS TO BE DONE
	var dataResponse={
		"data": [{"value":300,"label":"male"},{"value":400,"label":"female"}],
		"chartType": "pie",
		"title": "Cat Age"
	}
	return dataResponse;
	//return fakeData.dataResponse;
}




