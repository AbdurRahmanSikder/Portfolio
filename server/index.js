import express from "express";
import connectDB from "./config/db.js";
import cors from 'cors'
import 'dotenv/config';
import project from "./route/Project.route.js";
import connectCloudinary from "./config/cloudinary.js";
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const originAllowed = ['http://localhost:5173'];

app.use(cors({
    origin: originAllowed,
    credentials: true
}));
await connectDB();
await connectCloudinary();
app.get('/', (req,res) => {res.send("Api is Working")});
app.use('/project',project);

app.listen(port,  ()=> console.log(`server running on port http://localhost:${port}`));

