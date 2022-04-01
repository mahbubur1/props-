
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      {
        hafejs.map (hafej =><Hafejs name={hafej}></Hafejs> )
      }
    </div>
  );
}
const hafejs = 
  ["H.M Mojibor Rahman","H.M Mahbub","H.M Mokhlis","H.M Mahdi","H.M Mosfik","H.Ms Mahbuba"];

  function Header (){
    return (
  <h1> All Hafeje Quran </h1>
    )
  }

function Hafejs (props) {
  return (
   <div className='Hafejs-Container'>
  <h3>{props.name}</h3>
  </div>
  )
};

export default App;
