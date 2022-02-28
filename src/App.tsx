import React, { useEffect } from 'react';
import axios from 'axios';

import ButtmonExample from './example/ButtmonExample';
import InputExample from './example/InputExamplee';
import MenuExample from './example/MenuExample';
import AutoCompleteExample from './example/AutoCompleteExample';
import GridExample from './example/GridExample'
import UploadExample from './example/UploadExample';

function App() {
  // useEffect(() => {
  //   axios.get('http://jsonplaceholder.typicode.com/posts/1')
  //     .then(res => {
  //       console.log(res);

  //     })

  //   axios.post('http://jsonplaceholder.typicode.com/posts', {
  //     title: 'my title',
  //     body: 'hello man'
  //   }).then(res => {
  //     console.log(res);

  //   })
  // })
  return (
    <div className="App">
      {/* <ButtmonExample /> */}
      {/* <MenuExample /> */}
      {/* <InputExample /> */}
      <br />
      {/* <AutoCompleteExample /> */}
      {/* <GridExample /> */}
      <UploadExample />
    </div>
  );
}

export default App;
