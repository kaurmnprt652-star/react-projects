import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data);

  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      
    </div>
  )
}

export default App
