const GARAGE_NAME = "marios_karts"; // or any custom name, the garage gets cleared daily unfortunately
const GARAGE_URL = `https://wagon-garage-api.herokuapp.com/${GARAGE_NAME}/cars`;

// Query Selectors
const carsContainer = document.querySelector(".cars-list");

// GET all the Cars
const getAllCars = () => {
  // fetch cars from the API
  fetch(GARAGE_URL)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      carsContainer.innerHTML = ""; // clear container on function call

      // Construct card for each car with the dynamic data
      data.forEach((car) => {
        const carCard = `
          <div class="car">
            <div class="car-image">
              <img src="images/${car.owner.toLowerCase()}.png" />
            </div>
            <div class="car-info">
              <h4>${car.brand} - ${car.model}</h4>
              <p><strong>Owner:</strong> ${car.owner}</p>
              <p><strong>Plate:</strong> ${car.plate}</p>
            </div>
          </div>
        `;

        // Insert the created car before the end of the container
        carsContainer.insertAdjacentHTML("beforeend", carCard);
      });
    });
};

export { getAllCars, GARAGE_URL };
