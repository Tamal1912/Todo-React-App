import React from 'react'
import TodoItem from './TodoItem'

const TodoLists = ({items}) => {
  return (
    <>
    {items.map(item => <TodoItem todoName={item.name} todoDate={item.date}></TodoItem>)}
    
    </>
    
  )
}

export default TodoLists