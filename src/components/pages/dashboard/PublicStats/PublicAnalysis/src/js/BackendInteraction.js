/*-------
    Purpose: Testing Jasmine Framework
    Parameters: NONE
    Return: "Hello world!"
-------*/
function helloWorld() {
    return "Hello world!";
}

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
