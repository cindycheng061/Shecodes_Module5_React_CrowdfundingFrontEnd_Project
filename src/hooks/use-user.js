import { useState, useEffect } from "react";
import getUser from "../api/get-user";

function useUser(userId) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    //here pass the projectId to the getProject function
    //this time pass the projectId to the dependency array so that the hook will rerun if the projectId changes
    getUser(userId)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch(
        (error) => {
          setError(error);
          setIsLoading(false);
        },
        [userId]
      );
  });

  return { user, isLoading, error };
}

export default useUser;
