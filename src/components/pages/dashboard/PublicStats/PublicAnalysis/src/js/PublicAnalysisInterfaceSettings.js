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
				"How many cats have a mutation?"
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
];
// Export Required Values variable
exports.requiredValues = requiredValues;

// Default Values used by PublicAnalysisInterface
var defaultValues = {
		"values":[
			{"Age":"1-2 years"},
			{"Region":"United States"}
		]
};
// Export Default Values variable
exports.defaultValues = defaultValues;