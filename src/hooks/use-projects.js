import { useState, useEffect } from "react";
import getProjects from "../api/get-projects";

function useProjects() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    //useEffect hook: fetch projects by API, update the state variables accordingly.
    //useEffect only run once, when the component this hook is used in is mounted.
    useEffect(() => {
        getProjects()
            .then((projects) => {
                setProjects(projects);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            })
    },[])
    return {projects, isLoading, error}
}

export default useProjects;