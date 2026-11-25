import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen py-10'>
       {/*image */}
       <div className='flex justify-center'>
        <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_FBH3iX7erzQlVykVzz5XQ531MRp_0Qbo01e0z5j-KjTMjV8tirUJY0&s=10'/>
       </div>
        {/*name */}
        <h1 className='font-md text-2xl my-5 text-center'>Admin</h1>
         {/*Links */}
         <div className='flex flex-col justify-center items-center'>
          <div className='mt-5'>
               <Link to={'/admin'} className='flex items-center '><FaChartSimple className='me-3'/>Dashboard</Link>
          </div>
          <div className='mt-5'>
               <Link to={'/admin/resources'} className='flex items-center '><FaDatabase className='me-3'/>Collections </Link>
          </div>
          <div className='mt-5'>
               <Link to={'/admin/settings'} className='flex items-center '><FaGear className='me-3'/>Settings</Link>
          </div>
         </div>
        </div>
         
       
  )
}
 
export default AdminSidebar  
