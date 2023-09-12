import { useState, useEffect } from "react";
import getProject from "../api/get-project";


function useProject(projectId) {
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        //here pass the projectId to the getProject function
        //this time pass the projectId to the dependency array so that the hook will rerun if the projectId changes
        getProject(projectId)
            .then((project) => {
                setProject(project);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            }, [projectId]);
    })
    
    return { project, isLoading, error };
}

export default useProject;