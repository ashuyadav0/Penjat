import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import ImatgePenjat from './components/imatgepenjat';
import paraules from './components/paraules.json';
import Word from './components/Word';

function App() {
  Math.floor(Math.random()*paraules.length)
  const [errors, setErrors] = useState(0);
  const generateRandomIndex = () => Math.floor(Math.random()*paraules.length);
  const [wordIndex, setWordIndex] = useState(generateRandomIndex());
  const incrementError = () => setErrors(errors+1);
  return (
    <div className="App">
      <header className="App-header">
        <ImatgePenjat errors={errors}/>
        <p>{wordIndex}</p>
        <p>{paraules[wordIndex]}</p>
        <Word word={paraules[wordIndex]}></Word>
        <button onClick={incrementError} disabled={errors>=5}>Incrementar</button>
        
      </header>
    </div>
  );
}

export default App;
