//functions in file in charge fetch data from back end
//see db.json for sample data,and DataFormat.text for detail explaination of data

const fakeData = {
	"topicList":{
		"topic":["Topic 1","Cat Age","Topic 3"]
	},
	"selectedTopic":{
		"selectedTopic": "Cat Age"
	},
	"optionList":{
		"age":["1-2","3"],
		"gender":["male","female"]
	},
	"dataRequest":{
		"topic": "Cat Age",
		"options": {"region": "Canada","age": "1-2"}
	},
	"dataResponse":{
		"data": [{"value":300,"label":"male"},{"value":400,"label":"female"}],
		"chartType": "pie",
		"title": "Cat Age"
	},
	"error":{
		"errorType":"Topic",
		"errotCode":"007",
		"errorMessage":"Your selected topic is not found."
	}

}


export function readJsonData(){
	//import data from db.json file
	console.log(fakeData);
	// Performing a GET request
	return ;
}

//populate list of topic for user to select
export function populateTopics() {
	return fakeData.topicList;
}

//populate options based on specific topic
export function populateOptions(searchTopic) {
	if(searchTopic==fakeData.selectedTopic.selectedTopic){
		return fakeData.optionList;
	}
	else{
		
		return fakeData.error;
	}
	
}

//populate data based on specific topic and options
export function populateData(searchTopic,searchOptions) {
	return fakeData.dataResponse;
}




