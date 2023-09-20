import React from 'react'
import icon from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg"
import { useState } from 'react'

const TaskPopUp = ({setPopupActive, data, setData, editData, editIndex, setEditData}) => {
    const[formData, setFormData] = useState( editData || {})
    
    const handleChange = (e)=>{
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    let heading  = "Add a task"
    if(editData) heading  = "Edit a task"

    const handleSubmit = ()=>{
        if(editData){
            let temData = [...data]
            temData.splice(editIndex, 1, formData)
            setData(temData)
        }else{
            formData.id = Math.floor(Math.random() * 1234567812345678);
            let temData = [...data]
            temData.push(formData)
            setData(temData)
        }
        setPopupActive(false)
        setEditData('')
    }

  return (
    <div className='min-h-full w-full backdrop-blur-sm bg-gray-700 bg-opacity-60 absolute flex justify-center pt-24'>
        <div className='flex justify-center  '>
            <div>
                <img src={icon} onClick={()=>setPopupActive(false)} alt='icon'></img>
                <h1>{heading}</h1>
                <p>Title</p>
                <input name='title' value={formData.title} onChange={handleChange} type='text'></input>
                <p>Date</p>
                <input value={formData.date} onChange={handleChange} name='date' type='date'></input>
                <p>Description</p>
                <input value={formData.description}  onChange={handleChange} name='description' type='text'></input>
                <p>Mark as importany</p>
                <input value={formData.important} onChange={handleChange} name= "important" type='checkbox'></input>
                <p>Mark as completed</p>
                <input value={formData.completed} onChange={handleChange} name='completed' type='checkbox'></input>
                <button onClick={handleSubmit}>{heading}</button>
            </div>
        </div>
    </div>
  )
}
export default TaskPopUp