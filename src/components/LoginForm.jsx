import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login";

function LoginForm() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password:"",
    })
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]:value,
        }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(credentials.username,credentials.password).then((response) => {
                // console.log(response);
                window.localStorage.setItem("token", response.token);
                navigate("/");
            })
        }
    }
    return (
      <>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
      </>
    );
}

export default LoginForm;


