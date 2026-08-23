import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index ,setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

    setUserData(response.data)
  }

  useEffect(() => {
    getData()
    
  }, [])

    let printUserData = <h3 className='text-gray-400 text-xs'>No User Found</h3>
    if (userData.length > 0) {
      printUserData = userData.map(function(elem,idx) {

        return <div key={idx}>
       <a href={elem.url} target='_blank'>
         <div className='h-40 w-44 overflow-hidden  rounded-xl'>
          <img className='h-full w-fullobject-cover' src={elem.download_url} alt="" />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
        
       </a>
      </div>
       
      })
    }
  

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='fixed bg-red-500 text-6xl'>{index}</h1>
      <button
      onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>Get data</button>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
      <div>
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
          Prev</button>
          onClick={()=>{
            setIndex(index-1)

          }}
        <button className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'>
          Next</button>
          onClick={()=>{
            setIndex(index+1)
          }}
      </div>
    </div>
  )
}

export default App
