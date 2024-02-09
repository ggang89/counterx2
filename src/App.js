
import './App.css';


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

  <div className='wrap'>
    <Counter/>
<Counter/>
</div>



    </div>
  );
}

export default App;
