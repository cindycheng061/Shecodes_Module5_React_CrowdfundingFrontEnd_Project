import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import updateProject from "../api/update-project";
import getProject from "../api/get-project";
import "./UpdateProjectForm.css"


function UpdateProjectForm({ projectId }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    image: "",
    goal: "",
    is_open: "",
  });

  useEffect(() => {
    getProject(projectId) //
      .then((project) => {
        setProjectData({
          title: project.title || "",
          description: project.description || "",
          image: project.image || "",
          goal: project.goal || "",
          is_open: project.is_open || "",
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [projectId]);

  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.id]: e.target.value });
  };
const handleChecked = (e) => {
  setProjectData({ ...projectData, [e.target.id]: e.target.checked });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateProject(projectData, projectId)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form className="update-project-form-container" onSubmit={handleSubmit}>
      <h1>Update your project</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={projectData.title}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={projectData.description}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={projectData.image}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="goal">Goal</label>
        <input
          type="number"
          id="goal"
          value={projectData.goal}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="is_open">Activate</label>
              <input id="is_open" type="checkbox" checked={projectData.is_open } onChange={handleChecked}></input>
      </div>
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default UpdateProjectForm;
