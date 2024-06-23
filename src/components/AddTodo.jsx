import React from 'react'

const AddTodo = () => {
  return (
    
<div className="mt-10 min-w-full container text-center text-white">

<div className="row text-white">
  <div className="col-6">
    <input type="text" className='px-3 py-2 rounded-lg' placeholder='Enter your todo' id="" />
  </div>
  <div className="col-3">
    <input type="date" className='px-3 py-2 rounded-lg' name="date" id="" />
  </div>
  <div className="col-3">
    <button className='border-0 rounded-md px-4 py-2 bg-lime-500 text-white'>Add</button>
  </div>
</div>
</div>
  )
}

export default AddTodo