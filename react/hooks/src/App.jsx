import { useState,Fragment,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function TextComponent(){
    return <div>
      <h1 >title 1</h1>
      <p>description 1</p>
    </div>
  }
  return(
    <div>
    <WrapperComponent >
     
      <div> hi there</div>
      <TextComponent/>
      
    </WrapperComponent>
    </div>
  )
  function WrapperComponent({children}){
    console.log(children)
    return <div style={{backgroundColor:'purple', border:'2px solid black', padding:30}}>
{children}
    </div>
  }
}


export default App
