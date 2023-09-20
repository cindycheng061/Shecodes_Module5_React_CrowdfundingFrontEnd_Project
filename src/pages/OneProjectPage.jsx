
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import NavBar from "../components/NavBar";
import NavBarTest2 from "../components/NavBarTest2";
import CreatePledge from "../components/CreatePledge";
import "./OneProjectPage.css"
import PledgesProgressTable from "../components/PledgesProgressTable";

function OneProjectPage() {
  //here we use a hook that comes for free in react router called`useParams` to get the id from the URL so that we can pass it to our useProject hook;
  const { id } = useParams();
  //useProject returns three pieces of ino, so we need to grab them all here;
  
  const {
    project,
    isLoading: projectIsLoading,
    error: projectError,
  } = useProject(id);
  
  

  if (projectIsLoading) {
    return <p>Loading...</p>;
  }

  if (projectError) {
    return <p>{error.message}</p>;
  }
 
 

  
  return (
    <>
      <NavBar />
      <div className="one-project-page-container">
        <h1>{project.title}</h1>
        <div className="one-project-image-container">
          <img src={project.image}></img>
        </div>

        <div className="one-project-info">
          {/* <h4>Created at: {project.date_created}</h4> */}
          <h3>
            Created at: {new Date(project.date_created).toLocaleDateString()}
          </h3>
          {/* can't realise get username based on project owner, error-multi hooks */}
          {/* <h3>Created by: { user.username}</h3> */}

          {/* <h4>{`Is_open:${project.is_open}`}</h4> */}
          <h3 className="separator">|</h3>
          <h3>{project.is_open ? "Activate" : "Not Activate"}</h3>
        </div>
        <div>
          <PledgesProgressTable project={project} />
        </div>

        <p>{project.description}</p>
        <div className="comments-container">
          <h1>Comments:</h1>
          <ul>
          {project.pledges.map((item, id) => {
            return (
              <div key={id}>
                {/* <li>Supporter: {item.supporter}</li>
                <li>Amount: {item.amount}</li> */}
                <li> {item.comment}</li>
              </div>
            );
          })}
        </ul>
        </div>
        {/* <h3>Pledges:</h3> */}
        
        <div className="pledge-container">
          <h1>Send a pledge:</h1>
          <CreatePledge projectId={id} />
        </div>
        
      </div>
    </>
  );
}

export default OneProjectPage;







