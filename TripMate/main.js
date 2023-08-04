//  Flights
const sourceAirportCode = document.getElementById("sourceAirport").value;
const destinationAirportCode = document.getElementById("destinationAirport").value;
const itineraryType = document.getElementById("itineraryType").value;
const date = document.getElementById("date").value;
const returnDate = document.getElementById("returnDate").value;
const numAdults = document.getElementById("numAdults").value;
const numSeniors = document.getElementById("numSeniors").value;
//const childAges = document.getElementById("childAges").value;
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
//Function for 'Search Flights' button: API request is made once 'Search Flights' button is clicked
async function buttonFlight(){

const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights?sourceAirportCode=${sourceAirportCode}&destinationAirportCode=${destinationAirportCode}&date=${date}&itineraryType=${itineraryType}&sortOrder=${sortOrder}&numAdults=1&numSeniors=0&classOfService=${classOfService}&returnDate=${returnDate}&pageNumber=1&currencyCode=USD';
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
}

//When the button is clicked, the event listener will call the buttonFlight() function.
document.getElementById("flightButton").addEventListener("click", buttonFlight);


//  Hotels
const checkInDate = document.getElementById("checkIn").value;
const checkOutDate = document.getElementById("checkOut").value;
const totalAdults = document.getElementById("adults").value;
//const totalChildrenAges = document.getElementById("childrenAges").value;
const hotelType = document.getElementById("type").value;
const hotelAmenity = document.getElementById("amenity").value;
const hotelRating = document.getElementById("rating").value;
const hotelPriceMin = document.getElementById("priceMin").value;
const hotelPriceMax = document.getElementById("priceMax").value;

//Function for 'Search Flights' button: API request is made once 'Search Flights' button is clicked
async function buttonHotel(){

const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?geoId=${GEOID}&checkIn=${checkInDate}3E&checkOut=${checkOutDate}&pageNumber=1&sort=1&adults=${totalAdults}&childrenAges%5B0%5D=${totalChildrenAges}&currencyCode=USD&type%5B0%5D=${hotelType}&amenity%5B0%5D=${hotelAmenity}&rating=${hotelRating}&priceMin=${hotelPriceMin}&priceMax=${hotelPriceMax}';
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
}

//When the button is clicked, the event listener will call the buttonHotel() function.
document.getElementById("hotelButton").addEventListener("click", buttonHotel);


//   Car Rentals
const pickUpPlace = document.getElementById("pickUpPlaceId").value;
const pickUpLocType = document.getElementById("pickUpLocationType").value;
const pickUpD = document.getElementById("pickUpDate").value;
const dropOffD = document.getElementById("dropOffDate").value;
const pickUpT = document.getElementById("pickUpTime").value;
const dropOffT = document.getElementById("dropOffTime").value;
const carSort = document.getElementById("order").value;
const age = document.getElementById("driverAge").value;

//Function for 'Search Flights' button: API request is made once 'Search Flights' button is clicked
async function buttonCarRentals(){
	const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/cars/searchCarsSameDropOff?pickUpPlaceId=${pickUpPlace}&pickUpLocationType=${pickUpLocType}&pickUpDate=${pickUpD}&dropOffDate=${dropOffD}&pickUpTime=${pickUpT}&dropOffTime=${dropOffT}&order=${carSort}&driverAge=${age}&page=1&currencyCode=USD';
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
}

//When the button is clicked, the event listener will call the buttonHotel() function.
document.getElementById("carRentalsButton").addEventListener("click", buttonCarRentals);
