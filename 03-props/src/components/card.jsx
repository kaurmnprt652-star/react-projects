import React from 'react'

const card = (props) => {

    console.log(props);
  return (
    
         
      <div className="card">
        <h1>'props.user' 'props.age'</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
       <img src="https://plus.unsplash.com/premium_photo-1777047686475-3640e5190b44?q=80&w=801&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile Image" />
      </div>
    
  )
}

export default card
