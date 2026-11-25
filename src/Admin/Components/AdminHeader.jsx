
import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
     <>
     <div className='flex justify-between items-center p-3 md:px-20'>
       {/*Header top */}
       {/*Logo */}
        <div className='flex items-center'>
         <img width={'50px'} height={'50px'} src="https://pngimg.com/uploads/book/book_PNG51090.png" alt='logo'/>
         <h1 className='text-2xl ms-3 font-bold '>Bookstore</h1>
       </div>
       {/*Logout */}
       <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-white hover:text-black '>Logout<FaPowerOff/></button>
     </div>
     {/* Header marquee */}
     <div className='bg-black text-white p-3'>
        <marquee>Welcome Admin,Your all set to manage and monitor the system.Let's get into work</marquee>
     </div>
     </>
  )
}

export default AdminHeader