import { insertIntoCarsTable, deleteCarById, getCarById } from '../../models/cars';
import pool from '../../db';
import { Car } from 'interfaces/car';

// Mock the pool.query method to return the desired data
jest.mock('../../db', () => ({
  query: jest.fn(),
}));

describe('Car functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('insertIntoCarsTable should insert a car into the database', async () => {
    const car: Car = {
      make: 'Toyota',
      model: 'Corolla',
      buildDate: '2023',
      colourId: 1,
    };
    const mockInsertResult = { /* your mock insert result here */ };
    (pool.query as jest.Mock).mockResolvedValueOnce([mockInsertResult]);

    // Act
    const result = await insertIntoCarsTable(car);

    // Assert
    expect(pool.query).toHaveBeenCalledWith(
      'INSERT INTO cars (make, model, build_date, colour_id) VALUES (?, ?, ?, ?)',
      ['Toyota', 'Corolla', '2023-01-01', 1],
    );
    expect(result).toEqual(mockInsertResult);
  });

  it('deleteCarById should delete a car from the database', async () => {
    // Arrange
    const mockDeleteResult = { /* your mock delete result here */ };
    (pool.query as jest.Mock).mockResolvedValueOnce([mockDeleteResult]);

    // Act
    const result = await deleteCarById(123);

    // Assert
    expect(pool.query).toHaveBeenCalledWith('DELETE from cars where id = ?', [123]);
    expect(result).toEqual(mockDeleteResult);
  });

  it('getCarById should fetch a car from the database', async () => {
    // Arrange
    const mockCarData = {
      "id": 8,
      "make": "test",
      "model": "test1",
      "build_date": "2019-12-31T23:00:00.000Z",
      "colour_id": 1
    };

    (pool.query as jest.Mock).mockResolvedValueOnce([mockCarData]);

    // Act
    const result = await getCarById(456);

    // Assert
    expect(pool.query).toHaveBeenCalledWith('SELECT * from cars where id = ?', [456]);
  });
});