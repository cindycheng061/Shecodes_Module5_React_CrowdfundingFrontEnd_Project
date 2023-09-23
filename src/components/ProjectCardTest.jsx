import { Link } from "react-router-dom";
import "./ProjectCard.css";
import PledgesProgressTable from "./PledgesProgressTable";
import useProject from "../hooks/use-project";

function ProjectCardTest(props) {
  const { projectData } = props;
  const projectLink = `/project/${projectData.id}`;
const { project, isLoading, error } = useProject(projectData.id)
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
  return (
    <div className="project-card-test">
      <Link to={projectLink}>
        <img src={project.image}></img>
        <h3>{project.title}</h3>
      </Link>
      <div>
        <PledgesProgressTable project={project} />
      </div>
    </div>
  );
}

export default ProjectCardTest;
