import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './components/CardComponent'
import Overview from './components/Overview'
import AppBar from './components/AppBar'
import Sidebar from './components/Sidebar'
import sidebarItemsList2 from './data/sidebar_data';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);  

  };
  return (
    <>
    <Sidebar/>
    <div className="grid grid-cols-5 sm:ml-14  lg:ml-64">
      {/* <div className={`${isSidebarOpen ? 'transalte-x-0' : '-translate-x-full'}`}>

      <Sidebar sidebarItemsList= {sidebarItemsList2}/>
      </div> */}
      <div className='col-span-5  px-5 bg-gray-50'>
      <AppBar/> 
      <Overview/>
      <div className='grid grid-cols-7'>
<div className='col-span-7 sm:col-span-4 lg:col-span-3'>

   <CardComponent cardDetails={{title:"Next Payout",
    amount:'2,312.23',orders:23,
    nextPaymentDate:'Today, 4:00pm' ,
    isFirst:true}} />
</div>
<div className='  col-span-7 sm:col-span-3 lg:col-span-2'>
<CardComponent cardDetails={{title:"Amount Pending",
    amount:'2,312.23',orders:23, 
    isFirst:false
    }} />
  </div>

   <div className='lg:col-span-2  col-span-7'>
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
