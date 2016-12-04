var publicAnalysisInterfaceSettings = (function() {
	
	/*-------
	Purpose: Testing Jasmine Framework
	Parameters: NONE
	Return: "Hello world!"
	-------*/
	var helloWorld = function() {
		return "Hello World";
	};
	
	// Option List used by PublicAnalysisInterface
	var optionList = {
			"Region":["Canada","United States"],
			"Cat Breed":["British Shorthair","Siamese Cat", "Persian Cat", "Maine Coon"],
			"Age":["Less than 1 year","1-2 years", "3-6 years", "6+ years"],
			"Weight":["Less than 2 lb","3-4 lb", "5-10 lb", "10+ lb"],
			"Gender":["Male","Female", "Other"],
			"Height":["1-10 cm","11-20 cm", "21-30 cm", "30+ cm"],
	};
	
	// Topic List used by PublicAnalysisInterface
	var topicList = {
		"topic":[
					"Favourite cat food brand?",
					"Favourite cat toy?",
					"Favourite cat food treats?",
					"How many WellCat Cats are microchipped?",
					"Favourite colours for cats?",
					"How many cats do WellCat Members own?",
					"Favourite sounds for cats?",
					"How many cats are rescue cats?",
					"How many cats have a mutation?",
					"What's my cat's Weight compared to the average?"
				]
	};

	// Required Values used by PublicAnalysisInterface
	var requiredValues = [
				["Cat Breed"],
				["Cat Breed", "Age"],
				["Cat Breed", "Age", "Weight"],
				["Age"],
				["Region"],
				["Region"],
				["Gender"],
				["Region"],
				["Region", "Weight", "Height"],
				["Cat Breed"]
	];

	// Default Values used by PublicAnalysisInterface
	var defaultValues = {
			"values":[
				{"Region":"Canada", "Cat Breed":"Siamese Cat", "Age":"3-6 years", "Weight":"Less than 2 lb", "Gender":"Female", "Height":"21-30 cm"},
				{"Region":"United States", "Cat Breed":"British Shorthair", "Age":"Less than 1 year", "Weight":"3-4 lb", "Gender":"Other", "Height":"30+ cm"},
				{"Region":"Canada", "Cat Breed":"Persian Cat", "Age":"Less than 1 year", "Weight":"Less than 2 lb", "Gender":"Male", "Height":"11-20 cm"},
				{"Region":"Canada", "Cat Breed":"Maine Coon", "Age":"3-6 years", "Weight":"5-10 lb", "Gender":"Female", "Height":"11-20 cm"},
				{"Region":"United States", "Cat Breed":"British Shorthair", "Age":"1-2 years", "Weight":"5-10 lb", "Gender":"Female", "Height":"30+ cm"},
				{"Region":"Canada", "Cat Breed":"Persian Cat", "Age":"1-2 years", "Weight":"Less than 2 lb", "Gender":"Other", "Height":"30+ cm"},
				{"Region":"Canada", "Cat Breed":"Maine Coon", "Age":"3-6 years", "Weight":"10+ lb", "Gender":"Female", "Height":"11-20 cm"},
				{"Region":"United States", "Cat Breed":"Siamese Cat", "Age":"1-2 years", "Weight":"3-4 lb", "Gender":"Male", "Height":"21-30 cm"},
				{"Region":"Canada", "Cat Breed":"Siamese Cat", "Age":"6+ years", "Weight":"Less than 2 lb", "Gender":"Female", "Height":"11-20 cm"},
				{"Region":"United States", "Cat Breed":"Persian Cat", "Age":"6+ years", "Weight":"10+ lb", "Gender":"Male", "Height":"21-30 cm"},
			]
	};

  return {
	helloWorld: helloWorld,
	optionList: optionList,
	topicList: topicList,
    requiredValues: requiredValues,
    defaultValues: defaultValues
  };
})();

module.exports = publicAnalysisInterfaceSettings;