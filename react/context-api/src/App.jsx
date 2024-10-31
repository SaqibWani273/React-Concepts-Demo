import { useState } from 'react'

import './App.css'
import { CountContext } from './components/context';
import { useContext } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CountContext.Provider value={{count,setCount}}>
<Count />
</CountContext.Provider>
      </div>
    </>
  )
  
}
function Count({ setCount}){
  return <div>
    <CountRenderer />
    <Buttons  />

  </div>

  
}
function CountRenderer(){
  const countObj=useContext(CountContext);
  return <div>
    {countObj.count}
  </div>


}
function Buttons(){
  const countObj=useContext(CountContext);
  return <div>
    <button onClick={()=>countObj.setCount(countObj.count+1)}>+</button>
    <button onClick={()=>countObj.setCount(countObj.count-1)}>-</button>
  </div>
}
export default App
