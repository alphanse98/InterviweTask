import React from 'react'

const TaskCards = ({data, setData, handleEdit}) => {

    const handleDelete = (item)=>{
    let  temData = data.filter((param)=> param.id !== item.id )
    setData(temData)
    }

  return (
    <div>
        {data?.map((item, index)=>(
            <div key={index}>
               <h2>{item?.title}</h2> 
               <p>{item?.description}</p>
               <button onClick={()=>handleDelete(item)}>Delete</button>
               <button onClick={()=>handleEdit(item, index)}>Edit</button>
            </div>
        ))}
    </div>
  )
}

export default TaskCards