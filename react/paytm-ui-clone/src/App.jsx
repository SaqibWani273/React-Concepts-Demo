import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './components/CardComponent'

function App() {
  return (
    <>
    <div className="grid grid-cols-5">
      <div>
        sidebar here
      </div>
      <div className='col-span-4'>
      <div className='grid grid-cols-7'>
<div className='col-span-3'>

   <CardComponent cardDetails={{title:"Next Payout",
    amount:'2,312.23',orders:23,
    nextPaymentDate:'Today, 4:00pm' ,
    isFirst:true}} />
</div>
<div className='col-span-2'>
<CardComponent cardDetails={{title:"Amount Pending",
    amount:'2,312.23',orders:23, 
    isFirst:false
    }} />
  </div>

   <div className='col-span-2'>
   <CardComponent cardDetails={{title:"Amount Processed",
    amount:'2,312.23', 
    isFirst:false
    }} />
   </div>
    </div>
      </div>
    </div>
   
    </>
  )
}

export default App
