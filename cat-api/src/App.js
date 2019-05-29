import React from 'react';
import './App.css';
import OneCatContainer from './container/OneCatContainer'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App container">
    <Nav/>
    <OneCatContainer/>
    </div>
  );
}

export default App;
