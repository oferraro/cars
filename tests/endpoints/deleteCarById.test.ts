import { createMocks } from 'node-mocks-http'; // Import the createMocks function here
import handler from '../../pages/api/cars/[id]';
import DeleteCarUseCase from '../../useCases/cars/delete';

jest.mock('../../useCases/cars/delete', () => jest.fn());

describe('Cars by ID Endpoint', () => {
  test('Delete /api/cars/:id returns the car if it exists', async () => {
    const carId = '1';
    const { req, res } = createMocks({
      method: 'DELETE',
      query: { id: carId },
    });

    (DeleteCarUseCase as jest.Mock).mockResolvedValue({
      message: 'Car deleted successfully',
      result: { id: 1, make: 'Toyota', model: 'Camry' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    // TODO, check the response body
  });

});
