import { useState,Fragment,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const todos=[
    {id:1, title:"Todo 1",description:"Description 1"},
    {id:2, title:"Todo 2",description:"Description 2"},
    {id:3, title:"Todo 3",description:"Description 3"},
  ];
  const [todosState,setTodos]=useState(todos);
  function addTodo({title,description,id}){
    setTodos([{title:title,description:description,id:id},...todosState]);
  }
  return (
      <div>
      <button onClick={function temp(){
        addTodo({title:"dummy title",description:"dummy description",id:4})
      }}>Add Todo</button>
      {todosState.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
        </div>
    
  )
 
}
function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    
    <h2>{description}</h2>
  </div>
}

export default App
