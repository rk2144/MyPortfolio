import React from 'react';
// Import Home if needed
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home /> {/* Use the Home component if necessary */}
    </div>
  );
}

export default App;
