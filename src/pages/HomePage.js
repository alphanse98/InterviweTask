import React from 'react'
import MenuBar from '../components/MenuBar'
import TaskPopUp from '../components/TaskPopUp'
import TaskCards from '../components/TaskCards'
import { useState } from 'react'

export const HomePage = () => {
    const temData = [
        {
            id:123,
            title:"work",
            date:"9/20/2023",
            description:"working .......",
            derictory:"main",
            important:false,
            completed:false,
        }
    ]
    const[data, setData] = useState([]);
    const[popupActive, setPopupActive] = useState(true);
    const [editData, setEditData] = useState()

    const handleEdit = (data, index)=>{
        setEditData(data)
        setPopupActive(true)
        console.log(data, index)
    }
  return (
    <div>
        <MenuBar setPopupActive={setPopupActive}/>
        <TaskCards data={data} setData={setData} handleEdit={handleEdit}/>
        {popupActive && <TaskPopUp setPopupActive={setPopupActive} data={data} setData={setData} editData={editData}/>}
    </div>
  )
}