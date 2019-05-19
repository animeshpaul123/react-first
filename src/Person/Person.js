import React from 'react'
import './Person.css'
const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}>I am {props.name} and {props.age} old</h1>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
}
export default person