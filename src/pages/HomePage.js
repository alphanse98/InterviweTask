import React from 'react'
import MenuBar from '../components/MenuBar'
import TaskPopUp from '../components/TaskPopUp'
import TaskCards from '../components/TaskCards'
import { useState } from 'react'

export const HomePage = () => {
  
  let temData = [
    {
        "title": "task 1",
        "description": " ever since the  an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "date": "2023-09-13",
        "id": 842542384966391
    },
    {
        "description": "ever since the an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "date": "2023-09-06",
        "title": "task 2",
        "id": 522396196110989
    },
    {
        "description": "ever since the an unknown printer took a galley of type and scrambled it to make a type specimen book",
        "title": "task 3",
        "id": 486465944377098,
        "date": "2023-09-09"
    }
]
    const [data, setData] = useState(temData);
    const [popupActive, setPopupActive] = useState(true);
    const [editData, setEditData] = useState();
    const [editIndex, setEditIndex ]= useState();

    // handleEdit update the data for user editing turn on popup
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
