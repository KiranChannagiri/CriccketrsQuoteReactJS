import React from 'react';
import './App.css';
import {indianCricketTeam} from './data.js'
import Card from './components/Card.jsx';
function App() {
  // console.log(indianCricketTeam);
  return (
    <div className="App">
      <h1 className='title'>Cricket Players Info</h1>
      <div className='UnderLine'></div>
      <Card info={indianCricketTeam}></Card>
    </div>
  );
}
export default App;
