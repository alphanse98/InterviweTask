import React from 'react'
import icon from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg"
import { useState } from 'react'

const TaskPopUp = ({setPopupActive, data, setData, editData}) => {
    const[formData, setFormData] = useState( editData || {})

    const handleChange = (e)=>{
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = ()=>{
        let temData = [...data]
        temData.push(formData)
        setData(temData)
        setPopupActive(false)
    }

  return (
    <div className='TaskPopUp'>
        <div className='TaskPopUpBox'>
            <img src={icon} onClick={()=>setPopupActive(false)} alt='icon'></img>
            <h1>Add a task</h1>
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
            <button onClick={handleSubmit}>Add a task</button>
        </div>
    </div>
  )
}
export default TaskPopUp