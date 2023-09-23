import { useEffect, useState } from "react";
import getUserPledges from "../api/get-userpledges";
import "./UserPledges.css"

function UserPledges() {
  const [pledges, setPledges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // get user data when component loading
    getUserPledges()
      .then((data) => {
        setPledges(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // dependent data is null, so only loading once

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // return (
  //   <div>
  //     <h2>User's Pledges</h2>
  //     <ul>
  //       {pledges.map((item, key) => (
  //         <li key={key}>
  //           Project: {item.project}
  //           <br />
  //           Amount: {item.amount}
  //           <br />
  //           Comment: {item.comment}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
   return (
     <div className="user-pledges-container">
       <h2>User's Pledges</h2>
       {pledges.length > 0 ? (
         <div className="user-pledges-info">
           <ul>
           {pledges.map((item, key) => (
             <li key={key}>
               For Project: {item.project}
               <br />
               Amount: {item.amount}
               <br />
               Comment: {item.comment}
             </li>
           ))}
         </ul>
         </div>
         
       ) : (
         <h3>You don't have any pledges.</h3>
       )}
     </div>
   );
}
  

export default UserPledges;
