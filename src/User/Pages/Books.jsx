
import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
   const[toggle,setToggle]=useState(false)
  return (
   <>  
    <Header/>
     <div className='flex flex-col justify-center items-center my-5'>
       <h1 className='font-bold text-3xl my-5'>All Books</h1>
       <div className='my-5'>
          <input type='text' placeholder='Search by book title' className='border border-gray-300 w-100 p-2'/>
          <button className='bg-blue-800 text-white p-2 ms-2'>Search</button>
       </div>
      </div> 
      {/*Grid:Filter and books card*/}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
        {/*Filter*/}  
        <div className="col-span-1">
           <div className='flex justify-between'> 
            <h1 className='font-bold text-2xl'>Filter</h1>
            <button onClick={()=>setToggle(!toggle)} className='text-2xl md:hidden'><FaBars/></button>
           </div>
           {/*Filter Category*/}
        <div className={toggle? 'block':'hidden md:block'}>
          <div className='mt-3'>
            <input name='filtering' type='radio' id='no-filter'/>
            <label htmlFor='no-filter'>All</label>
          </div>
          {/*Duplicate filter Category*/}
           <div className='mt-3'>
            <input name='filtering' type='radio' id='filter'/>
            <label htmlFor='filter'>Category</label> 
          </div>
        </div>
        </div>
        {/*Book Card*/}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5'>
             {/*Duplicate according to book */}
             <div className='shadow rounded p-3 m-4'>
                <img height={'300px'} width={'100%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjm1rbKCFpbtCwRDP5iiVRuEyKzcMdPNyjNLfQ77Pf_lzRcuLFsTjd-Tl&s=10" alt='bookcard'/>
                 <div className='flex flex-col justify-center items-center mt-4'>
                  <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                  <h3 className='text-lg mt-2'>Title</h3>
                 <Link to={'/books/:id'} className='bg-blue-800 font-bold text-white p-2 rounded mt-2'> View book</Link>
                 </div>
             </div>
          </div>   
        </div>
      </div> 
    <Footer/>
   </>        
  )
}

export default Books