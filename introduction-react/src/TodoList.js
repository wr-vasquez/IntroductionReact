import React from "react";
import './styles/search.css';


function TodoList(props){

    return(
       <section>
        <ul>
            {props.children}
        </ul>
       </section>

    );
}

export {TodoList};