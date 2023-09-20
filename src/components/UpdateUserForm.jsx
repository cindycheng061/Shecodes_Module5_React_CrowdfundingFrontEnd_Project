import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import updateUser from "../api/update-user";
import getUser from "../api/get-user"; // import getUser to get user data
import "./UpdateUserForm.css"


function UpdateUserForm({ userId }) {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    getUser(userId) // get userdata from backend
      .then((user) => {
        setUserData({
          first_name: user.first_name || "",
          last_name: user.last_name || "",
          email: user.email || "",
          username: user.username || "",
          password: user.password || "",
        });
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    updateUser(userData, userId)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <form className="update-user-form-container" onSubmit={handleSubmit}>
      <h1>Update your account</h1>
      <div>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          placeholder="First Name"
          value={userData.first_name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          placeholder="Last Name"
          value={userData.last_name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          value={userData.email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
      </div>
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default UpdateUserForm;






