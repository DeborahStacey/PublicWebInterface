//this file is for front end demo and testing purpose
//for integrated version please vist PublicAnalysis branch which is dedicated to backend population analysis team
//functions in file in charge fetch data from back end
//front end will only call functions populateTopics, populateOptions and populateData
//to create interactive stats ploting functionality
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
		"topic":["Cat Population","Cat Age","Number of Homeless Cat"]
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
				"age":["1-3","3-5","5-10","10+"]
			},
			"optionRestriction":{
				"defaultValue":{"age":"3-5"},
				"requiredValue":["age"]
			}
		};
		return options;
	}
	else if(selecedTopic=="Cat Population"){
		var options ={
			"optionList":{
				"year":["2015","2016"],
				"country":["Canada","US"],
			},
			"optionRestriction":{
				"defaultValue":{"year":"2015","country":"US"},
				"requiredValue":["year","country"]
			}
		};
		return options;
	}
	else if(selecedTopic=="Number of Homeless Cat"){
		var options ={
			"optionList":{
				"country":["Canada","US"],
				"gender":["male","female"],
			},
			"optionRestriction":{
				"defaultValue":{"country":"Canada","gender":"female"},
				"requiredValue":["gender"]
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
                label: "Female Cat",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [1000,1200,1300,1250,1200,1050,1400]
            },
            {
                label: "Male Cat",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [1050,1400,1200,1350,1200,1150,1300]
            }
        ]
      
    }
    //barChartDataFormat
    var barChartData={
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Female",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [1000,1200,1050,1000,800,750,400]
            }
            
        ]
      
    }
   	//pieChartDataFormat
   	var pieChartData =[
		{
		  value: 200,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "Age 1-3"
		},
		{
		  value: 500,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Age 3-5"
		},
		{
		  value: 800,
		  color: "#FDB45C",
		  highlight: "#FFC870",
		  label: "Age 5-10"
		},
		{
		  value: 1000,
		  color: "#949FB1",
		  highlight: "#A8B3C5",
		  label: "Age 10+"
		}
		
    ]
   	
   	//doughnutChartDataFormat
   	var doughnutChartData =[
		{
		  value: 200,
		  color:"#F7464A",
		  highlight: "#FF5A5E",
		  label: "Age 1-3"
		},
		{
		  value: 500,
		  color: "#46BFBD",
		  highlight: "#5AD3D1",
		  label: "Age 3-5"
		},
		{
		  value: 800,
		  color: "#FDB45C",
		  highlight: "#FFC870",
		  label: "Age 5-10"
		},
		{
		  value: 1000,
		  color: "#949FB1",
		  highlight: "#A8B3C5",
		  label: "Age 10+"
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
		"title": "Cat Population"
	}
	//PieChart dataResponse example
	var dataResponsePieChart={
		"data":pieChartData,
		"chartType": "PieChart",
		"title": "Cat Age"
	}
	//BarChart dataResponse example
	var dataResponseBarChart={
		"data":barChartData,
		"chartType": "BarChart",
		"title": "Number of Homeless Cat"
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
	//return dataResponseLineChartData;
	//return dataResponsePieChart;

	//for demo purpose
	if(dataRequest.dataRequest.topic=="Cat Population"){
		return dataResponseLineChartData;
	}
	else if(dataRequest.dataRequest.topic=="Cat Age"){
		return dataResponseDoughnutChart;
	}
	else if(dataRequest.dataRequest.topic=="Number of Homeless Cat"){
		return dataResponseBarChart;
	}

	
}




