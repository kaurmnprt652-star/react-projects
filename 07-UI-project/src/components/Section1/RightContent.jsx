import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='h-full rounded-2xl overflow-x-auto flex flex-nowrap gap-5 w-3/4 p-2 '>
        {props.users.map(function(elem,idx){

          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent
