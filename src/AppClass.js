import React, { Component } from 'react'
import BoxClass from './BoxClass';



const choice = {
    rock :{
      name :"rock",
      img : "https://images.unsplash.com/photo-1613825432127-cd5c61fa159b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fCVFQiVCMCU5NCVFQyU5QyU4NHxlbnwwfHwwfHx8MA%3D%3D"
  
    },
    scissors :{
      name : "Scissors",
      img : "https://images.unsplash.com/photo-1586363052121-5ef0f5b1fdb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Npc3NvcnN8ZW58MHx8MHx8fDA%3D"
  
    },
    paper: {
      name : "Paper",
      img : "https://images.unsplash.com/photo-1520004434532-668416a08753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhcGVyfGVufDB8fDB8fHww"
  
    }
  }

export default class AppClass extends Component {

    constructor(props){
        super(props)
        this.state={
            userSelect: null,
            computerSelect: null,
            result: ""
        }
    }

    play = (userChoice) => {
        this.setState({userSelect: choice[userChoice]});
        let computerChoice = this.randomChoice()
        this.setState({computerSelect: computerChoice});
        this.setState({result: this.jugement(choice[userChoice], computerChoice)});
    };

    jugement = (user, computer) => {
        console.log(user,computer)

        if(user.name == computer.name){
            return "tie"
          } else if(user.name == "Rock") return computer.name == "Scissors" ? "win" :"lose"
          else if(user.name == "Scissors") return computer.name == "Paper" ? "win" : "lose"
          else if (user.name == "Paper") return computer.name == "Rock" ? "win" : "lose"
    }

    randomChoice = () => {
        let itemArray = Object.keys(choice) // 객체에 키 값만 뽑아서 어레이로 만들어주는 함수다.
        console.log("item array", itemArray)
        let randomItem = Math.floor(Math.random() * itemArray.length)
        let final = itemArray[randomItem]
        return choice[final]
      }
    

      render() {
        const { userSelect, computerSelect, result } = this.state;
      
        return (
          <div>
            <div className='main'>
              <BoxClass title="You" item={userSelect} result={result}/>
              <BoxClass title="Computer" item={computerSelect} result={result} />
            </div>
            <div className='main'>
              <button onClick={() => this.play("scissors")}>가위</button>
              <button onClick={() => this.play("rock")}>바위</button>
              <button onClick={() => this.play("paper")}>보</button>
            </div>
          </div>
        );
      }
}
