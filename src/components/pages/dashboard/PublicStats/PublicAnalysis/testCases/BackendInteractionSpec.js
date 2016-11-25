describe("Backend Interaction Subsystem", function() {
  it("Called function in Backend Javascript File. Returned successfully", function() {
    expect(helloWorld()).toEqual("Hello world!");
  });
});

describe("Generate sql query", function() {
  var inputString = '{' +
                       '"interface":[{' +
                         '"region": "region1",' +
                         '"catBreed": "catBreed1",' +
                         '"age": "age1",' +
                         '"weight": "weight1",' +
                         '"gender": "gender1",' +
                         '"height": "height1"' +
                       '}]' +
                    '}';
  var input = JSON.parse(inputString);
  var dateOfBirth = new Date();
  dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 1);

  it("Takes a json object with the expected fields", function() {
    expect(jsonToString(input)).toEqual("region1 catBreed1 age1 weight1 gender1 height1");
  });

  it("Generates sql query from json object", function() {
    expect(generateQuery(input)).toEqual("SELECT location.locationname as location, country.countryname, pet.ownerid, pet.name, breed.name as breed, gender.name as gender, pet.microchip, pet.fitcat, pet.dateofbirth, pet.weight, pet.height, pet.length, pet.dateofdeath, pet.reasonfordeath FROM pet left join account on pet.ownerid = account.userid left join address on account.addressid = address.addressid left join location on address.locationid = location.locationid left join country on location.countryid = country.countryid left join breed on pet.breed = breed.breedid left join gender on pet.gender = gender.genderid WHERE country.countryid = 1 AND pet.breed = 7 AND pet.dateofbirth IS NOT NULL AND pet.dateofbirth > " +
"'" + dateOfBirth.toISOString().split('T')[0] + "'" + " AND pet.weight IS NOT NULL AND pet.weight <= 2 AND pet.gender = 1 AND pet.height >= 1 AND pet.height <= 10;");
  });
});
