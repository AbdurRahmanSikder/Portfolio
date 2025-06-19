import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {type: String , required: true},
    description: {type: Array , required: true},
    url: {type: String, required: true},
    image: {type: String, required: true},
    technologies: {type: Array, required: true},
    isComplete: {type: Boolean, default:true}
},{timestamps: true});

const Project = mongoose.models.project || mongoose.model("project" , projectSchema);

export default Project;
