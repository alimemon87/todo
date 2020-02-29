import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';

function App(){
  const [todos, setTodos] = useState([
    { 
      text: 'Starting React',
      isCompleted: false
    },
    { 
      text: 'Planning the App',
      isCompleted: false
    },
    { 
      text: 'Developing an App',
      isCompleted: false
    }
  ]);

  const addTodo= text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
        <div className="todo-list">
           {
             todos.map((todo,index)=> (
                <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
             ))
           }
           <TodoForm addTodo={addTodo} />
        </div>
    </div>
  )
}

export default App;