import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    //We are creating a custom error 
    //When we toggle our component we actually have a chance of getting an error
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went wrong !');
    }
    
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Radium(person);