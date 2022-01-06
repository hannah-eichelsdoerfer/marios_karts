import { GARAGE_URL, getAllCars } from "./getCars";

const parkNewCar = () => {
  // Get the entered data from the input fields
  const newCar = {
    brand: document.querySelector("#brand").value,
    model: document.querySelector("#model").value,
    plate: document.querySelector("#plate").value,
    owner: document.querySelector("#owner").value,
  };

  // we get the infos about the options from the offical API docs
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCar),
  };

  // Send the data to the API (POST request to the API)
  fetch(GARAGE_URL, options)
    .then((res) => res.json())
    .then(() => {
      // Dispay the car
      getAllCars(); // simply fetch all cars from the API again
    });
};

export { parkNewCar };
