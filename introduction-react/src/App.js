import React from 'react';
import './App.css';
/*import Clase from './TodoCounter'; Esta es una forma de importar con default el componente*/
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const todos =[
  { text: 'Aprende a Programar', completed:false},
  { text: 'Tomar el curso de React', completed:false},
  { text: 'Gritar de Alegria', completed:false}
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
    
    <TodoSearch />
    <input placeholder ="Datos" />

    <TodoList> 
        {/* Se crea una arrow function para recorrer o mapear los datos de un array */}
      {todos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} /> /*Con el key identificamos lso todos */

        ))}
    
    </TodoList>

    <CreateTodoButton>
      <button></button>
    </CreateTodoButton>
    
    </React.Fragment>
    
    
  );
}

export default App;
