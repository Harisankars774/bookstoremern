import React from 'react'

function UploadStatus() {
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
             <div className='flex mt-5'>
                <img width={'120px'} height={'120px'} src='https://thumbs.dreamstime.com/b/pending-stamp-label-transparent-background-round-sign-360670879.jpg' alt='pending'/>
                <img className='mx-10' width={'120px'} height={'120px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sCdjb3cz0QNepi8s11QboK9e6X2sWDaV98u5Gu894o4Ep2EXZSEuGW0&s=10' alt='sold'/>
                <img width={'120px'} height={'120px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_SbgW7t0ydwX_lwz9QRk1g26X2sZy1iUEmlYgUZyzptoJCtArS1MMxA&s=10' alt='Approved'/>
             </div>
        </div>
        {/*2nd section */}
        <div className='px-5 mt-5 md:mt-0'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEjm1rbKCFpbtCwRDP5iiVRuEyKzcMdPNyjNLfQ77Pf_lzRcuLFsTjd-Tl&s=10'/>
           <div className='flex justify-end'>
             <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-3'>DELETE</button>
           </div>
        </div>
        <div>

        </div>
        </div>

       </div>
    </div>
  )
}

export default UploadStatus