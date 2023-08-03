import { Car } from "interfaces/car";
import { getAllCars } from "models/cars";

export interface ListCarsReturnData {
    error?: string;
}

const ListCarsUseCase = async (): Promise<ListCarsReturnData | Car[]> => {
    try {
        const cars: Car[] = await getAllCars();
        return cars;
    } catch (error) {
        return { error: 'Error retrieving cars' };
    }
}

export default ListCarsUseCase;
