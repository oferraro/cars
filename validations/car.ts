import { Car } from "../interfaces/car";

const isValidCarData = (car: Car) => {
  const currentYear = new Date().getFullYear();

  return (
    typeof car.make === 'string' &&
    typeof car.model === 'string' &&
    typeof car.buildDate === 'string' &&
    !isNaN(parseInt(car.buildDate)) &&
    parseInt(car.buildDate) <= new Date().getFullYear() &&
    parseInt(car.buildDate) >= currentYear - 4 && // Check if the year is not older than four years
    parseInt(car.buildDate) <= currentYear &&
    typeof car.colourId === 'number'
  );
}

export default isValidCarData;
