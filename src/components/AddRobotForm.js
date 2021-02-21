import React from "react";


function AddRobotForm(props) {
    // creating references for the data of form
    const nameRef = React.createRef();
    const colorRef = React.createRef();
    const attackRef = React.createRef(); 
    const defenseRef = React.createRef(); 
    const healthRef = React.createRef();   
    

    
    
    function createRobot(e) {
        e.preventDefault();
        const newRobot = {
            name: nameRef.current.value,
            color: colorRef.current.value,
            attack: parseInt(attackRef.current.value),
            defense: parseInt(defenseRef.current.value),
            health: parseInt(healthRef.current.value),
        };
        props.addRobot(newRobot);
        e.currentTarget.reset();
    };
    
   

    return (
        <form className="robot-edit" onSubmit={createRobot}>
            <input name="name" ref={nameRef} type="text" placeholder="Name" />
            <input name="color" ref={colorRef} type="text" placeholder="Color" />
            <input name="attack" ref={attackRef} type="number" placeholder="Attack" />
            <input name="defense" ref={defenseRef} type="number" placeholder="Defense" />
            <input name="health" ref={healthRef} type="number" placeholder="Health" />
            <div className="button-container">
                <button className="battle" type="submit">+ Create Robot</button>
            </div>
            
        </form>
        );
    
}

export default AddRobotForm;