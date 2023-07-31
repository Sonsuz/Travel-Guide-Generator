const sourceAirportCode = document.getElementById("sourceAirport").value;
const destinationAirportCode = document.getElementById("destinationAirport").value;
const itineraryType = document.getElementById("itineraryType").value;
const date = document.getElementById("date").value;
const returnDate = document.getElementById("returnDate").value;
const numAdults = document.getElementById("numAdults").value;
const numSeniors = document.getElementById("numSeniors").value;
const childAges = document.getElementById("childAges").value;
const classOfService = document.getElementById("classOfService").value;
const sortOrder = document.getElementById("sortOrder").value;

//Checks if childAges input format is correct
let childAgesCheck = [];
try {
  if (childAges) {
    childAgesCheck = JSON.parse(childAges);
    if (!Array.isArray(childAgesCheck)) {
      throw new Error("Invalid input. Please enter ages in the format [2, 10].");
    }
  }
} catch (error) {
  console.error(error.message);
}

const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${sourceAirportCode}&destinationAirportCode=${destinationAirportCode}&date=${date}&itineraryType=${itineraryType}&sortOrder=${sortOrder}&numAdults=1&numSeniors=0&classOfService=${classOfService}&pageNumber=1&currencyCode=USD';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '399a6c29eamsh9877d593552b802p1bfbb3jsn3457b4063f20',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}