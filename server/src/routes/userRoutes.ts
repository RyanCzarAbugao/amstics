import { Router } from 'express';
import userController from '../controllers/userController'; 

const router = Router();

 /**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/', userController.getUsers);
router.post('/', userController.setUsers);
router.put('/:id', userController.updateUsers);
router.delete('/:id', userController.deleteUsers);

export default router;