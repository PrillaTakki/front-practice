import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

function App() {
  const [clicks, setClicks] = React.useState(0);

  function increaseClicks() {
    setClicks(clicks + 1);
  }

  function reset() {
    setClicks(0);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <RedButton onClick={increaseClicks}>НЕ НАЖИМАТЬ!</RedButton>
        <Counter>И всё же ты нажал {clicks} раз</Counter>
        <BlueButton onClick={reset}> сброс </BlueButton>
      </header>
    </div>
  );
}

export default App;

const BlueButton = styled.button({
  height: 30,
  width: 200,
  backgroundColor: '#0000FF',
  color: '#FFFFFF',
  fontSize: 15,
  fontWeight: 70,
  borderRadius: '5px',
  border: '1px solid #FFFFFF',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#0000FF',
  },

  '&:active': {
    backgroundColor: '#D80000',
  },
});

const RedButton = styled.button({
  height: 200,
  width: 200,
  backgroundColor: '#E80000',
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 700,
  borderRadius: '50%',
  border: '3px solid #FFFFFF',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#F80000',
  },

  '&:active': {
    backgroundColor: '#D80000',
  },
});

const Counter = styled.p({
  fontSize: 24,
  color: '#FFFFFF',
});
