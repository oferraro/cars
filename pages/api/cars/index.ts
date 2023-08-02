import { NextApiRequest, NextApiResponse } from 'next';
import ListCarsUseCase, { ListCarsReturnData } from '../../../useCases/cars/list';
import AddCarUseCase from '../../../useCases/cars/add';
import camelcaseKeys from "camelcase-keys";
import { Car } from 'interfaces/car';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const response: ListCarsReturnData | Car[] = await ListCarsUseCase();
    return res.status(200).json(response); // TODO: CHECK IF ERROR AND RETURN res.status(500).json()

  } else if (req.method === 'POST') {
    const newCar = camelcaseKeys(req.body);
    
    return res.status(200).json(await AddCarUseCase(newCar));
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
