import React, { useState } from 'react';
import './app.css'


function Todo({ key, index, todo, completeTodo, removeTodo }){
    return(
      <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className='todo'>
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>X</button>
        </div>
      </div>
    )
}

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      if(!value)  return;
      addTodo(value)
      setValue('')
    }

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" className='input' value={value} placeholder="Add Todo..." onChange={e => setValue(e.target.value)} />
      </form>
    )
}

function App(){
    const [todos, setTodos] = useState([
      {
        text: "Learn React Hooks",
        isCompleted: false
      },
      {
        text: "Go to School",
        isCompleted: false
      },
      {
        text: "Lunch with Ray",
        isCompleted: false
      }
    ])

    const addTodo = text => {
      const newTodos = [...todos, {text}]
      setTodos(newTodos)
    }

    const completeTodo = index => {
      const newTodos = [...todos,];
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    }

    const removeTodo = index => {
      const newTodos = [...todos,];
      newTodos.splice(index, 1);
      setTodos(newTodos)
    }

    return(
      <div className='app'>
        <h1>Lite React To-Do</h1>
        <div className='todo-list'>
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    )
}

export default App;
