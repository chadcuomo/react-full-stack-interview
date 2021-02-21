import React from 'react';


function RobotDetailsCard(props) {
  
  const { name, color, attack, defense, health } = props.details;
  
  return (
    <div className='robot-details-container'>
      <div>
        <img alt='robots' src={`https://robohash.org/${name}`} />
        <h3>{name}</h3>
        <p>Color: <span style={{color: `${color}`}}>{color}</span></p>
        <p>Attack: <span style={{color: `red`}}>{attack}</span></p>
        <p>Defense: <span style={{color: `yellow`}}>{defense}</span></p>
        <p>Health: <span style={{color: `green`}}>{health}</span></p>
        <button onClick={() =>props.closeModal(props.index)}> Close </button>
      </div>
    </div>
  );
}

export default RobotDetailsCard;