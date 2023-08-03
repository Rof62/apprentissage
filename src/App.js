import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Menu from './components/Menu';
import Add from './pages/Add';
import List from './pages/List';
import './css/app.css'

function App() {
  const [ technos, setTechnos] = useState([]);

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno)
  }
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add handleAddTechno={handleAddTechno} />} />
      <Route path='/list' element={<List />} />
    </Routes>
    
    </>
  );
}

export default App;
