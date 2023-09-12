import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css"
import ProjectPage from "./ProjectPage";

// function HomePage() {
//     const { projects } = useProjects();
//     return (
//         <div>
//             {projects.map((item, id) => {
//                 return <ProjectCard key={id} projectData={ item } />
//                 })
//             }
//         </div>
//     )
// }

// export default HomePage;

function HomePage() {

    return <ProjectPage />
    
}

export default HomePage;