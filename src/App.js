import React, { useState, useEffect } from 'react';
import RobotCard from './components/RobotCard';
import BattlebotCard from './components/BattlebotCard';
import RobotDetailsCard from './components/RobotDetailsCard';
import robots from './sampleRobot';
import './App.css';
import AddRobotForm from './components/AddRobotForm';
import Modal from 'react-modal';

function App() {
  const sampleRobot = robots

  const initialRobots = () => JSON.parse(window.localStorage.getItem('robots')) || sampleRobot;

  const [robot, setRobot] = useState(initialRobots);

  const [singleRobot, setSingleRobot] = useState({});

  const [battleBot, setBattleBot] = useState({})

  function addToBattle(key) {
    const battleBotCopy = { ...battleBot };
    battleBotCopy[key] = key;
    if(Object.keys(battleBot).length < 2) {
      setBattleBot(battleBotCopy);
    }
  }

 
  
  function addRobot(robots) {
    const robot2 = { ...robot };
    robot2[`robot${Date.now()}`] = robots;
    setRobot(robot2)
  }

  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal(key) {
    const singleRobotCopy = { ...singleRobot };
    singleRobotCopy[key] = key;
    setSingleRobot(singleRobotCopy);
    setIsOpen(true);
  }

  function closeModal(key) {
    const singleRobotCopy = { ...singleRobot };
    delete singleRobotCopy[key];
    setSingleRobot(singleRobotCopy)
    setIsOpen(false);
  }

  function deleteRobot(key) {
    const robotCopy = { ...robot };
    delete robotCopy[key]
    setRobot(robotCopy);
  }

  useEffect(() => {
    window.localStorage.setItem('robots', JSON.stringify(robot));
  }, [robot])

  

  return (
    <div className='App'>
      <h1>BATTLE BOTS</h1>
      <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}>
        {Object.keys(singleRobot).map(key =>
          <RobotDetailsCard
            key={key}
            index={key}
            details={robot[key]}
            robots={robot}
            closeModal={closeModal}
            deleteRobot={deleteRobot}
          />
        )}
      </Modal>
      <ul className="robot-cards">
        {Object.keys(robot).map(key =>
          <RobotCard
          key={key}
          index={key}
          details={robot[key]}
          openModal={openModal}
          deleteRobot={deleteRobot}
          addToBattle={addToBattle}
          />
          )}
      </ul>
      <AddRobotForm
      addRobot={addRobot}
      />
      <div className="battle-container">
        <h1>BATTLE ARENA</h1>
        <ul className="robot-cards">
        {Object.keys(battleBot).map(key =>
          <BattlebotCard
          key={key}
          index={key}
          details={robot[key]}
          />
          )}
      </ul>
      </div>
    </div>
  );
}

export default App;
