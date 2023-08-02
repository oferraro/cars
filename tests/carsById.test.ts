import { createMocks } from 'node-mocks-http'; // Import the createMocks function here
// import GetCarByIdUseCase from '../useCases/cars/getCarById';
import handler from '../pages/api/car/[id]';

// Mock the GetCarByIdUseCase function to return a car for testing the existing car scenario.
jest.mock('useCases/cars/getCarById', () => jest.fn().mockResolvedValue({
  id: 1, make: 'Toyota', model: 'Camry', year: 2022
}));

describe('Cars by ID Endpoint', () => {
  test('GET /api/car/:id returns the car if it exists', async () => {
    const carId = '1';
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: carId },
    });
    

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ id: 1, make: 'Toyota', model: 'Camry', year: 2022 });
  });

  // test('GET /api/cars/:id returns 404 if car does not exist', async () => {
  //   // Mock the GetCarByIdUseCase function to return null for a non-existing car.
  //   jest.spyOn(GetCarByIdUseCase, 'mockResolvedValue').mockResolvedValue(null);

  //   const carId = '2';
  //   const { req, res } = createMocks({
  //     method: 'GET',
  //     query: { id: carId },
  //   });

  //   await handler(req, res);

  //   expect(res._getStatusCode()).toBe(404);
  //   expect(JSON.parse(res._getData())).toEqual({ error: 'Car not found' });
  // });

  // You can add more test cases for other scenarios, e.g., testing invalid inputs, testing the "DELETE" method, etc.
});
