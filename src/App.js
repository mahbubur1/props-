
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
     {/* <Count></Count> */}
     <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users,setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => res.json())
      .then( data => setUsers(data))
  },[])
  return (
    <div>
      <h2>External Users</h2>
      {
        users.map(user =><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User (props){
  return(
    <div style={{border:'2px solid red',margin:'20px'}}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


// function Count (){
//   const [count,setCount] = useState(100);
//   const increaseCount = () => setCount(count +1);
//   const decreaseCount = () => setCount(count -1);
// return( <div>
//     <h3>Count: {count}</h3>
//     <button onClick={increaseCount}>Increase</button>
//     <button onClick={decreaseCount}>Decrease</button>
//   </div>
// )
// }


export default App;
