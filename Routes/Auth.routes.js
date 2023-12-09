import { Router } from "express";
import { Create, DeleteUser } from "../Controllers/Auth.controllers.js";
import { checkUser } from "../Middlewares/Allmiddlewares.js";

const router = Router();

router.post('/create', checkUser, Create)
router.post('/delete', DeleteUser)


export default router;