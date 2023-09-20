import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postUsers from "../api/post-users";
import "./CreateUserForm.css"


function CreateUserForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fist_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    postUsers(userData)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setIsLoading(false)
      })
  }
  
  if (isLoading) {
    return<p>Loading...</p>
  }
  return (
      
        <form onSubmit={handleSubmit} className="create-user-form">
          <h1>Create an account</h1>
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              placeholder="First Name"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              placeholder="Last Name"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            ></input>
          </div>
          <input type="submit" value="Submit" className="user-form-btn"></input>
        </form>
  );
}

export default CreateUserForm;