import React from 'react';

import KButton from './components/KButton';


function App() {
  return (
    <div className="App">
      <br />
      <KButton>button</KButton>
      <KButton size='small' type='success' className='custom' onClick={e => { alert('click') }}>button</KButton>
      <KButton size='large' type="info" >button</KButton>
      <KButton size='small' type='danger' disabled>button</KButton>
      <KButton size='large' type="primary" >button</KButton>
      <KButton size='large' type='link' target='_blank' href='http://www.baidu.com'>button</KButton>
      <br />
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
