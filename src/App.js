import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import Home from './pages/Home';
import Menu from './components/Menu';
import Add from './pages/Add';
import List from './pages/List';
import './css/app.css'

function App() {
  const [ technos, setTechnos] = useState([]);
  useEffect(() => {
    console.log('useEffect with []')
  }, []);

  useEffect(() => {
    console.log('useEffect with [technos]')
  }, [technos])

  function handleAddTechno(techno) {
    console.log('handleAddTechno', techno)
    setTechnos([...technos, {...techno, technoid: uuidv4()}])
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id))
  }

  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add handleAddTechno={handleAddTechno} />} />
      <Route path='/list' element={<List technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
    </Routes>
    
    </>
  );
}

export default App;
