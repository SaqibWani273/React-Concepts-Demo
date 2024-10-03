import { useState,Fragment,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("Hello 1")

  function changeTitle(){
    setTitle(Math.random())
  }
  return (
    <div>
      <br /><br />
      
      <button onClick={()=>{setTitle(Math.random())}}>Click me</button>
      <br /><br />
      {/* <button onClick={changeTitle}>Click me</button> */}
     <ReactMemo xyz={title}></ReactMemo>
     {/* <ChangingComponent title1="hello 1"></ChangingComponent> */}
     <ReactMemo xyz="hello 2"></ReactMemo>
     <ReactMemo xyz="hello 3"></ReactMemo>
     <br />
    </div>
  )
}
//React memo is used to avoid unnecessary rerendering of components
const ReactMemo = memo(function MyComponent({xyz}){
  return <div>{xyz}</div>
})
function ChangingComponent({title1}){
  const [title, setTitle] = useState(title1)
  return <div>
    {title}
    <button onClick={()=>{setTitle(Math.random())}}>change title</button>
    </div>
}

export default App
