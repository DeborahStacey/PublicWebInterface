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
		"topic":["Cat Weight","Cat Age","Cat Color"]
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
				"defaultValue":{"age":"3","gender":"female"},
				"requiredValue":["age","gender"]
			}
		};
		return options;
	}
	else if(selecedTopic=="Cat Weight"){
		var options ={
			"optionList":{
				"age":["1-2","3"],
				"weight":["1-2kg","2"],
			},
			"optionRestriction":{
				"defaultValue":{"age":"1","weight":"2"},
				"requiredValue":["age","weight"]
			}
		};
		return options;
	}
	else if(selecedTopic=="Cat Color"){
		var options ={
			"optionList":{
				"age":["1-2","3"],
				"color":["white","black"],
			},
			"optionRestriction":{
				"defaultValue":{"age":"3","color":"black"},
				"requiredValue":["age"]
			}
		};
		return options;
	}
	else{
		//buidl error object to return
		var error = {
			"errorType":"Topic",
			"errorLocation":"Topic",
			"errotCode":"007",
			"errorMessage":"Your selected topic is not found."
		}
		return error;
	}
	
}

//populate data based on specific topic and options
//return data in datarepsonse as [] empty array if result is nothing
export function populateData(dataRequest) {
	console.log(";;;;;;;;populateData",dataRequest);
	//lineChartDataFormat
	var lineChartData={
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [10,20,30,10,25,30,40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [40,10,20,40,25,20,40]
            }
        ]
      
    }
    //barChartDataFormat
    var barChartData={
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [10,20,30,10,25,30,40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [40,10,20,40,25,20,40]
            }
        ]
      
    }
   	//pieChartDataFormat
   	var pieChartData =[
		{
		  value: 200,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "Red"
		},
		{
		  value: 500,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Green"
		},
		{
		  value: 800,
		  color: "#FDB45C",
		  highlight: "#FFC870",
		  label: "Yellow"
		},
		{
		  value: 1000,
		  color: "#949FB1",
		  highlight: "#A8B3C5",
		  label: "Grey"
		},
		{
		  value: 100,
		  color: "#4D5360",
		  highlight: "#616774",
		  label: "Dark Grey"
		}
    ]
   	
   	//doughnutChartDataFormat
   	var doughnutChartData =[
		{
		  value: 200,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "Red"
		},
		{
		  value: 500,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Green"
		},
		{
		  value: 800,
		  color: "#FDB45C",
		  highlight: "#FFC870",
		  label: "Yellow"
		},
		{
		  value: 1000,
		  color: "#949FB1",
		  highlight: "#A8B3C5",
		  label: "Grey"
		},
		{
		  value: 100,
		  color: "#4D5360",
		  highlight: "#616774",
		  label: "Dark Grey"
		}
    ]
	//processing request and return the data
	//DoughnutChart dataResponse example
	var dataResponseDoughnutChart={
		"data":doughnutChartData,
		"chartType": "DoughnutChart",
		"title": "Cat Age"
	}
	//LineChart dataResponse example
	var dataResponseLineChartData={
		"data":lineChartData,
		"chartType": "LineChart",
		"title": "Cat Age"
	}
	//PieChart dataResponse example
	var dataResponsePieChart={
		"data":pieChartData,
		"chartType": "PieChart",
		"title": "Cat Age"
	}
	
	//if error happens, return this error object
	var error = {
			"errorType":"Topic",
			"errorLocation":"Options",
			"errotCode":"007",
			"errorMessage":"Your selected topic is not found."
		}
	//return error

	//return empty when data is not avaliable 
	//return {}
	
	//return plotting data if no error
	return dataResponseLineChartData;
	//return dataResponsePieChart;

	
}




