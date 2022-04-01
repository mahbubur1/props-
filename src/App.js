
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      {
        hafejs.map(hafej =>
        <Hafejs name={hafej.name} fareg={hafej.fareg}></Hafejs>)
      }
    </div>
  );
}
const hafejs = [
  {name:"H.M Mojibor Rahman",fareg:"30 years ago"},
  {name:"H.M Mahbub",fareg:"10 years ago"},
  {name:"H.M Mokhlis",fareg:"4 years ago"},
  {name:"H.M Mahdi",fareg:"3 years ago"},
  {name:"H.M Mosfik",fareg:"Running"},
  {name:"H.Ms Mahbuba",fareg:"Running after 1 month insallah!"}
];

  function Header (){
    return (
  <h1> All Hafeje Quran </h1>
    )
  }

function Hafejs (props) {
  return (
   <div className='Hafejs-Container'>
  <h3>{props.name}</h3>
  <p>{props.fareg}</p>
  </div>
  )
};

export default App;
