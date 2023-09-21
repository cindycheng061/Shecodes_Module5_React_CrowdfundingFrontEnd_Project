import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import ProjectCardTest from "../components/ProjectCardTest";
import "./ProjectPage.css";
import NavBar from "../components/NavBar";
import NavBarTest2 from "../components/NavBarTest2";




function ProjectPage() {
  const { projects, isLoading,error } = useProjects();
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    return (
      <div>
        <NavBar />
        <div id="project-list">
          {projects.map((item, key) => {
            // console.log(item);
            return <ProjectCard key={key} projectData={item} />
            
          })}
          
        </div>
      </div>
    );
}

export default ProjectPage;













