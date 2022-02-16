import React, { Component } from 'react'

class CounterButton extends Component {

  state = { count: 0 };


  clickHandler(e) {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <button onClick={ (e)=> this.clickHandler(e)}> You clicked { this.state.count} times</button>
    )
  }
}

export default CounterButton