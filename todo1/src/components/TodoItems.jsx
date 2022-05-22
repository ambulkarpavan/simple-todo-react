import React from 'react'
import styles from "./todo.module.css"

const TodoItems = ({value , deleteitem}) => {
  return (
    <div className={styles.list}>
     
      <div>
      {value}
      {/* <button onClick={()=> deleteitem(value) }>delete</button> */}
      </div>
      <input type="radio" className={styles.input2} />
      </div>
  )
}

export default TodoItems