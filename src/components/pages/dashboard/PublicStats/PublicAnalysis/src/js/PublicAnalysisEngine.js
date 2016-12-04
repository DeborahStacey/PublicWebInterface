var publicAnalysisEngine = (function() {
	
	/*-------
	Purpose: Testing Jasmine Framework
	Parameters: NONE
	Return: "Hello world!"
	-------*/
	var helloWorld = function() {
		return "Hello World";
	};

	var getGraphData = function(tempRequestData) {
    
		var generatedGraph;
		
		// Set the foundError flag at any time if there is an error with generating the graph data
		var foundError = false;
		
		// Get graph data from the database
		// INSERT DATABASE CODE HERE AND DELETE THIS LINE WHEN INSERTED
		
		//DEMO PURPOSES
		switch(tempRequestData.dataRequest.topic){
			case "Favourite cat food brand?":
				generatedGraph = {
					"data": [{"value":15,"label":"Canidae Pet Foods"},{"value":20,"label":"Meow Mix"},{"value":12,"label":"IAMS"},{"value":19,"label":"Fancy Feast"}],
					"chartType": "PieChart",
					"title": "Cat's Favourite Food Brand"
				}
				break;

			case "Favourite cat toy?":
				generatedGraph = {
					"data": [{"value":4,"label":"Catit Design Senses Play Circuit"},{"value":12,"label":"Others"},{"value":12,"label":"HEXBUG Mouse Cat Toy"},{"value":19,"label":"Bergan Star Chaser Turbo Scratcher"},{"value":8,"label":"46 Inch Mega Kit Cat Claw Perch"}],
					"chartType": "DoughnutChart",
					"title": "Favourite Cat Toy's"
				}
				break;
			case "Favourite cat food treats?":
				generatedGraph = {
					"data": [{"value":30,"label":"PureBites Cat Treats"},{"value":17,"label":"Greenies Feline"},{"value":20,"label":"Others"},{"value":20,"label":"Lean Treats for Cats"}],
					"chartType": "PieChart",
					"title": "Favourite Cat Food Treats"
				}
				break;
			case "How many WellCat Cats are microchipped?":
				generatedGraph = {
					"data": [{"value":200,"label":"Yes"},{"value":87,"label":"No"}],
					"chartType": "PieChart",
					"title": "WellCat Cat's are Microchipped"
				}
				break;
			case "Favourite colours for cats?":
				var lineChartData={
					labels: ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Other"],
					datasets: [
						{
							label: "Your WellCat Weight (kg)",
							fillColor: "rgba(220,220,220,0.2)",
							strokeColor: "rgba(220,220,220,1)",
							pointColor: "rgba(220,220,220,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(220,220,220,1)",
							data: [4.2,3.65,4.2,5.8,4.6,2.0,1.5]
						}
					]
				}
				generatedGraph = {
					"data": lineChartData,
					"chartType": "LineChart",
					"title": "Favourite colours for cats"
				}
				break;	
			case "How many cats do WellCat Members own?":
				var barChartData={
					labels: ["One","Two","Three","Four-Five","Six+"],
					datasets: [
						{
							label: "Male Owners",
							fillColor: "rgba(220,220,220,0.2)",
							strokeColor: "rgba(220,220,220,1)",
							pointColor: "rgba(220,220,220,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(220,220,220,1)",
							data: [15,10,8,5,3]
						},
						{
							label: "Female Owners",
							fillColor: "rgba(151,187,205,0.2)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: [18, 15, 9, 5, 2]
						}
					] 
				}
				generatedGraph = {
					"data": barChartData,
					"chartType": "BarChart",
					"title": "How many cats Wellcat Members Own"
				}
				break;
			case "Favourite sounds for cats?":
				var lineChartData={
					labels: ["Beep", "Boop", "Shhh", "Crying", "Laughing", "Others"],
					datasets: [
						{
							label: "Sounds your cats like",
							fillColor: "rgba(220,220,220,0.2)",
							strokeColor: "rgba(220,220,220,1)",
							pointColor: "rgba(220,220,220,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(220,220,220,1)",
							data: [4.2,2.45,3.2,4.3,2.6,4.0,3.2]
						}
					]
				}
				generatedGraph = {
					"data": lineChartData,
					"chartType": "LineChart",
					"title": "Favourite sounds for cats"
				}
				break;	
			case "What's my cat's Weight compared to the average?":
				var lineChartData={
					labels: ["January", "February", "March", "April", "May", "June", "July"],
					datasets: [
						{
							label: "Your WellCat Weight (kg)",
							fillColor: "rgba(220,220,220,0.2)",
							strokeColor: "rgba(220,220,220,1)",
							pointColor: "rgba(220,220,220,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(220,220,220,1)",
							data: [4.7,4.65,4.2,3.8,3.6,4.0,3.5]
						},
						{
							label: "Other Wellcat's weight (kg)",
							fillColor: "rgba(151,187,205,0.2)",
							strokeColor: "rgba(151,187,205,1)",
							pointColor: "rgba(151,187,205,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: [4.5,4.8,4.4,3.6,3.8,4.2,4.0]
						}
					]
				}
				generatedGraph = {
					"data": lineChartData,
					"chartType": "LineChart",
					"title": "Your Cat's Weight Compared to Other WellCats"
				}
				break;
			case "How many cats are rescue cats?":
				generatedGraph = {
					"data": [{"value":250,"label":"Yes"},{"value":40,"label":"No"}],
					"chartType": "PieChart",
					"title": "Cats that have been rescued"
				}
				break;
			case "How many cats have a mutation?":
				generatedGraph = {
					"data": [{"value":30,"label":"Yes"},{"value":240,"label":"No"}],
					"chartType": "PieChart",
					"title": "Cats that have a mutation"
				}
				break;
			default:
				foundError = true;
				break;

		}
		
		if (!foundError){
			return generatedGraph;
		}else{
			// There was an error with the graph being generated, allow the PublicAnalysisInterface to handle the rest
			return -1;
		}
	
	
	};

  return {
    helloWorld: helloWorld,
    getGraphData: getGraphData
  };
})();

module.exports = publicAnalysisEngine;