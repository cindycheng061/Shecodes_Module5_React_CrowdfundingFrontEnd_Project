import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./ProjectPage.css";
import { oneProject } from "../data";
import NavBar from "../components/NavBar";

function ProjectPage() {
    const { projects } = useProjects();
    return (
      <>
        <NavBar />
        <div id="project-list">
          {projects.map((item, key) => {
            return <ProjectCard key={key} projectData={item} />;
          })}
        </div>
      </>
    );
}

export default ProjectPage;
