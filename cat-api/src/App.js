import React from 'react';
import './App.css';
import OneCatContainer from './container/OneCatContainer'
import Nav from './components/Nav'
import CatCarouselContainer from './container/CatCarouselContainer'
function App() {
  return (
    <div className="App container">
    <Nav/>
    <OneCatContainer/>
    <CatCarouselContainer/>
    </div>
  );
}

export default App;
