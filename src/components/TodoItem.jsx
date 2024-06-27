import React from 'react'
import { FaMinusCircle } from "react-icons/fa";


const TodoItem = ({todoName,todoDate,onDeleteClick}) => {
     

  return (

    <div className="mt-4  pr-2  row text-white">
    <div className="col-6">
     <h2>{todoName}</h2>
    </div>
    <div className="col-3">
      <h2>{todoDate}</h2>
    </div>
    <div className="col-3">
    <button onClick={()=>onDeleteClick(todoName)} className="btn btn-error text-white"><FaMinusCircle/></button>
  </div>
</div>


  )
}

export default TodoItem;