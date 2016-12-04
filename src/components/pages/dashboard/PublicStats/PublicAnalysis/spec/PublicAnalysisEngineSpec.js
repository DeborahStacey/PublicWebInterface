var publicAnalysisEngine = require("../src/js/PublicAnalysisEngine");

// Create request data variables that could be given to us from the Interface by the user
var requestData1 = {
	"selectedTopic":{
		"selectedTopic": "Favourite cat food brand?"
	},
	"dataRequest":{
		"topic": "Favourite cat food brand?",
		"options": {"Region": "Canada","Age": "Less than 1 year"}
	}	
}

var requestData2 = {
	"selectedTopic":{
		"selectedTopic": "Favourite cat toy?"
	},
	"dataRequest":{
		"topic": "Favourite cat toy?",
		"options": {"Region": "Canada","Age": "Less than 1 year"}
	}	
}

var requestDataInvalid = {
	"selectedTopic":{
		"selectedTopic": ""
	},
	"dataRequest":{
		"topic": "",
		"options": {"Region": "","Age": ""}
	}	
}


// Create generated graph data variables that we could return
var generatedGraph1 = {
					"data": [{"value":15,"label":"Canidae Pet Foods"},{"value":20,"label":"Meow Mix"},{"value":12,"label":"IAMS"},{"value":19,"label":"Fancy Feast"}],
					"chartType": "PieChart",
					"title": "Cat's Favourite Food Brand"
				}
var generatedGraph2 = {
					"data": [{"value":4,"label":"Catit Design Senses Play Circuit"},{"value":12,"label":"Others"},{"value":12,"label":"HEXBUG Mouse Cat Toy"},{"value":19,"label":"Bergan Star Chaser Turbo Scratcher"},{"value":8,"label":"46 Inch Mega Kit Cat Claw Perch"}],
					"chartType": "DoughnutChart",
					"title": "Favourite Cat Toy's"
				}

describe("Public Analysis Engine Subsystem Unit Test", function() {
	// Begin all the Test Cases
	
	// Make sure we have our handle to PublicAnalysisEngine subsystem
	it('- Should have publicAnalysisEngine defined', function() {
        expect(publicAnalysisEngine).toBeDefined();
    });
	
	// Check all our functions are defined
	it('- Should have helloWorld function defined', function() {
        expect(publicAnalysisEngine.helloWorld).toBeDefined();
    });
	
	it('- Should have getGraphData function defined', function() {
        expect(publicAnalysisEngine.getGraphData).toBeDefined();
    });
	
	// Make sure Jasmine-node is actually working on functions
	it("- Test Jasmine Testing Framework is working on setup function, return Hello World", function() {
		expect(publicAnalysisEngine.helloWorld()).toEqual('Hello World');
	});
		
	// Test each function
	
	// Begin Equivalence Partitioning on 	- helloWorld Function
	// Valid Input							- helloWorld Function
	it("- Equivalence Partitioning valid input - helloWorld function", function() {
		expect(publicAnalysisEngine.helloWorld()).toEqual('Hello World');
	});
	// Invalid Input						- helloWorld Function
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisEngine.helloWorld()).not.toEqual('');
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisEngine.helloWorld()).not.toEqual('Hello World, how are you?');
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisEngine.helloWorld()).not.toEqual(-1);
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisEngine.helloWorld()).not.toEqual(10);
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisEngine.helloWorld).not.toThrow();
	});
	
	// Begin Equivalence Partitioning on 	- getGraphData Function
	// Valid Input							- getGraphData Function
	it("- Equivalence Partitioning valid input - getGraphData function", function() {
		expect(publicAnalysisEngine.getGraphData(requestData1)).toEqual(generatedGraph1);
	});
	it("- Equivalence Partitioning valid input - getGraphData function", function() {
		expect(publicAnalysisEngine.getGraphData(requestData2)).toEqual(generatedGraph2);
	});
	// Can write more valid input tests here for future functionality that would return correct generated graphs
	
	// Invalid Input						- getGraphData Function
	it("- Equivalence Partitioning invalid input - getGraphData function", function() {
		expect(publicAnalysisEngine.getGraphData).toThrow();
	});
	it("- Equivalence Partitioning invalid input - getGraphData function", function() {
		expect(publicAnalysisEngine.getGraphData(requestDataInvalid)).toEqual(-1);
	});
	// Can write more invalid input tests here for future functionality
});