import Project from "../model/Project.model.js";
import { v2 as cloudinary } from "cloudinary"

export const addProject = async (req, res) => {
    try {
        let projectData = JSON.parse(req.body.projectData);
        console.log(req.file,projectData);
        const image = req.file;
        const imageUrl = await cloudinary.uploader.upload(image.path , {resource_type: 'image'});

        const newProject = await Project.create({
            ...projectData,image:imageUrl.secure_url
        })
        await newProject.save();
        return res.json({success: true , message: "project uploaded", newProject});
    }
    catch (error) {
        console.log(error);
        return res.json({success: false , error: error.message});
    }
}

export const projectList = async (req,res) => {
    try {
        const project = await Project.find({});
        return res.json({success: true, message: "All Project" , project});
    }
    catch (error) {
        return res.json({success: false, message: error.message});
    }
}

export const changeComplete = async (req,res) => {
    try {
        const {changeComplete} = req.body;
        const {id} = req.params;
        const data =  await Project.findByIdAndUpdate(id, {isComplete:changeComplete},{new:true});
        return res.json({success: true, message: "Upated project status" });
    }
    catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message});
    }
}

export const projectDelete = async (req,res) => {
    try {
        const {id} = req.params;
        const data =  await Project.findByIdAndDelete(id);
        return res.json({success: true, message: "Deleted project successfully" });
    }
    catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message});
    }
}