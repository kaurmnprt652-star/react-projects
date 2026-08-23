import React from 'react'

const App = () => {

  const user ={
    username:'Manpreet',
    age:21,
    city:'Malout'

  }
localstorage.setItem('user',JSON.stringify(user))
const usera =JSON.parse(localStorage.getItem('user'))
  return (
    <div>
      App
    </div>
  )
}

export default App
