import { createMocks } from 'node-mocks-http'; // Import the createMocks function here
import handler from '../../pages/api/cars/index';
import ListCarsUseCase from '../../useCases/cars/list';

jest.mock('camelcase-keys', () => {
  return jest.fn((obj) => obj);
});

jest.mock('../../useCases/cars/list', () => jest.fn().mockResolvedValue([
  {id: 1, make: 'Toyota', model: 'Camry', buildDate: 2022, colourId: 1}
]));

describe('Cars by ID Endpoint', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset all mock functions before each test.
  });

  test('GET /api/cars returns the car if it exists', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });
    (ListCarsUseCase as any).mockResolvedValue([
      {id: 1, make: 'Toyota', model: 'Camry', buildDate: 2022, colourId: 1}
    ]);
    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual([
      {id: 1, make: 'Toyota', model: 'Camry', buildDate: 2022, colourId: 1}
    ]);
  });

});
