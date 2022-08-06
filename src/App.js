import './App.css';
import React from 'react';

function App() {
    const [state, setState] = React.useState({sum: 0 });
    const changeSum = () => {
      let currentSum = state.sum + 1;
      setState({...state, sum:currentSum});
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{state.sum}</p>
        <button onClick={changeSum} > Add 1 </button>
      </header>
    </div>
  ); 
    }

export default App;
