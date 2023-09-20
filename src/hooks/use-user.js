// import { useState, useEffect } from "react";
// import getUser from "../api/get-user";

// function useUser(userId) {
//   const [user, setUser] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState();

//   useEffect(() => {
//     //here pass the userId to the getUser function
//     //this time pass the userId to the dependency array so that the hook will rerun if the userId changes
//     getUser(userId)
//       .then((user) => {
//         setUser(user);
//         setIsLoading(false);
//       })
//       .catch(
//         (error) => {
//           setError(error);
//           setIsLoading(false);
//         },
//         [userId]
//       );
//   });

//   return { user, isLoading, error };
// }

// export default useUser;

import { useState, useEffect } from "react";
import getUser from "../api/get-user";

function useUser(userId) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true); // set isLoading to true and begin loading.
    //here pass the userId to the getUser function
    //this time pass the userId to the dependency array so that the hook will rerun if the userId changes
    getUser(userId)
      .then((user) => {
        setUser(user);
        setIsLoading(false); // after loading successfully, set isLoading to  false
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false); // after not loading successfully, stills set isLaoding to false
      });
  }, [userId]); // when userId changes, React will run useEffect() again

  return { user, isLoading, error };
}

export default useUser;



