
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import NavBar from "../components/NavBar";
import CreatePledge from "../components/CreatePledge";

function OneProjectPage() {
    //here we use a hook that comes for free in react router called`useParams` to get the id from the URL so that we can pass it to our useProject hook;
    const { id } = useParams();
    //useProject returns three pieces of ino, so we need to grab them all here;
    const { project, isLoading, error } = useProject(id);

    if (isLoading) {
        return<p>Loading...</p>
    }

    if (error) {
        return <p>{error.message}</p>
    }
    
    
    return (
        <>
        <NavBar />
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Is_open:${project.is_open}`}</h3>
            <img src={project.image}></img>
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((item, id) => {
                return (
                    <li key={id}>
                        {item.amount} from {item.supporter}
                    </li>
                );
                })}
            </ul>
            <h1>Send a pledge:</h1>
            <CreatePledge projectId={id} />
        </div>
        </>
    );
}

export default OneProjectPage;
