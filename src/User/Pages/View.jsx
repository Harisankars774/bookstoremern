
import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaBackward, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  return (
    <>
    <Header/>
    <div className='md:m-10 m-5'>
      <div className='border shadow border-gray-200 p-5'>
       {/*Grid*/}
       <div className='md:grid grid-cols-4 gap-x-10'>
        {/*Image*/}
        <div className='col-span-1'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjm1rbKCFpbtCwRDP5iiVRuEyKzcMdPNyjNLfQ77Pf_lzRcuLFsTjd-Tl&s=10' alt='view book'/>
        </div>
        <div className='col-span-3'>
          <div className='flex justify-between'>
            <h3 className='font-bold text-2xl '>Title</h3>
            <button className='text-gray-300'><FaEye/></button>
          </div>
          <h2 className='font-bold text-blue-700'>Author</h2>
          <div className='md:grid grid-cols-3 gap-10 my-10'>
              <p className='font-bold'>Publisher: </p>
               <p className='font-bold'>Language: </p>
                <p className='font-bold'>No of Pages: </p>
                 <p className='font-bold'>Category: </p>
                  <p className='font-bold'>ISBN: </p>
                   <p className='font-bold'>Original Price: </p>
                    <p className='font-bold'>Seller: </p>  
          </div>
          <div className='my-4 md:my-10'>
            <h4 className='font-bold text-2xl'>Abstract: </h4>
          </div>
          <div className='flex justify-end'>
            <Link to={'/books'} className='flex items-center bg-blue-900 text-white p-2 font-bold rounded'><FaBackward className='me-2'/>Back</Link>
            <button className='bg-green-900 p-2 text-white font-bold ms-3 rounded'>Buy $89</button>
          </div>
        </div>
       </div>
      </div>
       {/*Modal*/}
       <div className='relative z-10 overflow-y-auto '>
          <div className='bg-gray-500/75 fixed inset-0'> //opacity,inset-0 means top left right bottom is 0
              <div className='flex justify-center items-center min-h-screen'>
                 <div className='bg-white rounded w-100 md:w-250'>
                  {/*Modal title */}
                  <div className='bg-black text-white p-3'>
                     <h2>Book images</h2>
                  </div>
                  {/*Modal body */}  
                 </div>
              </div>
          </div>
       </div>

    </div>
    <Footer/>
    </>
  )
}

export default View  