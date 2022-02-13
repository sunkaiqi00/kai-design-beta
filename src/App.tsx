import React from 'react';

import Button from './components/Button';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';

const select = (index: string) => {
  console.log(index);
}

function App() {
  return (
    <div className="App">
      <Menu selectedIndex='one' onSelect={select} className='menu-wrapper'>
        <MenuItem className='item' index="one">one</MenuItem>
        <MenuItem index='two'>two</MenuItem>
        <MenuItem index="three" disabled>three</MenuItem>
        <MenuItem index="four">four</MenuItem>
        <MenuItem index="five">five</MenuItem>
      </Menu>
      <br />
      <Button>button</Button>
      <Button size='small' type='success' className='custom' onClick={e => { alert('click') }}>button</Button>
      <Button size='large' type="info" >button</Button>
      <Button size='small' type='danger' disabled>button</Button>
      <Button size='large' type="primary" >button</Button>
      <Button size='large' type='link' target='_blank' href='http://www.baidu.com'>button</Button>

      <br />
      {/* </Button> */}
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
