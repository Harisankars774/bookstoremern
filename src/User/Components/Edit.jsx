import React from 'react'
import { FaPen } from 'react-icons/fa'

function Edit() {
  return (
    <div>
        {/*Button */}
        <button className='flex justify-center items-center bg-black text-white font-bold p-2 hover:bg-white hover:text-black border'>
          <FaPen className='me-2'/>  EDIT
        </button>
        {/*Offcanvas */}
    </div>
  )
}

export default Edit  