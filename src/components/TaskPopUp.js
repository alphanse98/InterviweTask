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
    <div className='min-h-screen w-full backdrop-blur-sm bg-gray-700 bg-opacity-60 absolute flex justify-center pt-10 pb-24'>
        <div className='flex justify-center '>
            <div className=' p-3 bg-slate-200 rounded-lg flex flex-col justify-between h-100'>
                <div className='flex justify-between'>
                    <h1 className='text-lg'>{heading}</h1>
                    <img src={icon} onClick={()=>setPopupActive(false)} alt='icon'></img>
                </div>
                <div className='mt-1'>
                    <p className='text-sm'>Title</p>
                    <input className='w-80 p-1 mt-1' name='title' value={formData.title} onChange={handleChange} type='text'></input>
                </div>
                <div className='mt-1'>
                    <p className='text-sm'>Date</p>
                    <input className='w-80 p-1 mt-1' value={formData.date} onChange={handleChange} name='date' type='date'></input>
                </div>
                <div className='mt-1'>
                    <p className='text-sm'>Description</p>
                    <input className='w-80 p-1 mt-1' value={formData.description}  onChange={handleChange} name='description' type='text'></input>
                </div>
                <div className='mt-3 flex'>
                    <input className='mr-3' value={formData.important} onChange={handleChange} name= "important" type='checkbox'></input>
                    <p className='text-sm'>Mark as importany</p>
                </div>
                <div className='mt-3 flex'>
                    <input className='mr-3' value={formData.completed} onChange={handleChange} name='completed' type='checkbox'></input> 
                    <p className='text-sm'>Mark as completed</p>                   
                </div>
                <button className='w-80 mt-3 py-2 rounded-lg text-sm custom-bg-color text-white' onClick={handleSubmit}>{heading}</button>
            </div>
        </div>
    </div>
  )
}
export default TaskPopUp