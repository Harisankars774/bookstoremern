
import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'
function Contact() {
  return (
    <>
    <Header/>
      <div className='md:px-20 my-5 p-5'>
         <h1 className='text-center font-bold text-3xl  my-5'>Contact</h1>
         <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus id dolorem aspernatur quisquam quo nesciunt reprehenderit optio praesentium consequatur, dignissimos, veritatis nam eaque vel veniam tenetur? Magni sunt ipsum est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas tempora voluptatem dicta vero quae laboriosam pariatur in, eum voluptates. Ab architecto accusamus voluptatibus reprehenderit obcaecati cum assumenda illum rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda porro blanditiis, ipsam consequuntur rerum, vel facilis asperiores nemo architecto voluptatibus, consectetur error. Voluptates dicta aliquam dolore fugit, excepturi dignissimos blanditiis.</p> 
         {/* Grid:address,number,email*/}
         <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
         {/*Location */}
         <div className='flex items-center'>
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'> 
            <FaLocationPin/>
          </div>
          <p className='ms-5'>123 Main Street,Apt 4B,AnyTown, CA 91234</p>
         </div>
         {/*number*/}
          <div className='flex items-center'>
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'> 
            <FaPhone/>
          </div>
          <p className='ms-5'>+918590403205</p>
         </div>
         {/*email*/}
          <div className='flex items-center'>
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center bg-gray-300'> 
            <FaEnvelope/>
          </div>
          <p className='ms-5'>contact@bookstore.com</p>
         </div>
         </div>
         {/*Message and map*/}
         <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
             {/*Message*/}
             <div className='bg-gray-200 text-center p-5'>
               <h1 className='font-semi-bold text-2xl'>Send Us Message</h1>
               <form>
                  <div className='mb-5 mt-10'>
                    <input type='text' placeholder='Name' className='bg-white w-full p-2'/>
                  </div>
                    <div className='mb-5 mt-5'>
                    <input type='email' placeholder='Email' className='bg-white w-full p-2'/>
                  </div>
                    <div className='mb-5 mt-5'>
                    <textarea type='text' placeholder='Message' className='bg-white w-full p-2'/>
                  </div>
                    <div className='my-5'>
                   <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center'>Submit<FaPaperPlane className='ms-2'/></button> 
                  </div>
               </form>
             </div>  
             <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.972465653133!2d76.34116201554048!3d10.01913074237044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Software%20Training%20institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1795065846997!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
             </div>
         </div>
      </div>
    <Footer/>    
    </>
  )  
}

export default Contact  