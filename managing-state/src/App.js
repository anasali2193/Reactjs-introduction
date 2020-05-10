import React, { Component } from 'react';
import Game from './Game';
import Score from './Score';
import logo from './logo.svg';
import './App.css';


class App extends Component {
   state = {
    numAnswer: 0,
    numQuestions: 0,
  };

handleAnswer = (answerWasCorrect) =>{
  if (answerWasCorrect){
  this.setState((curState)=> ({
  numAnswer : curState.numAnswer + 1 ,
  }))
  }
  else{
  this.setState((curState) =>({
  numQuestions : curState.numQuestions + 1,
  }));
  }

}
 

  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    <Game handleAnswer ={this.handleAnswer} />
    <Score 
numQuestions ={this.state.numQuestions}
numAnswer = {this.state.numAnswer}
/>
      </div>
    );
  }
}

export default App;
