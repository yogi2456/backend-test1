import { Router } from "express";
import Authroutes from '../Routes/Auth.routes.js';


const router = Router();

// router.use("/auth", Authroutes)
router.use("/auth", Authroutes)



export default router;