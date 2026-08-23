import React from 'react'
import { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    console.log(title);
    console.log(details);

     const copyTask=[...task];
     copyTask.push({title,details})
     setTask(copyTask)
    setTitle('')
    setDetails('')

    const deleteNote=(idx)=>{
    
     copyTask.splice(idx,1)
     setTask(copyTask)
    }
  }
    return (
    <div className='h-screen lg:flex bg-black text-white'>
    
      <form  onSubmit={submitHandler}
       className= 'flex items-start lg:w-1/2 gap-4 p-10  flex-col'  >

    

     
          <h1 className='text-3xl font-bold'>Add Notes</h1>
       
        <input type="text" placeholder='Enter Notes Heading'
         className='px-5 py-2 w-full font-medium outline-none border-2 rounded'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         
        />
        <textarea type="text" 
        className='px-5 h-20 w-full py-2 font-medium border-2 outline-none rounded'
        placeholder='Enter Details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
         }}
        />
        <button className='bg-white w-full active:bg-gray-300 font-medium outline-none text-black px-5 py-2 rounded'>Add Notes</button>
        </form>
        <div className='lg:w-1/2 gap-5 lg:border-l-2 p-10'>
         
          <h1 className='text-4xl font-bold '>Recent Notes</h1>
          <div className='flex flex-wrap items-start justify-between gap-5 mt-5 h-[90%] overflow-auto'>
              {task.map(function(elem,idx){

                return <div key={idx} className=" flex justify-between flex-col relative h-52 bg-cover w-40 rounded-xl text-black p-6 py-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk6gl1c4H6iLJzG1HrFDQ5lvrrrKt8aApRxoeRoe7Y4VFghMo73_aiTc&s=10')]">
                   <div>
                  <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                  <p className='mt-2 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }}  className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded font-bold text-white'>delete note</button>
                </div>
              })}
          </div>
        </div>

     </div>
   
  )
}

export default App
