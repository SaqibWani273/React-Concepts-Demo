import { useState,Fragment,memo, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let num=0;
let dep=0;
function App() {
  const [state1,setState1]= useState(num)
if(num%10==0)
  dep++;
  //similar to initstate in flutter
  useEffect(function(){
    alert("HEllow")
  },[dep])//passing empty array means call the function only once i.e. when
  //mounted
  return (
    <div>{state1}
    <button onClick={()=> setState1(++num)}>update</button>

    </div>
  )
}


export default App
