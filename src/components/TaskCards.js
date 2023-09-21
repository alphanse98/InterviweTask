import React from 'react'

const TaskCards = ({data, setData, handleEdit}) => {

    const handleDelete = (item)=>{
    let  temData = data.filter((param)=> param.id !== item.id )
    setData(temData)
    }

  return (
    <div className='flex bg-slate-200 w-full p-5'>
        {data?.map((item, index)=>(
            <div className='w-48 rounded-lg p-2 bg-white ml-4 h-48 shadow-lg shadow-gray-300' key={item?.id}>
               <h2 className='text-sm'>{item?.title}</h2> 
               <p className='text-sm mt-2 h-24'>{item?.description}</p>
               <p className='text-sm mt-1'>{item?.date}</p>
               <div className='flex justify-around mt-1'>
                <button onClick={()=>handleDelete(item)}>Delete</button>
                <button onClick={()=>handleEdit(item, index)}>Edit</button>
              </div>
            </div>
        ))}
    </div>
  )
}

export default TaskCards