import React from "react";
import { render } from "react-dom";
import "./App.css";

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
  }

  changeSum = () => {
    let currentSum = this.state.sum + 1;
    this.setState({ sum: currentSum });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.sum}</p>
          <button onClick={this.changeSum}> Add 1 </button>
        </header>
      </div>
    );
  }
}

export default MyApp;
