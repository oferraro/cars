import pool from '../db';
import { Car } from '../interfaces/car';

export const insertIntoCarsTable = async (car: Car) => {
  const query = 'INSERT INTO cars (make, model, build_date, colour_id) VALUES (?, ?, ?, ?)';
  const {make, model, buildDate, colourId} = car;

  const year = parseInt(buildDate); // TODO: check if it's not better to use just year as integer in database
  const defaultMonth = 1;
  const defaultDay = 1;
  const convertedDate = new Date(year, defaultMonth - 1, defaultDay);
  const formattedDate = convertedDate.toISOString().slice(0, 10);
  const values = [make, model, formattedDate, colourId];
  console.log('query, values', query, values);
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
  
  const [result] = await pool.query(query, values);
  return result;
};