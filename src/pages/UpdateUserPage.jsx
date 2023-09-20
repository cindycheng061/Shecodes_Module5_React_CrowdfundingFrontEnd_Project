import UpdateUserForm from "../components/UpdateUserForm";
import NavBar from "../components/NavBar";
import NavBarTest2 from "../components/NavBarTest2";




function UpdateUserPage() {
  const userId = window.localStorage.getItem("userId");
  return (
    <>
      <NavBar />
      <UpdateUserForm userId={ userId } />
    </>
  );
}

export default UpdateUserPage;
