import logo from './logo.svg';
import './App.css';

  export default function App() {
    return (
      
    <div>

<CssDiv/>
<TailwindDiv/>
<TailwindGrid/>
<TailwindGrid1/>

    </div>
    )
  }
function CssDiv(){
  return <div style={{display:"flex",backgroundColor:"green",justifyContent:"space-around"}}>

    <div style={{backgroundColor:"red"}}>01</div>
    <div style={{backgroundColor:"blue"}}>01</div>
    <div style={{backgroundColor:"white"}}>01</div>
  </div>
}
function TailwindDiv(){
  return <div className='flex justify-around bg-green-600 mt-5'> 
    <div className='bg-red-600'>01</div>
    <div className='bg-blue-600'>02</div>
    <div className='bg-white'>03</div>
  </div>
}
function TailwindGrid(){

  return <div className='grid grid-cols-9 gap-4'>
    {/* Here by default col-span-8 ,for small and greater than that devices sm:col-span-4, for medium and greater than that devices md:col-span-3 */}
    <div className='col-span-9 md:col-span-3  sm:col-span-5 bg-red-600'>01</div>
    <div className='col-span-9 md:col-span-3  sm:col-span-4 bg-blue-600'>02</div>
    <div className='col-span-9 md:col-span-3 bg-white'>03</div>
  </div>
}
function TailwindGrid1(){

  return <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {/* Here by default col-span-8 ,for small and greater than that devices sm:col-span-4, for medium and greater than that devices md:col-span-3 */}
    <div className='col-span-1 bg-red-600'>01</div>
    <div className='col-span-1 bg-blue-600'>02</div>
    <div className='col-span-1 bg-white'>3</div>
  </div>
}
