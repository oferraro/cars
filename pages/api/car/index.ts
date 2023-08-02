import { NextApiRequest, NextApiResponse } from 'next';
import ListCarsUseCase from '../../../useCases/cars/list';
import GetCarByIdUseCase from '../../../useCases/cars/getCarById';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(405).json(GetCarByIdUseCase(req.query.id));
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
