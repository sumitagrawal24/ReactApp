import './App.css';
import React from 'react';
import Home from '../src/components/Home';
import AboutMe from '../src/components/AboutMe';
function App() {
  const [flag, setFlage] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
      <div class="sidenav">
      <p>1805351</p>

      <button
        onClick={() => {
          setFlage(true);

        }}
      >
        Home
      </button><br></br>

      <button
        onClick={() => {
          setFlage(false );
        }}
      >
        AboutMe
      </button>

      </div>
      <div class="main">
      
      {flag ? <Home /> : <AboutMe /> }
       </div>
       
      </header>
    </div>
  );
}

export default App;
