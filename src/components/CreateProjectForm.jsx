import { useState } from "react"
import { useNavigate } from "react-router-dom";
import postProject from "../api/post-projects";
import "./CreateProjectForm.css"

function CreateProjectForm() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState({
      title: "",
      description: "",
      goal: 0,
      image: "",
      is_open: false,
      date_created: new Date().toISOString()
    });
    

    const handleChange = (e) => { setProjectData({ ...projectData, [e.target.id]: e.target.value, }) };
    const handleChecked = (e) => { setProjectData({ ...projectData, [e.target.id]: e.target.checked, }) };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        postProject(projectData)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setIsLoading(false)
            })
    }
     
    if (isLoading) {
        return <p>Loading...</p>;
    }
        

  return (
      <form onSubmit={handleSubmit} className="create-project-form">
        <h1>Create the unique project</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter the project name:"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter the project description:"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="goal">Goal</label>
          <input
            id="goal"
            type="number"
            placeholder="Enter the goal:"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            type="url"
            placeholder="Enter the image-url:"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="is_open">Activate</label>
          <input id="is_open" type="checkbox" onChange={handleChecked}></input>
        </div>
        <input type="submit" value="Submit" className="project-form-btn"></input>
      </form>
  );
}

export default CreateProjectForm;
