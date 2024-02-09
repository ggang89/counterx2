import "./index.css";

export function CounterText({counter}){
  return(
    <p className="counter_text">{counter}</p>
    // {counter}은 props이다. counterText 컴포넌트를 import한
    //counter 컴포넌트와 연결된다.
  );
  }