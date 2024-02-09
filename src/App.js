
import './App.css';
import { useState } from 'react';
// ToDo : useState만 중괄호 쓰는 이유

function App() {
//js코드 쓰는 자리
const [count, setCount] = useState(0);
// count :변하는 값  / setCount :변경함수 /useState(초기값)
  return (
    <div>

    <header>
     
        <h1 className='headerText'>
          counterX2
        </h1>
     
    </header>

    <div className='container'>
      <button>-1</button>
      <p className="counter_text">{count}</p>
      {/* 변수를 사용하려면 중괄호를 한다 */}
      <button>+1</button>

    </div>

    </div>
  );
}

export default App;
