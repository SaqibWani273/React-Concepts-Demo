import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function CardComponent({cardDetails}) {
    const textColor=cardDetails.isFirst?'text-white':'text-black';
    console.log(cardDetails.isFirst)
    return   <div className={`m-5  rounded-lg  p-5 ${cardDetails.isFirst?'bg-sky-600':'bg-gray-100' } ${textColor}`} >

    <div className='flex'>
        <p>{cardDetails.title}</p>
        
       <div className='ml-4'> <HelpOutlineIcon/></div>
        </div>
        <div className='flex space-x-5'>

        <div className='text-2xl font-semibold'>₹{cardDetails.amount}</div>
        <div >
            
                {Object.hasOwn(cardDetails, 'orders') ?<div className='flex'>
                <div className='text-sm font-semibold'>
                    {cardDetails.orders} orders
                    </div>
        <ChevronRightIcon/>
        
        </div> :''}
            
            
</div>
        
       
</div>
<div>
            {Object.hasOwn(cardDetails, 'nextPaymentDate') ?<div className='flex space-x-5'>
<div>Next Payment Date: </div>
<div>{cardDetails.nextPaymentDate}</div>
        </div>:''}
</div>
    </div>
    
}