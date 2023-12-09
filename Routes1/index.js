import { Router } from "express";
import Authroutes from '../Routes1/Auth.routes.js'


const router = Router();


router.use("/auth", Authroutes)



export default router;