
import Appname from './components/AppName'
import AddTodo from './components/AddTodo'

import TodoItem from './components/TodoItem'
import TodoLists from './components/TodoLists'
function App() {

  //Data
  let todoLists=[{
    name:"Buy Milk",
    date:"4/10/23"
  },
  {
    name:"Go To College",
    date:"4/10/23"
  },
  {
    name:"Trip Plan",
    date:"6/10/23"
  }
]

  return (
    <center className='w-5/5 h-screen  todo-container '>
  <Appname/>
  <AddTodo/>
  <TodoLists items={todoLists}></TodoLists>
  

    </center>
  )
}

export default App
