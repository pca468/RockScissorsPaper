import React from 'react'

// 컴포넌트는 항상 대문자로 시작! 그래야 컴포넌트로 인식이 된다.

const Box = (props) => {
    console.log("props :", props)

  let result;
  if(
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !==""
  ){
    result = props.result === "win" ? "lose" : "win";
  }else {
    result = props.result
  }

  if(props.title === "Computer"){
    console.log("computer", result)
  }

  return (
    <div className={`box${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <img  
        className='item-img' 
        src = {props.item && props.item.img}
      />
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box
