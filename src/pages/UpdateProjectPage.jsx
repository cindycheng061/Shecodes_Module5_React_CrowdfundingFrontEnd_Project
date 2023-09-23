import UpdateProjectForm from "../components/UpdateProjectForm";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function UpdateProjectPage() {
    const { projectId } = useParams();
  return (
    <>
      <NavBar />
      <UpdateProjectForm projectId={projectId} />
      <Footer />
    </>
  );
}

export default UpdateProjectPage;
