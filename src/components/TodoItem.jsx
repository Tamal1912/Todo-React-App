import React from 'react'

const TodoItem = ({todoName,todoDate}) => {
     

  return (

    <div className="mt-4  pr-2  row text-white">
    <div className="col-6">
     <h2>{todoName}</h2>
    </div>
    <div className="col-3">
      <h2>{todoDate}</h2>
    </div>
    <div className="col-3">
    <button className="btn btn-error text-white">Delete</button>
  </div>
</div>


  )
}

export default TodoItem;