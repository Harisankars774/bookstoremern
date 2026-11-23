import React from 'react'

function UploadBooks() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50'> 
        <h1 className='text-center font-medium text-3xl'>Upload book details</h1>
          {/*grid */}
          <div className='md:grid grid-cols-2 mt-10 w-full'>
            {/*1st section */}
           <div className='px-5'>
                <div className='mb-3'>
                   <input type='text' placeholder='Book- Title' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Author' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Book-cover image URL' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Total pages' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Original price' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Discount' className='w-full p-2 bg-white rounded'/>
                </div>
                 <div className='mb-3'>
                   <textarea type='text' rows={'5'} placeholder='Abstract' className='w-full p-2 bg-white rounded'/>
                </div>
           </div>
             {/*2nd section */}
            <div className='px-5'>
               <div className='mb-3'>
                   <input type='text' placeholder='Publisher' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='ISBN' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Language' className='w-full p-2 bg-white rounded'/>
                </div>
                <div className='mb-3'>
                   <input type='text' placeholder='Category' className='w-full p-2 bg-white rounded'/>
                </div>
                {/*upload book images */}
                <div className='my-10 flex justify-center items-center'>
                    <label htmlFor='bookImages'>
                        <input type='file' id='bookImages' hidden/>
                        <img style={{borderRadius:'50%'}} height={'200px'} width={'200px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLVAWjGNLisPu9EGkRoNmotUBo8Nq2M2DXxdStf3oAQ&s=10'/>
                    </label>
                </div>
            </div>
          </div>
        </div>  
  )
}

export default UploadBooks