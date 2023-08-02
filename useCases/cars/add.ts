import { Car } from "../../interfaces/car";
import { insertIntoCarsTable } from "../../models/cars";
import isValidCarData from "../../validations/car";

interface ReturnData {
  error?: string;
  message?: string;
  validData: boolean;
}

const AddCarUseCase = async (car: Car): Promise<ReturnData> => {
  const isValidCar = isValidCarData(car);
  if (!isValidCar) {
    return { error: 'Invalid car data', validData: false };
  }

  try {
    await insertIntoCarsTable(car);    
    return { message: 'Car created successfully', validData: true };
  } catch (error) {
    return { error: 'Error creating the car', validData: true };
  }
}

export default AddCarUseCase;
