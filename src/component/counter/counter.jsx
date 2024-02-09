import { useState } from "react";

export default function Counter2(){
  const [sugar, setSugar] = useState(0);
  // count :변하는 값,변수 명  / setCount :변경함수 /useState(초기값)
  const handleAdd =()=>{
    setSugar(sugar +1);
  }
  const handleMinus =()=>{
    setSugar(sugar -1);
  }


  return(
<div className='container'>
      <button onClick={handleMinus}>-1</button>
      <p>dfdfdf</p>
      <p className="counter_text">{sugar}</p>
      {/* 변수를 사용하려면 중괄호를 한다 */}
      <button onClick={handleAdd}>+1</button>

    </div>
  );
}