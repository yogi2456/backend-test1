import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from "./Routes/index.js";


const app = express();

dotenv.config();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', router)

mongoose.connect(process.env.MONGOURL).then(() => console.log("database connected.."));


app.listen(8000, () => console.log("App is running on port"))