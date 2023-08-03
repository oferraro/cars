import { createMocks } from 'node-mocks-http'; // Import the createMocks function here
import handler from '../../pages/api/car/[id]';
import GetCarByIdUseCase from '../../useCases/cars/getCarById';
import { Car } from 'interfaces/car';

jest.mock('../../useCases/cars/getCarById', () => jest.fn().mockResolvedValue({
  id: 1, make: 'Toyota', model: 'Camry', buildDate: '2022', colourId: 2
} as Car));

describe('Cars by ID Endpoint', () => {
  test('GET /api/car/:id returns the car if it exists', async () => {
    const carId = '1';
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: carId },
    });

    await handler(req, res);

    const expectedResponseCarAdd: Car = { id: 1, make: 'Toyota', model: 'Camry', buildDate: '2022', colourId: 2 };

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expectedResponseCarAdd
    );
  });

  test('GET /api/cars/:id returns 404 if car does not exist', async () => {
    (GetCarByIdUseCase as jest.Mock).mockResolvedValue(null);

    const carId = '2';
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: carId },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
    expect(JSON.parse(res._getData())).toEqual({ error: 'Car not found' });
  });

});
