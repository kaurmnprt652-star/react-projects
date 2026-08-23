import React from 'react'
import { useEffect } from 'react'


const App = () => {

  const[num, setNum] = React.useState(0)
  const[num2, setNum2] = React.useState(100)

  useEffect(function(){
   console.log('useEffect called');
  },[num])
  return (
    <div>
      <h1> num {num}</h1>
      <h1> num2 {num2}</h1>
      <button 
      onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}>
        Hover
      </button>
    </div>
  )
}

export default App
