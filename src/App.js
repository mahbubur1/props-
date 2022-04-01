
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
     <Count></Count>
    </div>
  );
}


function Count (){
  const [count,setCount] = useState(100);

  const increaseCount = () => setCount(count +1);
  const decreaseCount = () => setCount(count -1);
return( <div>
    <h1>Assalamo alaikom</h1>
    <h3>Count: {count}</h3>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decreaseCount}>Decrease</button>
  </div>
)
}


export default App;
