import React from 'react'
import { useAppContext } from '../contextApi/contextApi';
import { MdDelete } from "react-icons/md";

const ProjectList = () => {
    const { projects, axios } = useAppContext();

    const update = async (id, isComplete) => {
        try {

            const { data } = await axios.post(`/project/status/${id}`, { changeComplete: !isComplete });
            if (data.success) {
                console.log(data.message);
            }
            else {
                console.log(data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const deleteProject = async (id) => {
        try {

            const { data } = await axios.get(`/project/delete/${id}`);
            if (data.success) {
                console.log(data.message);
            }
            else {
                console.log(data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Projects</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Project</th>
                                {/* <th className="px-4 py-3 font-semibold truncate">Edit</th> */}
                                <th className="px-4 py-3 font-semibold ">Delete</th>
                                <th className="px-4 py-3 font-semibold truncate">Complete</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {projects.map((project, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={project.image} alt="Product" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{project.title}</span>
                                    </td>
                                    {/* <td className="px-4 py-3">x</td> */}
                                    <td className="px-4 py-3 text-4xl text-blue-600 hover:text-blue-700 cursor-pointer" onClick={()=>deleteProject(project._id)}><MdDelete /></td>
                                    <td className="px-4 py-3">
                                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                            <input onClick={() => update(project._id , project.isComplete)} type="checkbox" className="sr-only peer" defaultChecked={project.isComplete} />
                                            <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div >
    );
};
export default ProjectList