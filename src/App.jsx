
import Appname from './components/AppName'
import AddTodo from './components/AddTodo'

import TodoItem from './components/TodoItem'
import TodoLists from './components/TodoLists'
import { useState } from 'react'
import WelcomeMsg from './components/WelcomeMsg'
function App() {

  

    let [todoLists,setTodoLists]=useState([]);
  
   let addInput=(itemName,itemDate)=>{
    //console.log(`name ${itemName} , date ${itemDate}`);
    
   
  //** Using Functional Updates */
    setTodoLists((currItem)=>
      [...currItem,{
        name:itemName,
        date:itemDate
      }]

    )
   }

   const handleDeleteButtton=(deleteTodoName)=>{
  
    let newDeletedItem=todoLists.filter(item=> item.name !== deleteTodoName);
    setTodoLists(newDeletedItem)
    
  }
  return (
    <center className='w-5/5 h-screen  todo-container '>
  <Appname/>
  <AddTodo onInput={addInput}></AddTodo>
  {todoLists.length===0 && <WelcomeMsg></WelcomeMsg>}
  <TodoLists onDelete={handleDeleteButtton} items={todoLists}></TodoLists>
  

    </center>
  )
}

export default App