import { NextApiRequest, NextApiResponse } from 'next';
import DeleteCarUseCase from '../../../useCases/cars/delete';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    return res.status(200).json(DeleteCarUseCase(parseInt(req.query.id as string)));
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
