import React, { useState } from 'react';
import upload_area from '../assets/upload_area.png';
import { useAppContext } from '../contextApi/contextApi.jsx';


const AddProject = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [image, setImage] = useState(null);

  const techOptions = ['MongoDB', 'Express', 'React', 'NodeJS', 'TailwindCSS', 'NextJS'];

  const { axios, navigate, projects, setProjects } = useAppContext();

  const handleTechToggle = (tech) => {
    setTechnologies((prev) =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select a project image.");
      return;
    }

    try {
      const projectData = {
        title:name,
        url,
        description: description.split('\n'),
        technologies,
      };

      const formData = new FormData();
      formData.append('projectData', JSON.stringify(projectData));
      formData.append('image', image);

      const { data } = await axios.post('/project/add', formData);
      console.log(data);
      if (data.success) {
        setProjects([...projects, data.project]);
        setName('');
        setUrl('');
        setDescription('');
        setTechnologies([]);
        setImage(null);
      } else {
        console.log(data.message);
      }

      navigate('/admin');
    } catch (error) {
      console.log(error.message || 'Something went wrong');
    }
  };

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <form onSubmit={onSubmitHandler} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium mb-4">Project Image</p>
          <label htmlFor="project-image">
            <input
              accept="image/*"
              type="file"
              id="project-image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              className="max-w-24 cursor-pointer"
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="upload"
              width={100}
              height={100}
            />
          </label>
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="project-name">Project Name</label>
          <input
            id="project-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="project-url">Project Link</label>
          <input
            id="project-url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://github.com/..."
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="project-description">Project Description</label>
          <textarea
            id="project-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        <label className="text-base font-medium">Technologies</label>
        <div className="flex flex-wrap gap-4 mt-2">
          {techOptions.map((tech, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={tech}
                checked={technologies.includes(tech)}
                onChange={() => handleTechToggle(tech)}
                className="accent-indigo-500 cursor-pointer"
              />
              <span>{tech}</span>
            </label>
          ))}
        </div>

        <button type="submit" className="px-8 py-2.5 bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white font-medium rounded">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProject;
