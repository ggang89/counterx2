
import './App.css';
import Counter2 from './component/counter/counter';

// ToDo : useState만 중괄호 쓰는 이유
import Counter from './component/counter';

function App() {
//js코드 쓰는 자리

  return (
    <div>

    <header>
     
        <h1 className='headerText'>
          counterX2
        </h1>
     
    </header>

  
<Counter/>
<Counter2/>
    </div>
  );
}

export default App;
