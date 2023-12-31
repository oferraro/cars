import { RowDataPacket } from 'mysql2';
import pool from '../db';
import { Car } from '../interfaces/car';

export const insertIntoCarsTable = async (car: Car) => {
  const query = 'INSERT INTO cars (make, model, build_date, colour_id) VALUES (?, ?, ?, ?)';
  const {make, model, buildDate, colourId} = car;

  const year = parseInt(buildDate); // TODO: check if it's not better to use just year as integer in database
  const formattedDate = `${year}-01-01`;
  const values = [make, model, formattedDate, colourId];

  const [result] = await pool.query(query, values);
  return result;
}

export const deleteCarById = async (id: number) => {
  const query = 'DELETE from cars where id = ?';
  const values = [id];
  
  const [result] = await pool.query(query, values);
  return result;
}

export const getCarById = async (id: number) => {
  const query = 'SELECT * from cars where id = ?';
  const values = [id];
  
  const [result] = await pool.query<RowDataPacket[]>(query, values);

  if (result.length === 0) {
    return false;
  }
  
  return result[0] as Car;
};

export const getAllCars = async () => {
  const query = 'SELECT * from cars';
  
  const [result] = await pool.query(query);
  return result as Car[];
};
