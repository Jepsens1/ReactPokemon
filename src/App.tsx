import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import PokemonDashboard from './components/pokemondashboard';
function App() { 
    return (
      <div className="AppDiv">
        <PokemonDashboard ></PokemonDashboard>
      </div>
    );
  }

export default App;
