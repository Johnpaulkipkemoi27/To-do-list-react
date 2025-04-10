import React from 'react'
import Button from './Button'
import Input from './Input'
import { useState } from 'react';

const TaskItem = ({task, setTodos, todos}) => {
    const[todo, setTodo] = useState(task);

    function handleChange() {
        setTodo({...todo, completed: !todo.completed}) };

    function handleClick(id) {
        console.log(id);
        console.log(todos);

        setTodos(todos.filter((todo) => todo.id !== id));


            
    }
  return (
    <div className='task'
        style={{opacity: task.completed ? '0.5' : '1',}}>
        <input
            type="checkbox" 
            className="checkbox"  
            checked={todo.completed}
            onChange={handleChange}
            value={todo.completed}
        />
        <span style={{textDecoration: todo.completed === true? 'line-through' : 'none'}}
        >{todo.title}</span>
        <Button buttonClass='delete-button' onClick={() => handleClick(todo.id)}>
            <i className="fas fa-trash"></i>
        </Button>
      
    </div>
  )
}

export default TaskItem;
