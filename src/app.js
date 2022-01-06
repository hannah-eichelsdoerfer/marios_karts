// Garage API: https://github.com/lewagon/garage-api#wagon---garage-api-
import { getAllCars } from "./getCars";
import { parkNewCar } from "./parkNewCar";

// Get cars to show on page load
getAllCars();

const form = document.querySelector(".car-form");

// Listen to form submission to park a new car to the garage
form.addEventListener("submit", (event) => {
  event.preventDefault();
  parkNewCar();
  form.reset(); // Optional - to clear the form after submission
});
