import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
      
      <CreateTodo></CreateTodo>
      <hr />
      <Todo props={{ todos:[
        {
          title:"Meeting",
          description:"Meeting with the dev team at 11:00 am",
          done:true
        },
        {
          title:"Meeting",
          description:"Meeting with the dev team at 11:00 am",
          done:false
        },
        {
          title:"Meeting",
          description:"Meeting with the dev team at 11:00 am",
          done:true
        },
      ]}}></Todo>
      </div>
      
    
  )
}

export default App
