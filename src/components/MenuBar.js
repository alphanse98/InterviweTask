import React from 'react'

const MenuBar = ({setPopupActive}) => {
  return (
    <div className='p-3 min-h-screen w-64 flex justify-center'>
        <button className=' px-8 py-2 rounded-lg h-10	 text-sm custom-bg-color text-white' onClick={()=>setPopupActive(true)}>Add new Task</button>
    </div>
  )
}
export default MenuBar