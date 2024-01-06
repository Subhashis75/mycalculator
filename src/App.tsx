import React from 'react';
import './App.css';
import Calculator from './Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator not working</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
