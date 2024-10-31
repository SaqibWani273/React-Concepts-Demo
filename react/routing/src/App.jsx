import { useState } from 'react'
import {BrowserRouter, Link, Route, Routes}  from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'

const Dashboard =lazy(()=>import('./pages/dashboard'))
const Landing =lazy(()=>import('./pages/landing'))

function App() {
  const [count, setCount] = useState(0)

  return (
    
       <BrowserRouter>
       <AppBarWithoutUseNavigate/>
<MyAppBar/>
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<Loader/>}>
          <Landing />
        </Suspense>
        } />
      <Route path="/dashboard" element={
         <Suspense fallback={<Loader/>}>
                 <Dashboard />
       </Suspense>
} />
    </Routes>
    </BrowserRouter>

    
   
  )
}
function Loader (){
  return <div>Loading...</div>
}
function AppBarWithoutUseNavigate(){
  return <div>
    <button onClick={()=>{window.location.href="/"}}>Landing Page without useNavigate</button>
    <button onClick={()=>{window.location.href="/dashboard"}}>Dashboard without useNavigate</button>


  </div>
}
function MyAppBar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>navigate("/")}> LAnding Page</button>
    <button onClick={()=>navigate("/dashboard")}> Dashboard Page</button>
  </div>
}
export default App
