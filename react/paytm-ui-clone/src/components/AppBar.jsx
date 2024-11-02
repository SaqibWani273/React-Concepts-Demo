import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SmsIcon from '@mui/icons-material/Sms';
import CircularComponent from './Circular-component';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AppBar() {
    return (
        <div className="bg-white flex justify-between px-5 py-5 mb-5 drop-shadow-sm items-center">
            <div className='flex space-x-5 align-top'>
                <h3>Payouts</h3>
                <div className="flex space-x-2 ">
<HelpOutlineIcon fontSize='12px'/>
<p>How it works</p>
                </div>
            </div>
            {/* search bar copied */}
            <div className="md:w-1/3">
            <form >   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="w-full py-4 ps-10 text-sm text-gray-900 dark:bg-gray-50 rounded-lg" placeholder="Search Features,tutorial,ec" required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>
            </div>


            <div className='flex space-x-5'>
<CircularComponent height='10' width='10' component={<SmsIcon />}/>
<CircularComponent height='10' width='10' component={<ArrowDropDownIcon/>}/>
            </div>
            
        </div>
    );
}
