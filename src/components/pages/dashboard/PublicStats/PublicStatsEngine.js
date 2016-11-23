//populate list of topic for user to select
export function populateTopics() {

}

//populate options based on specific topic
export function populateOptions(searchTopic) {

}

//populate data based on specific topic and options
export function populateData(searchTopic,searchOptions) {

}


//data format: 

//topic list
/*
{"topic":["topic 1","topic 2","topic 3"]}
*/

//options for option form
/*
{
	"age":["1-2","3"],
	"gender":["male","female"]
}
*/

//request to get data with topic and criteria
/*
{
	"topic": "Cat Age",
	"options": "{region": "Canada",age: "1-2"}"
}
*/

//repsonding data
/*
{
	"data": [{"value":300,"label":"male"},{"value":400,"label":"female"}],
	"chartType": "pie",
	"title": "Cat Age"
}
*/
//error
/*
{
	"errorType":"",
	"errorMessage":""
}
*/





