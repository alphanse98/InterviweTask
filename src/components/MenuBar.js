import React from 'react'

const MenuBar = ({setPopupActive}) => {
  return (
    <div className='menuBar'>
        <button onClick={()=>setPopupActive(true)}>Add new Task</button>
    </div>
  )
}
export default MenuBar