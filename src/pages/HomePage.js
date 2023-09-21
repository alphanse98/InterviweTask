import React from 'react'
import MenuBar from '../components/MenuBar'
import TaskPopUp from '../components/TaskPopUp'
import TaskCards from '../components/TaskCards'
import { useState } from 'react'

export const HomePage = () => {
  
    const [data, setData] = useState([]);
    const [popupActive, setPopupActive] = useState(true);
    const [editData, setEditData] = useState();
    const [editIndex, setEditIndex ]= useState();

    const handleEdit = (data, index)=>{
        setEditData(data)
        setEditIndex(index)
        setPopupActive(true)
    }
  return (
    <div className='flex'>
        <MenuBar setPopupActive={setPopupActive}/>
        <TaskCards data={data} setData={setData} handleEdit={handleEdit}/>
        {popupActive && <TaskPopUp setPopupActive={setPopupActive} data={data} setData={setData} editData={editData} editIndex={editIndex} setEditData={setEditData}/>}
    </div>
  )
}
