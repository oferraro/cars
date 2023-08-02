import { deleteCarById } from "../../models/cars";

const DeleteCarUseCase = async (id: number) => {
    try {
        const result = await deleteCarById(id);
  
        return { message: 'Car deleted successfully', result };
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the car' });
    }
}

export default DeleteCarUseCase;
