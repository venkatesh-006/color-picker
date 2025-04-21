import './App.css';
import Content from './Content.js';
import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('')
  const [togglecolor, setTogglecolor] = useState(true)
  return (
    <Content color={color} setColor={setColor} togglecolor={togglecolor} setTogglecolor={setTogglecolor} />
  );
}

export default App;
