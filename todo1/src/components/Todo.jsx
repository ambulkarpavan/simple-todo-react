import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';
import styles from "./todo.module.css"

const Todo = () => {
   const [todos,setTodos]= useState([]);

   const addTodo=(text) =>{
    setTodos([...todos,{
      id:uuidv4(),
      value:text
    }]);
   };

  return (
    <div className={styles.mainbox}>
       <h2> Todo App</h2>
        <TodoInput addTodo={addTodo}/>
        <TodoList>
        {todos.map((todo) =>{
            return  <TodoItems key={todo.id} value={todo.value} />
          })}
        </TodoList>
         
       
  
    </div>
  )
}

export default Todo