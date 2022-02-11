import React from 'react';

import KButton from './components/KButton/KButton';


function App() {
  return (
    <div className="App">
      <KButton />
      {/* </KButton> */}
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <code>let a = 123;</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
