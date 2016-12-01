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
// Export Topic List variable
exports.topicList = topicList;

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
// Export Required Values variable
exports.requiredValues = requiredValues;

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
// Export Default Values variable
exports.defaultValues = defaultValues;