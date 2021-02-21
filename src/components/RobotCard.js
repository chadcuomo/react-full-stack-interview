import React from 'react';


function RobotCard(props) {

  const { name } = props.details;
  const index = props.index
  
  return (
    <div className='robot-card-container'>
      <div>
        <img alt='robots' src={`https://robohash.org/${name}`} />
        <h3>{name}</h3>
        <button onClick={() => props.openModal(index)}>More Details</button>
        <button className="battle" onClick={() => props.addToBattle(index)}> Battle! </button>
        <button className="delete" onClick={() => props.deleteRobot(index)}> Delete Robot! </button>
      </div>
    </div>
  );
}

export default RobotCard;