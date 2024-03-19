import React from 'react'

// 컴포넌트는 항상 대문자로 시작! 그래야 컴포넌트로 인식이 된다.

const Box = (props) => {
    console.log("props :", props)
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      <img  
        className='item-img' 
        src = {props.item && props.item.img}
      />
      <h2>win</h2>
    </div>
  )
}

export default Box
