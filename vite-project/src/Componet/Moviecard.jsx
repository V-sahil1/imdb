import React from 'react'

function Moviecard({movObj,poster_path,name,handleAddwatchlist,handlremovefillter,watchlist}) { 
  function dosecontain(movObj){
    for(let i =0;i<watchlist.length;i++){
      if(watchlist[i].id == movObj.id){
        return true
      }
    }
    return false
  }

  return (

    <div  className='h-[40vh] w-[200px] bg-cover bg-center 
     m-2 rounded-xl hover:scale-110 duration-300 flex flex-col justify-between items-end hover:cursor-pointer'style={{backgroundImage :`URL(https://image.tmdb.org/t/p/original/${poster_path}) ` }}>
      
      {dosecontain(movObj) ? (<div onClick={()=>
       handlremovefillter(movObj)
  } className='m-4 flex justify-center h-8 items-center   rounded-lg w-8'>
        <p>	&#10060;</p>
      </div>)  : (<div onClick={()=>
       handleAddwatchlist(movObj)
  } className='m-4 flex justify-center h-8 items-center  rounded-lg w-8'>
        <p>	&#128151;</p>
      </div>) }
    
      
      
        <div className='text-white w-full   text-center p-2  text-xl mt-12  bg-gray-900/80  '>
            {name}
        </div>
        </div> 
       

    
  )
}

export default Moviecard
