import React from 'react'

const RightCardContent = (props) => {
  return (
    
       <div className='absolute top-0 left-0 h-full w-full  p-2 flex flex-col justify-between'> 
          <h2 className='bg-white rounded-full text-xl font-semibold h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
          <div>
            <p className='text-sm leading-normal text-white mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, fugit?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-2 py-1 rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-2 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>  
         </div>

  )
}

export default RightCardContent
