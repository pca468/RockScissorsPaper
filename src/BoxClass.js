import React, { Component } from 'react'

export default class BoxClass extends Component {

  render(props) {

    let result;
    if(
        this.props.title === "Computer" &&
        this.props.result !== "tie" &&
        this.props.result !==""
    ){
        result = this.props.result === "win" ? "lose" : "win";
    }else {
        result = this.props.result
    }

    if(this.props.title === "Computer"){
        console.log("computer", result)
    }


    return (
        <div className={`box${result}`}>
        <h1>{this.props.title}</h1>
        <h2 data-testid="item-name">{this.props.item && this.props.item.name}</h2>
        <img  
          className='item-img' 
          src={this.props.item && this.props.item.img}
        />
        <h2>{this.props.result}</h2>
      </div>
    )
  }
}
