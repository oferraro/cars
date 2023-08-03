import GetCarByIdUseCase from 'useCases/cars/getCarById';
import { getCarById } from '../../models/cars';

// Mock the models/cars module
jest.mock('../../models/cars', () => ({
  getCarById: jest.fn(),
}));

describe('GetCarByIdUseCase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return the car if it exists', async () => {
    const mockCar = { id: 1, make: 'Toyota', model: 'Camry', buildDate: '2022', colourId: 2 };
    (getCarById as jest.Mock).mockResolvedValue(mockCar);

    const carId = 1;
    const result = await GetCarByIdUseCase(carId);

    expect(result).toEqual(mockCar);
    expect(getCarById).toHaveBeenCalledWith(carId);
  });

  test('should return false for non-existing car', async () => {
    (getCarById as jest.Mock).mockResolvedValue(null);

    const carId = 999;
    const result = await GetCarByIdUseCase(carId);

    expect(result).toBe(false);
    expect(getCarById).toHaveBeenCalledWith(carId);
  });

  test('should handle error case', async () => {
    const errorMessage = 'Error retrieving the car';
    (getCarById as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const carId = 1;
    const result = await GetCarByIdUseCase(carId);

    expect(result).toEqual({ error: errorMessage });
    expect(getCarById).toHaveBeenCalledWith(carId);
  });
});
