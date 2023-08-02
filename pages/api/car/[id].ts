import { NextApiRequest, NextApiResponse } from 'next';
import GetCarByIdUseCase from '../../../useCases/cars/getCarById';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id } = req.query;
        const car = await GetCarByIdUseCase(parseInt(id as string));
        if (car) {
          res.status(200).json(car);
        } else {
          res.status(404).json({ error: 'Car not found' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
