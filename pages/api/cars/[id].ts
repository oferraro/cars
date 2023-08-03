import { NextApiRequest, NextApiResponse } from 'next';
import DeleteCarUseCase from '../../../useCases/cars/delete';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') { // TODO: Add response from DeleteCarUseCase for the case of not found and return 404
    return res.status(200).json(DeleteCarUseCase(parseInt(req.query.id as string)));
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
