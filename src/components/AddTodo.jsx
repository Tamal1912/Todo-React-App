import React, { useRef } from 'react'
import { useState } from 'react'
import { MdAddBox } from "react-icons/md";

const AddTodo = ({onInput}) => {
  
  //****using useState() Hook****


// const [todoName,setTodoName]=useState();
// const [todoDate,setTodoDate]=useState();


//  let handleTodoName=(event)=>{
 
//   setTodoName(event.target.value);
  
//  }

//  let handleTodoDate=(event)=>{
 
//   setTodoDate(event.target.value);
  
//*** */  }


//*Using useRef() Hook */

const todoNameElm=useRef();
const todoDateElm=useRef();

 

 let handleAddButtonClicked=(event)=>{
  event.preventDefault();
  let todoName= todoNameElm.current.value;
  let todoDate= todoDateElm.current.value;
  onInput(todoName,todoDate);
 todoNameElm.current.value="";
 todoDateElm.current.value="";

 
 }

 

  
  return (
    
<div className="mt-10 min-w-full container text-center text-white">

<form className="row text-white" onSubmit={handleAddButtonClicked}>
  <div className="col-6">
    <input ref={todoNameElm} type="text"   className='px-3 py-2 rounded-lg' placeholder='Enter your todo' id="" />
  </div>
  <div className="col-3">
    <input  ref={todoDateElm} type="date"  className='px-3 py-2 rounded-lg' name="date" id="" />
  </div>
  <div className="col-3">
    <button
    type='submit'
    className='border-0 rounded-md px-4 py-2 bg-lime-500 text-white' ><MdAddBox/></button>
  </div>
</form>
</div>
  )
}

export default AddTodo