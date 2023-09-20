import UpdateProjectForm from "../components/UpdateProjectForm";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function UpdateProjectPage() {
    const { projectId } = useParams();
  return (
    <>
      <NavBar />
      <UpdateProjectForm projectId={projectId} />
    </>
  );
}

export default UpdateProjectPage;
