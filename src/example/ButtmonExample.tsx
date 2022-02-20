import React from 'react'
import { LeftOutlined, SearchOutlined, ReloadOutlined } from '@ant-design/icons';

import Button from '../components/Button';

export default function ButtmonExample() {
  return (
    <div>
      <br /><br />
      <Button>button</Button>
      <br /><br />
      <Button type='text'>button</Button>
      <br /><br /><Button size='small' type='success' plan onClick={e => { alert('click') }}>button</Button>
      <br /><br /><Button size='large' type="info" plan>button <SearchOutlined /></Button>
      <Button icon={<LeftOutlined />} size='large' type="primary" plan>刷新</Button>
      <br />
      <br />
      <Button size='large' type="info" plan>刷新 <ReloadOutlined /></Button>
      <br /><br /><Button size='large' type="info" >button</Button>
      <br /><br /><Button size='large' type='danger' plan>button</Button>
      <br /><br /><Button size='small' type='danger'>button</Button>
      <br /><br /><Button size='large' type="primary" block>button</Button>
      <br /><br /><Button size='large' type='link' target='_blank' href='http://www.baidu.com'>button</Button>
      <br /><br />
    </div>
  )
}
