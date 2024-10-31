import { useState,Fragment,memo, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//useeffect gets executed after render
//usememo gets executed during render

let i=1;
function App() {
  console.log(i++)
  const [count,setCount]= useState(0)
  const [num,setNum]=useState(0)
  // const [sum,setSum]=useState(0)
  let sum=0;
  // console.log(calculateSum())
  useMemo(function(){
   sum=0;
    for(let i=1;i<=num;i++)
      {
        sum+=i;
      }
      // console.log("sum="+sum)
      // setSum(sum1)
    },[num])
    // console.log("sum="+sum)
return (
  <div>
    <input type="text" onChange={ (e)=>setNum(e.target.value)}/>
    <p>sum of {num} is  {sum}</p>
    <button onClick={()=>setCount(count+1)}>update count</button><br />
    {count}</div>
)
function calculateSum(num){
  let sum=0;
  // console.log("num = "+num)
  
  return sum;
}
}


export default App
