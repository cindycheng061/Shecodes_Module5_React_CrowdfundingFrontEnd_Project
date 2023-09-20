import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postPledge from '../api/post-pledges';
import "./CreatePledge.css"


function CreatePledge(props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [pledgeData, setPledgeData] = useState({
    project: props.projectId,
    amount: 0,
    comment: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    setPledgeData({
      ...pledgeData,
      [e.target.id]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setPledgeData({
      ...pledgeData,
      [e.target.id]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    postPledge(pledgeData)
      .then(() => {
        navigate(0);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='create-pledge-form'>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter the amount"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          placeholder="Enter a comment"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="anonymous">Anonymous Pledge</label>
        <input type="checkbox" id="anonymous" onChange={handleChecked} />
      </div>
      <input type="submit" value="Pledge" className='pledge-form-btn' />
    </form>
  );
}

export default CreatePledge;