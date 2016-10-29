var fs = require('fs');
var ourArgument = process.argv[2];

fs.readFile('countries.json', function(error, data) {
  var array = JSON.parse(data.toString());
  country = findCountry(array, ourArgument);

  if (error) {
    throw error;
  }

  if (country) {
    console.log(country);
  } else {
    console.log(ourArgument + ' is not a country');
  }
});

function findCountry(array, countryName)  {
  for (var i = 0; i < array.length; i ++) {
    if (array[i].name === ourArgument) {
      return array[i];
    }
  }
}
