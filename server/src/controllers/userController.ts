import expressAsyncHandler from "express-async-handler";
import User from '../db/models/userModel';

class UserController {
  /**
 * @swagger
 * /users:
 *   get:
*     tags: 
*       - User
 *     summary: Retrieve a list of users
 *     description: Retrieves a list of users including teachers and 
*/
  public getUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  });

  /**
* @swagger
* /users:
*   post:
*     tags: 
*       - User
*     summary: 
*     description: 
*/
  public setUsers = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: "set users" });
  });

  /**
* @swagger
* /users:
*   put:
*     tags: 
*       - User
*     summary: 
*     description: 
*/
  public updateUsers = expressAsyncHandler(async (req, res) => {
    console.log(req.body);

    res.status(200).json({ message: `update users ${req.params.id}` });
  });

  /**
* @swagger
* /users:
*   delete:
*     tags: 
*       - User
*     summary: 
*     description:
*/
  public deleteUsers = expressAsyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete users ${req.params.id}` });
  });
}

export default new UserController();