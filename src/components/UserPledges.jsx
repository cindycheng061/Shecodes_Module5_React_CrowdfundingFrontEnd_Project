import { useEffect, useState } from "react";
import getUserPledges from "../api/get-userpledges";

function UserPledges() {
  const [pledges, setPledges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 在组件加载时获取用户项目数据
    getUserPledges()
      .then((data) => {
        setPledges(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // 空依赖数组表示只在组件加载时执行一次

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>User's Pledges</h2>
      <ul>
        {pledges.map((item, key) => (
          <li key={key}>
            Project: {item.project}
            <br />
            Amount: {item.amount}
            <br />
            Comment: {item.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPledges;
