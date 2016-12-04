var publicAnalysisInterfaceSettings = require("../src/js/PublicAnalysisInterfaceSettings");

describe("Public Analysis Interface Settings Subsystem Unit Test", function() {
	// Begin all the Test Cases
	
	// Make sure we have our handle to PublicAnalysisInterfaceSettings subsystem
	it('- Should have publicAnalysisEngine defined', function() {
        expect(publicAnalysisInterfaceSettings).toBeDefined();
    });
	
	// Check all our functions are defined
	it('- Should have helloWorld function defined', function() {
        expect(publicAnalysisInterfaceSettings.helloWorld).toBeDefined();
    });
	
	// Make sure Jasmine-node is actually working on functions
	it("- Test Jasmine Testing Framework is working on setup function, return Hello World", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld()).toEqual('Hello World');
	});
		
	// Test each function
	
	// Begin Equivalence Partitioning on 	- helloWorld Function
	// Valid Input							- helloWorld Function
	it("- Equivalence Partitioning valid input - helloWorld function", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld()).toEqual('Hello World');
	});
	// Invalid Input						- helloWorld Function
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld()).not.toEqual('');
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld()).not.toEqual('Hello World, how are you?');
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld()).not.toEqual(-1);
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld()).not.toEqual(10);
	});
	it("- Equivalence Partitioning invalid input - helloWorld function", function() {
		expect(publicAnalysisInterfaceSettings.helloWorld).not.toThrow();
	});
	
	// This JS source file has no functions, only variables that stores data. So because there are no functions and can only test if variables
	// are working we cannot perform Equivalence Partitioning with this Unit Test.
	
	// Test each variable
	it("- optionList is defined", function() {
		expect(publicAnalysisInterfaceSettings.optionList).toBeDefined();
	});
	it("- topicList is defined", function() {
		expect(publicAnalysisInterfaceSettings.topicList).toBeDefined();
	});
	it("- requiredValues is defined", function() {
		expect(publicAnalysisInterfaceSettings.requiredValues).toBeDefined();
	});
	it("- defaultValues is defined", function() {
		expect(publicAnalysisInterfaceSettings.defaultValues).toBeDefined();
	});
	
	
});