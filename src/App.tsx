import React from 'react';

import Button from './components/Button';
import Menu from './components/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/SubMenu/SubMenu';
const select = (index: string) => {
  console.log(index);
}

function App() {
  return (
    <div className="App">
      {/*  */}
      <div style={{ width: '260px', height: '600px', overflow: 'auto', margin: '20px' }}>
        <Menu selectedIndex='one' onSelect={select} mode="vertical" defaultOpenIndex={['SubMenu1']} className='menu-wrapper'>
          <MenuItem className='item' index="one">one</MenuItem>
          <MenuItem index='two'>two</MenuItem>
          <MenuItem index="three" disabled>three</MenuItem>
          <MenuItem index="four">four</MenuItem>
          <SubMenu index='SubMenu1' title='SubMenu1'>
            <MenuItem index="five">fivefivefivefivefive</MenuItem>
            <MenuItem index="six">sixsixsix</MenuItem>
            <MenuItem index="seven">sevenseven</MenuItem>
            <SubMenu index='SubMenu2' title='SubMenu2'>
              <MenuItem index="eight">eight</MenuItem>
              <MenuItem index="nine">nine</MenuItem>
              <MenuItem index="ten">ten</MenuItem>
              <SubMenu index='SubMenu3' title='SubMenu3'>
                <MenuItem index="eleven">eleven</MenuItem>
                <MenuItem index="twele">twele</MenuItem>
                <MenuItem index="thirteen">thirteen</MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>

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
