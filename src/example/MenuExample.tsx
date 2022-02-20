import React from 'react'

import { AppstoreOutlined } from '@ant-design/icons';

import Menu from '../components/Menu';
import MenuItem from '../components/Menu/MenuItem';
import SubMenu from '../components/Menu/SubMenu/SubMenu';

import { MenuMode } from '../components/Menu/Menu';

const select = (index: string) => {
  console.log(index);
}

const getMenuComp = (mode: MenuMode, style: object = {}) => {
  return (
    <div>
      <Menu selectedIndex='one' mode={mode} style={style} onSelect={select} defaultOpenIndex={['SubMenu1']} className='menu-wrapper'>
        <MenuItem className='item' index="one"><AppstoreOutlined />one</MenuItem>
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
            {/* <SubMenu index='SubMenu3' title='SubMenu3'>
              <MenuItem index="eleven">eleven</MenuItem>
              <MenuItem index="twele">twele</MenuItem>
              <MenuItem index="thirteen">thirteen</MenuItem>
            </SubMenu> */}
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  )
}

const style = { width: '260px', height: '600px', overflow: 'auto', margin: '20px' }
export default function MenuExample() {
  return (
    <div>
      <h2>横向菜单</h2>
      {getMenuComp('horizontal')}
      <h2>纵向菜单</h2>
      {getMenuComp('vertical', style)}
    </div>
  )
}
