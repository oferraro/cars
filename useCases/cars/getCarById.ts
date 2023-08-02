import { getCarById } from '../../models/cars';

const GetCarByIdUseCase = async (id: number) => {
    try {
    const carId = id;
    const car = await getCarById(carId);
    if (car) {
      return car;
    } else {
      return false;
    }
  } catch (error) {
    return { error: 'Error retrieving the car' };
  }
}

export default GetCarByIdUseCase;
