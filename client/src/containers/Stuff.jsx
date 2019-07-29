import React, { Component } from 'react'
import Button from '../components/Button/counterButton'

class Stuff extends Component {
  state = {
    myFavNumber: 666
  }
  handleIncrement = () => {
    this.setState({myFavNumber: this.state.myFavNumber + 1})
  }
  handleDeccrement = () => {
    this.setState({myFavNumber: this.state.myFavNumber - 1})
  }
  render() {
    return(
      <div>
        <h1>My favorite number is: {this.state.myFavNumber}</h1>
        <Button handleClick={this.handleIncrement}>UP</Button>
       <Button handleClick={this.handleDeccrement}>DOWN</Button>
        
      </div>
    )
  }

}
export default Stuff