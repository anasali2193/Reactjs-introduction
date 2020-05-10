import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch';

class App extends React.Component{
  state ={
    mobile : [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        },
        {
          "id": "ghi",
          "name": "gjgjsksk",
          },
    ]
  }
 



  render (){
  return (
    <div className="App">
   <ul> 
   {this.state.mobile.map((mob)=>
   (
      <li key= {mob.id}>{mob.name}{mob.id}</li>
    
    ))}

    </ul>
  <Fetch mobile = {this.state.mobile}/>
    </div>
  );
  }
}

export default App;
