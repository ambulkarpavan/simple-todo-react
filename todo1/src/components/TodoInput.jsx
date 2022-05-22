import React, { useState } from 'react'

import styles from "./todo.module.css"


const TodoInput = ({addTodo}) => {
    const[value,setValue]= useState("")
  return (
    <div>
        <input className={styles.input}
         type="text"
        value={value}
        placeholder="Write Something" 
        onChange={(e) => {
            setValue(e.target.value)}} />
        <button 
        className={styles.button}
         onClick={() => {
            console.log(value);
            addTodo(value);
            setValue("")}}>+</button>
    </div>
  )
}

export default TodoInput