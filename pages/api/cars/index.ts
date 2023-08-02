import { NextApiRequest, NextApiResponse } from 'next';
import ListCarsUseCase from '../../../useCases/cars/list';
import DeleteCarUseCase from '../../../useCases/cars/delete';
import AddCarUseCase from '../../../useCases/cars/add';
import camelcaseKeys from "camelcase-keys";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    ListCarsUseCase();
  } else if (req.method === 'POST') {
    const newCar = camelcaseKeys(req.body);
    return res.status(200).json(await AddCarUseCase(newCar));
  } else if (req.method === 'DELETE') {
    return res.status(200).json(DeleteCarUseCase(parseInt(req.query.id as string)));
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
