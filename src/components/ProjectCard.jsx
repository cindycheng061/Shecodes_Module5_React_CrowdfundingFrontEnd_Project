import { Link } from "react-router-dom";
import "./ProjectCard.css"
import PledgesProgressTable from "./PledgesProgressTable";
import useProject from "../hooks/use-project";

function ProjectCard(props) {
    const { projectData } = props
    const projectLink = `/project/${projectData.id}`;
    const { project, isLoading, error } = useProject(projectData.id);
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    return (
      <div className="project-card-container">
        <div className="project-card">
          <Link to={projectLink}>
            <img src={projectData.image}></img>
            <h3>{projectData.title}</h3>
            {/* <h3>{projectData.id}</h3> */}
          </Link>
          <p>
            Created at: {new Date(project.date_created).toLocaleDateString()}
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {project.is_open ? "Active" : "Inactive"}
          </p>
          <div>
            <PledgesProgressTable project={project} />
          </div>
        </div>
      </div>
    );
}

export default ProjectCard;


