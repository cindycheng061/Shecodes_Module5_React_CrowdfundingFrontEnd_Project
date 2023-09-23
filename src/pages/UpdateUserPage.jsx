import UpdateUserForm from "../components/UpdateUserForm";
import NavBar from "../components/NavBar";
import NavBarTest2 from "../components/NavBarTest2";
import Footer from "../components/Footer";




function UpdateUserPage() {
  const userId = window.localStorage.getItem("userId");
  return (
    <>
      <NavBar />
      <UpdateUserForm userId={userId} />
      <Footer />
    </>
  );
}

export default UpdateUserPage;
