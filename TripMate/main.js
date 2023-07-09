const departureAirport = document.getElementById('departure-airport').value;
const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=${departureAirport}`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '399a6c29eamsh9877d593552b802p1bfbb3jsn3457b4063f20',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  }
};

async function fetchFlightListings() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Get a reference to the flight listings container
    const flightListingsContainer = document.getElementById('flight-listings');

    // Function to create a flight listing element
    function createFlightListing(flight) {
      const flightListing = document.createElement('div');
      flightListing.classList.add('flight-listing');

      // Extract the necessary data from the flight object
      const airportName = flight.name;
      const airportCode = flight.airportCode;
      const parentName = flight.details.parent_name;
      const grandparentName = flight.details.grandparent_name;

      // Add flight information to the flight listing element
      flightListing.innerHTML = `
        <p>Flight Name: ${airportName}</p>
        <p>Airport Code: ${airportCode}</p>
        <p>Parent Name: ${parentName}</p>
        <p>Grandparent Name: ${grandparentName}</p>
        <!-- Add more flight information as needed -->
      `;

      return flightListing;
    }

    // Function to filter flights based on selected filters
    function filterFlights() {
      // Clear any existing content in the flight listings container
      flightListingsContainer.innerHTML = '';

      // Get the selected filter values
      const departureDate = document.getElementById('departure-date').value;
      const arrivalDate = document.getElementById('arrival-date').value;
      const numStops = document.getElementById('num-stops').value;
      const sortCriteria = document.getElementById('sort-dropdown').value;

      // Apply filters to the flights
      const filteredFlights = result.data[0].children.filter((flight) => {
        // Filter by departure and arrival dates
        if (departureDate && flight.departureDate !== departureDate) {
          return false;
        }
        if (arrivalDate && flight.arrivalDate !== arrivalDate) {
          return false;
        }

        // Filter by number of stops
        if (numStops !== 'all' && flight.stops !== numStops) {
          return false;
        }

        return true;
      });

      // Sort the filtered flights based on the selected criteria
      switch (sortCriteria) {
        case 'price':
          filteredFlights.sort((a, b) => a.price - b.price);
          break;
        case 'quality':
          filteredFlights.sort((a, b) => a.quality - b.quality);
          break;
        case 'flight-duration':
          filteredFlights.sort((a, b) => a.duration - b.duration);
          break;
        case 'number-of-stops':
          filteredFlights.sort((a, b) => a.stops - b.stops);
          break;
        // Add additional sorting criteria cases as needed
      }

      // Create flight listings for the filtered and sorted flights
      filteredFlights.forEach((flight) => {
        const flightListing = createFlightListing(flight);
        flightListingsContainer.appendChild(flightListing);
      });
    }

    // Add event listener for applying filters
    const applyFiltersBtn = document.getElementById('apply-filters');
    applyFiltersBtn.addEventListener('click', filterFlights);

    // Call the function to initially display flight listings
    filterFlights();
  } catch (error) {
    console.error(error);
  }
}

fetchFlightListings();
