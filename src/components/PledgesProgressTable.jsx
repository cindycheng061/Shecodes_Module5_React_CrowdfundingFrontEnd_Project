import "./PledgesProgressTable.css"

function PledgesProgressTable(props) {
    // let totalPledges = 0;
  const { project } = props
  // const project = props.project;
    // project.pledges.forEach((item) =>
    // totalPledges+=item.amount)
 const totalPledges = project.pledges.reduce(
   (accumulator, item) => accumulator + item.amount,
   0
 );
    const percentage = ((totalPledges/project.goal)*100).toFixed(2)
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Goal</th>
            <th>Funds Raised</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{project.goal}</td>
            <td>{totalPledges !== null ? totalPledges : 0}</td>
            <td>{percentage}%</td>
          </tr>
          
        </tbody>
      </table>
      <div className="progress-container">
        {/* <h4>Progress: {percentage} %</h4> */}
        <div className="progress-bar" style={{ width: `${percentage}%` }}>
          <span className="progress-label">{percentage}%</span>
        </div>
      </div>
    </>
  );
     
}

export default PledgesProgressTable;