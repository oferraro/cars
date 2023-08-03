import { createMocks } from 'node-mocks-http'; // Import the createMocks function here
import handler from '../../pages/api/cars/index';
import AddCarUseCase from '../../useCases/cars/add';

jest.mock('camelcase-keys', () => {
  return jest.fn((obj) => obj);
});

var addCarResponse = {
  message: 'Car created successfully', validData: true 
};

jest.mock('../../useCases/cars/add', () => jest.fn().mockResolvedValue(addCarResponse));

describe('Cars by ID Endpoint', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset all mock functions before each test.
  });

  test('POST /api/cars/add returns the car if it exists', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      query: {
        "make": "test",
        "model": "test1",
        "build_date": "2020",
        "colour_id": 1
      },
    });

    (AddCarUseCase as jest.Mock).mockResolvedValue(addCarResponse);    

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    // expect(JSON.parse(res._getData())).toEqual({ id: 1, make: 'Toyota', model: 'Camry', year: 2022 });
  });

});
