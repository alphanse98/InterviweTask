function Card({data}) {
console.log(data)
if(!data?.abilities){
    return <div>No Data</div>
}
return(
    <>
        {data?.abilities?.map((item, index)=>(
            <div key={index}>
                {item?.ability.name}
            </div>
        ))}
    </>
)
}
export default Card;
