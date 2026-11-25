import React from 'react'
import { FaPlus } from 'react-icons/fa'
function PurchaseHistory() {
  return (
    <div className='p-30 my-15 shadow rounded'>
       {/*duplicate book status */}
       <div className='bg-gray-100 rounded p-5 mt-4'>
        <div className="md:grid grid-cols-[3fr_1fr]">
         {/*1st section */}
        <div>
             <h1 className='text-2xl'>Title</h1>
             <h1 className='text-xl'>Author</h1>
             <h1 className='text-lg text-blue-600'>$Price</h1>
             <h1 className='font-bold mt-10' >Abstract</h1>
            <button className='my-5 bg-purple-600 text-white p-2'>Purchase</button>
        </div>
        {/*2nd section */}
        <div className='px-5 mt-5 md:mt-0'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjm1rbKCFpbtCwRDP5iiVRuEyKzcMdPNyjNLfQ77Pf_lzRcuLFsTjd-Tl&s=10'/>
          
        </div>
        <div>

        </div>
        </div>

       </div>
    </div>
  )
}

export default PurchaseHistory  