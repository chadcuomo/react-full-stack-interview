import React from 'react';


function BattlebotCard(props) {

  const { name, attack, defense, health } = props.details;
  
  return (
    <div className='robot-card-container'>
      <div>
        <img alt='robots' src={`https://robohash.org/${name}`} />
        <h3>{name}</h3>
        <p>Attack: <span style={{color: `red`}}>{attack}</span></p>
        <p>Defense: <span style={{color: `yellow`}}>{defense}</span></p>
        <p>Health: <span style={{color: `green`}}>{health}</span></p>
      </div>
    </div>
  );
}

export default BattlebotCard;