import { useState } from 'react';
import './App.css';
import Box from './component/Box'

// 1. 박스 2개 (타이틀, 사진정보, 결과값)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라서 테두리 색이 바뀐다. (이기면 - 초록, 지면 - 빨강, 비기면 - 검정)

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
function App() {
const [userSelect, setuserSelect] = useState(null)

  const play = (userChoice) => {
    setuserSelect(choice[userChoice])
  }

  return (
    <div>
      <div className='main'>
      <Box title="You" item={userSelect}/>
      <Box title="Computer" />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
