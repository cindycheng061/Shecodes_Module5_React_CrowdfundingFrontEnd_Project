import { useState, useEffect } from "react";
import getUsers from "../api/get-users";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  //useEffect hook: fetch projects by API, update the state variables accordingly.
  //useEffect only run once, when the component this hook is used in is mounted.
  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return { users, isLoading, error };
}

export default useUsers;
