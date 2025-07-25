// File name: contextApi.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        const fetchProjects = async () => {
           const {data} = await axios.get('/project/list');
           setProjects(data.project);
        }
        fetchProjects();

    },[])

    const value = { axios, navigate, projects, setProjects };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// ✅ 4. Custom hook
export const useAppContext = () => useContext(AppContext);
