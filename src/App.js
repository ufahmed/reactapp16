import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';
import WordDisplay from './components/WordDisplay';
import StyledWordDisplay from './components/StyledWordDisplay';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/home" element={<Home/>} />
        <Route  path="/:number" element={<NumberDisplay/>} />
        <Route  path="/:word" element={<WordDisplay/>} />
        <Route  path="/:word/:color/:background" element={<StyledWordDisplay/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;