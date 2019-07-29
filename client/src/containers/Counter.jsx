import React, { Component } from 'react';
import Button from '../components/Button/counterButton';

class Counter extends Component{
  state ={
    counter: 0
  }

  handleIncrement = () => {
    this.setState({counter: this.state.counter + 1})
  }
  handleDeccrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return(
      <div>
       <h1>Counter</h1>
       <p><h3>Counter :{this.state.counter}</h3></p>
       <Button handleClick={this.handleIncrement}>Increment</Button>
       <Button handleClick={this.handleDeccrement}>Decrement</Button>
    </div>
    )
  }
}

export default Counter