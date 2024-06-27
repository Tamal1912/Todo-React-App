import React, { useState } from 'react'
import TodoItem from './TodoItem'

const TodoLists = ({items,onDelete}) => {
   
  return (
    <>
    {items.map(item =>
     <TodoItem 
     onDeleteClick={onDelete}
     key={item.name}
     todoName={item.name}
     todoDate={item.date}></TodoItem>)}
    
    </>
    
  )
}

export default TodoLists

