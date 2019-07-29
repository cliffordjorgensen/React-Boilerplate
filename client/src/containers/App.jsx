import React, { Component } from 'react';
import Counter from './Counter'
import Stuff from './Stuff'

class App extends Component {
  
  state = {

  }
  render() {
    
    return (
      <div>
        <Counter />
        <Stuff />
      </div>
    )
  }
}

export default App;
