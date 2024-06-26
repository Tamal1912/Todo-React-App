import React from 'react'
import { useState } from 'react'

const AddTodo = ({onInput}) => {
  
const [todoName,setTodoName]=useState();
const [todoDate,setTodoDate]=useState();

 let handleTodoName=(event)=>{
 
  setTodoName(event.target.value);
  
 }

 let handleTodoDate=(event)=>{
 
  setTodoDate(event.target.value);
  
 }

 let handleAddButtonClicked=()=>{
  onInput(todoName,todoDate);
  setTodoName("");
  setTodoDate("");
 }

 

  
  return (
    
<div className="mt-10 min-w-full container text-center text-white">

<div className="row text-white">
  <div className="col-6">
    <input onChange={handleTodoName} type="text" value={todoName}  className='px-3 py-2 rounded-lg' placeholder='Enter your todo' id="" />
  </div>
  <div className="col-3">
    <input onChange={handleTodoDate} type="date" value={todoDate} className='px-3 py-2 rounded-lg' name="date" id="" />
  </div>
  <div className="col-3">
    <button
    onClick={handleAddButtonClicked}
    className='border-0 rounded-md px-4 py-2 bg-lime-500 text-white' >Add</button>
  </div>
</div>
</div>
  )
}

export default AddTodo