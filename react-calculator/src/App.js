import './App.css';
import React, { Component, useState } from 'react';

function App() {

  const[display, setDisplay]=useState('0');
  const[input, setInput]=useState('');


  const handleNumberClick = (value) => {
    if (display === '0' || display === 'Error') {
      if (value !== '0' || value === '.') {
        setDisplay(value);
        setInput(value);
      } else if (value === '-' && !input) {
        setDisplay(value);
        setInput(value);
      }
    } else {
      if (value === '.' && input.includes('.')) {
        return;
      }
      setDisplay(display + value);
      setInput(input + value);
    }
  }
  
  

  const handleOperatorClick = (operator) => {
    if (input === '' && operator === '-') {
      setDisplay('-');
      setInput('-');
    } else {
      setInput(input + operator);
      setDisplay(input + operator);
    }
  };



const handleClear = () => {
  setDisplay('0');
  setInput('');
};

const handleEqual = () => {
  try {
    const result = eval(input);
    setDisplay(result);
    setInput(result);
  } catch (error) {
    setDisplay('Error');
    setInput('Error');
  }
};


  return (
    <div className="App">
    <div className="App-header">
      <p>Calculator</p>
      <div id="calculator">
      <div id="display">{display}</div>
        <div id="calc-body">
        <NumberButtons onClearClick={handleClear} onNumberClick={handleNumberClick} />
          <OperatorButtons onOperatorClick={handleOperatorClick} />
        </div>
        <EqualTo onEqualClick={handleEqual} />
      </div>
    </div>
  </div>
);
}

function NumberButtons({ onClearClick, onNumberClick }){
  return(
    <div id="numbers">
          <button className='numbers-class' onClick={() => onNumberClick('7')} id="seven">7</button>
          <button className='numbers-class' onClick={() => onNumberClick('8')} id="eight">8</button>
          <button className='numbers-class' onClick={() => onNumberClick('9')} id="nine">9</button>
          <button className='numbers-class'onClick={() => onNumberClick('4')} id="four">4</button>
          <button className='numbers-class' onClick={() => onNumberClick('5')} id="five">5</button>
          <button className='numbers-class' onClick={() => onNumberClick('6')} id="six">6</button>
          <button className='numbers-class' onClick={() => onNumberClick('1')} id="one">1</button>
          <button className='numbers-class' onClick={() => onNumberClick('2')}id="two">2</button>
          <button className='numbers-class' onClick={() => onNumberClick('3')}id="three">3</button>
          <button className='numbers-class' onClick={() => onNumberClick('0')} id="zero">0</button>
          <button className='numbers-class' onClick={() => onNumberClick('.')} id="decimal">.</button>
          <button className='numbers-class' onClick={onClearClick} id="clear">C</button>
        </div>
  );
}

function OperatorButtons({onOperatorClick}){
  return(
    <div id="operators">
      <button className='operators-class' onClick={() => onOperatorClick('+')} id="add">+</button>
      <button className='operators-class' onClick={() => onOperatorClick('-')} id="subtract">-</button>
      <button className='operators-class' onClick={() => onOperatorClick('*')} id="multiply">X</button>
      <button className='operators-class' onClick={() => onOperatorClick('/')} id="divide">/</button>
    </div>
  );
}



function EqualTo({ onEqualClick }){
  return(
    <button id="equals" onClick={onEqualClick}>=</button>
  )
}

export default App;