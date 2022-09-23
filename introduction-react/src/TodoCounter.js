import React from "react";
import '../src/styles/search.css'

function TodoCounter(){
    return(
        /**Este es una forma de agragar estilos en linea */
        <h2 /* style={
            {color: 'red',
            backgroundColor: 'green'
            
        }
        } */ className="TodoCounter">Has completado 2 de 3</h2>

    );
}

/*export default TodoCounter; Forma defaul*/
export {TodoCounter};
