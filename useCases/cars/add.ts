import { Car } from "../../interfaces/car";
import { insertIntoCarsTable } from "../../models/cars";

const AddCarUseCase = async (car: Car) => {
  try {
    await insertIntoCarsTable(car);    
    return { message: 'Car created successfully' };
  } catch (error) {
    return { error: 'Error creating the car' };
  }
}

export default AddCarUseCase;
