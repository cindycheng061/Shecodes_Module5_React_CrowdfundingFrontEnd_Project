
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import NavBarTest2 from "../components/NavBarTest2";
import useUser from "../hooks/use-user";
import { Link } from "react-router-dom";
import UserProjects from "../components/UserProjects";
import UserPledges from "../components/UserPledges";
import "./UserPage.css"
import Footer from "../components/Footer";



function UserPage() {
  // Get userId from local storage
  const userId = window.localStorage.getItem("userId");
  const { user, isLoading, error } = useUser(userId);



  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <NavBar />
      <div className="user-page-container">
        <h1>Welcome {user.username}</h1>
        <h3>First Name: {user.first_name}</h3>
        <h3>Last Name: {user.last_name}</h3>
        <h3>Email: {user.email}</h3>
        <Link to="/user/update">
          <button className="user-page-btn">Update</button>
        </Link>
      </div>
      <UserProjects />
      <UserPledges />
      <Footer />
    </>
  );
}

export default UserPage;
