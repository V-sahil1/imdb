import React from 'react'

function Pagination({handleprev,handlenext,pagen}) {
  return (
    <div>
    <div  className='bg-gray-600/80 p-2 flex justify-center text-white'>
    <i  onClick={handleprev}class="bg-gray-500/20 fa-solid fa-arrow-left mt-1.5"></i>
    <div  className='px-6 bg-gray-500/20 font-bold' >{pagen}</div>
    <i onClick={handlenext}class="bg-gray-500/20 fa-solid fa-arrow-right mt-1.5  "></i>
    
    </div>
    <div>
    
    </div>
    </div>

  )
}

export default Pagination