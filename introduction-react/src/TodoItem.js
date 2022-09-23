/* Forma de crear un componente con rafc usando arrow function*/ 
import React from 'react'

export const TodoItem = (props) => {
  return (
    <li className='TodoItem' >
        <span className={'Icon, Icon-check $ {props.complete} '}  >C</span>
        <p>{props.text} </p>
        <span>X</span>
        
    </li>
  );
}

