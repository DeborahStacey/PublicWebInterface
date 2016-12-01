/*-------
 Purpose: Testing Jasmine Framework
 Parameters: NONE
 Return: "Hello world!"
 -------*/
function helloWorld() {
    return "Hello world!";
}

/*-------
	Purpose: Gets the graph data from the database, does some analysis on it and returns the generated graph
	Parameters: tempRequestData (the front end data)
	Return: Returns the generatedGraph, or an error being -1
-------*/
export function getGraphData(tempRequestData) {	
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
                "title": "WellCat Cat's Favourite Fod Brand"
            }
            break;

        case "Favourite cat toy?":
            generatedGraph = {
                "data": [{"value":4,"label":"Catit Design Senses Play Circuit"},{"value":12,"label":"Others"},{"value":12,"label":"HEXBUG Mouse Cat Toy"},{"value":19,"label":"Bergan Star Chaser Turbo Scratcher"},{"value":8,"label":"46 Inch Mega Kit Cat Claw Perch"}],
                "chartType": "DoughnutChart",
                "title": "WellCat Cat's Favourite Toy"
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

        default:
            foundError = true;
            break;

    }
	
	if (!foundError){
		return generatedGraph;
	}else{
		// There was an error with the graph being generated, allow the PublicAnalysisInterface to handle the rest
		var error = {
            "errorType":"Topic",
            "errorLocation":"Options",
            "errotCode":"007",
            "errorMessage":"Your selected topic is not found."
        }
	}
	
}

// **********************************************************************


function jsonToString(input){
	//return "region1 cat1 breed1 age1 weight1 gender1 height1";
    return input.interface[0].region + " " + input.interface[0].catBreed + " " + input.interface[0].age + " " + input.interface[0].weight + " " + input.interface[0].gender + " " + input.interface[0].height;
}

/*-------
    Purpose: Create an SQL query from a json object
    Parameters: input, a json object
    Return: A string representing the SQL query
-------*/
function generateQuery(input){
    var region;
    var breed;
    var lowerDate;
    var upperDate;
    var lowerAge;
    var upperAge;
    var lowerWeight;
    var upperWeight;
    var gender;
    var lowerHeight;
    var upperHeight;
    var queryString;

    if(input){

        lowerDate = new Date();
        upperDate = new Date();

        switch (input.interface[0].region) {
            case "region0":
                region = "IS NOT NULL";
                break;
            case "region1":
                region = '= 1';
                break;
            case "region2":
                region = '= 2';
                break;
        }

        switch (input.interface[0].catBreed) {
            case "catBreed0":
                breed = "IS NOT NULL";
                break;
            case "catBreed1":
                breed = '= 7';
                break;
            case "catBreed2":
                breed = '= 4';
                break;
            case "catBreed3":
                breed = '= 1';
                break;
            case "catBreed4":
                breed = '= 2';
                break;
        }

        switch (input.interface[0].age) {
            case "age0":
                lowerAge = "IS NOT NULL";
                upperAge = "IS NOT NULL";
                break;
            case "age1":
                upperDate.setFullYear(upperDate.getFullYear() - 1);
                lowerAge = "IS NOT NULL";
                upperAge = "> '" + upperDate.toISOString().split('T')[0] + "'";
                break;
            case "age2":
                lowerDate.setFullYear(lowerDate.getFullYear() - 1);
                upperDate.setFullYear(upperDate.getFullYear() - 2);
                lowerAge = "<= '" + lowerDate.toISOString().split('T')[0] + "'";
                upperAge = ">= '" + upperDate.toISOString().split('T')[0] + "'";
                break;
            case "age3":
                lowerDate.setFullYear(lowerDate.getFullYear() - 3);
                upperDate.setFullYear(upperDate.getFullYear() - 6);
                lowerAge = "<= '" + lowerDate.toISOString().split('T')[0] + "'";
                upperAge = ">= '" + upperDate.toISOString().split('T')[0] + "'";
                break;
            case "age4":
                lowerDate.setFullYear(lowerDate.getFullYear() - 6);
                lowerAge = "< '" + lowerDate.toISOString().split('T')[0] + "'";
                upperAge = "IS NOT NULL";
                break;
        }

        switch (input.interface[0].weight) {
            case "weight0":
                lowerWeight = "IS NOT NULL";
                upperWeight = "IS NOT NULL";
                break;
            case "weight1":
                lowerWeight = "IS NOT NULL";
                upperWeight = "<= 2";
                break;
            case "weight2":
                lowerWeight = ">= 3";
                upperWeight = "<= 4";
                break;
            case "weight3":
                lowerWeight = ">= 5";
                upperWeight = "<= 10";
                break;
            case "weight4":
                lowerWeight = "> 10";
                upperWeight = "IS NOT NULL";
                break;
        }

        switch (input.interface[0].gender) {
            case "gender0":
                gender = "IS NOT NULL";
                break;
            case "gender1":
                gender = '= 1';
                break;
            case "gender2":
                gender = '= 2';
                break;
            case "gender3":
                gender = '= 3';
                break;
        }

        switch (input.interface[0].height) {
            case "height0":
                lowerHeight = "IS NOT NULL";
                upperHeight = "IS NOT NULL";
                break;
            case "height1":
                lowerHeight = ">= 1";
                upperHeight = "<= 10";
                break;
            case "height2":
                lowerHeight = ">= 11";
                upperHeight = "<= 20";
                break;
            case "height3":
                lowerHeight = ">= 21";
                upperHeight = "<= 30";
                break;
            case "height4":
                lowerHeight = "> 30";
                upperHeight = "IS NOT NULL";
                break;
        }

        queryString = "SELECT location.locationname as " +
"location, country.countryname, " +
"pet.ownerid, pet.name, breed.name as breed, gender.name " +
"as gender, pet.microchip, pet.fitcat, pet.dateofbirth, " +
"pet.weight, pet.height, pet.length, pet.dateofdeath, " +
"pet.reasonfordeath FROM pet left join account on " +
"pet.ownerid = account.userid left join address on " +
"account.addressid = address.addressid left join location on " +
"address.locationid = location.locationid left join country " +
"on location.countryid = country.countryid left join breed " +
"on pet.breed = breed.breedid left join gender on pet.gender " +
"= gender.genderid WHERE country.countryid " + region +
" AND pet.breed " + breed + " AND pet.dateofbirth " +
lowerAge + " AND pet.dateofbirth " + upperAge + " AND " +
"pet.weight " + lowerWeight + " AND pet.weight " + upperWeight +
" AND pet.gender " + gender + " AND pet.height " + lowerHeight + " AND pet.height " + upperHeight + ";";

        return queryString;

    }
    else {
        return "";
    }
}