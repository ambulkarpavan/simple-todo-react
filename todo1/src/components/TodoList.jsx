import React from 'react'
import styles from "./todo.module.css"

const TodoList = ({children}) => {
  return (
  <ul>
    {children}
  </ul>
  )
}

export default TodoList