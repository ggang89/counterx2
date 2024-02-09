import { useState } from "react";
import {CounterText as Cou} from "../counterText"
// ToDo : useState만 중괄호 쓰는 이유
//default 안쓰고 export하면 중괄호 써야함

import "./index.css";

export default function Counter(){
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
    <Cou counter={sugar} />
      {/* 변수를 사용하려면 중괄호를 한다 */}
      <button onClick={handleAdd}>+1</button>

    </div>
  );
}

