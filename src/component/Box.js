import React from 'react'

// 컴포넌트는 항상 대문자로 시작! 그래야 컴포넌트로 인식이 된다.

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img  className='item-img' src = "https://images.unsplash.com/photo-1586363052121-5ef0f5b1fdb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Npc3NvcnN8ZW58MHx8MHx8fDA%3D"
      />
      <h2>win</h2>
    </div>
  )
}

export default Box
