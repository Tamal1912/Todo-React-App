
import Appname from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'


function App() {


  return (
    <center className='w-5/5 h-screen  todo-container '>
  <Appname/>
  <AddTodo/>
  <TodoItem1/>
  <TodoItem2/>

    </center>
  )
}

export default App
