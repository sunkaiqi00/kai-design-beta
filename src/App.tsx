import React, { useEffect } from 'react';
import axios from 'axios';

import ButtmonExample from './example/ButtmonExample';
import InputExample from './example/InputExamplee';
import MenuExample from './example/MenuExample';
import AutoCompleteExample from './example/AutoCompleteExample';
import GridExample from './example/GridExample'
import UploadExample from './example/UploadExample';
import ProgressExample from './example/ProgressExample';

function App() {
  useEffect(() => {
    // axios.get('http://jsonplaceholder.typicode.com/posts/1')
    //   .then(res => {
    //     console.log(res);
    //   })

    axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      title: 'my title',
      body: 'hello man'
    }).then(res => {
      console.log(res);
    })
  })
  return (
    <div className="App">
      {/* <ButtmonExample /> */}
      {/* <MenuExample /> */}
      {/* <InputExample /> */}
      <br />
      {/* <AutoCompleteExample /> */}
      {/* <GridExample /> */}
      <UploadExample />
      <div style={{ width: '800px' }}>
        <ProgressExample />
      </div>

    </div>
  );
}

export default App;
