// import { useEffect, useState } from "react";
// import getUserProjects from "../api/get-userprojects";
// import ProjectCard from "./ProjectCard";
// function UserProjects() {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // 在组件加载时获取用户项目数据
//     getUserProjects()
//       .then((data) => {
//         setProjects(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []); // 空依赖数组表示只在组件加载时执行一次

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h2>User's Projects</h2>
//       <div>
//         {projects.map((item,key) => {
//              return <ProjectCard key={key} projectData={item} />
//            })}
//       </div>
       
  
//     </div>
//   );
// }
// export default UserProjects;





// import { useEffect, useState } from "react";
// import getUserProjects from "../api/get-userprojects";
// import ProjectCard from "./ProjectCard";
// import "./UserProjects.css";
// import deleteProject from "../api/delete-project";
// function UserProjects() {
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleDelete = (projectId) => {
//     // Disable the delete button when it's clicked
//     const deleteButton = document.getElementById(`deleteButton_${projectId}`);
//     if (deleteButton) {
//       deleteButton.setAttribute("disabled", "true");
//     }

//     deleteProject(projectId)
//       .then(() => {
//         // Successfully deleted, update the UI accordingly
//         setProjects((prevProjects) =>
//           prevProjects.filter((project) => project.id !== projectId)
//         );
//       })
//       .catch((err) => {
//         console.error(`Error deleting project with ID ${projectId}: ${err}`);
//       });
//   };

//   useEffect(() => {
//     getUserProjects()
//       .then((data) => {
//         setProjects(data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError(err);
//         setIsLoading(false);
//       });
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <div>
//       <h2>User's Projects</h2>
//       <div className="user-projects-container">
//         {projects.map((item) => {
//           const projectId = item.id;
//           return (
//             <div key={projectId}>
//               <ProjectCard projectData={item} />
//               <button
//                 id={`deleteButton_${projectId}`}
//                 onClick={() => handleDelete(projectId)}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
// export default UserProjects;


import { useEffect, useState } from "react";
import getUserProjects from "../api/get-userprojects";
import ProjectCard from "./ProjectCard";
import "./UserProjects.css";
import deleteProject from "../api/delete-project";
import { Link } from "react-router-dom";
import UpdateProjectPage from "../pages/UpdateProjectPage";

function UserProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleDelete = (projectId, e) => {
    e.preventDefault();

    // Disable the delete button
    e.target.setAttribute("disabled", "true");

    deleteProject(projectId)
      .then(() => {
        // Successfully deleted, update the UI accordingly
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project.id !== projectId)
        );
      })
      .catch((err) => {
        console.error(`Error deleting project with ID ${projectId}: ${err}`);
      });
  };

  useEffect(() => {
    getUserProjects()
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>User's Projects</h2>
      <div className="user-projects-container">
        {projects.map((item) => {
          const projectId = item.id;
          return (
            <div key={projectId}>
              <ProjectCard projectData={item} />
              <button onClick={(e) => handleDelete(projectId, e)}>
                Delete
              </button>
              <Link to={`/project/${projectId}/update`}>
                <button>Edit</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserProjects;
