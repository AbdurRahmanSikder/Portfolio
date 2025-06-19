import express from 'express'
import { upload } from '../config/multer.js';
import { addProject, changeComplete, projectDelete, projectList } from '../controller/Project.controller.js';

const project = express.Router();

project.post('/add',upload.single("image"),addProject);
project.get('/list',projectList);
project.get('/delete/:id',projectDelete);
project.post('/status/:id',changeComplete);

export default project;