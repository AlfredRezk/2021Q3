import React, { Component } from 'react'

class InputClass extends Component {
  state = { value: '' }

  inputHandler(e) { 
    this.setState({ value: e.target.value });
  }
  
  render() {
    return (
			<>
        <input type="text" onChange={ this.inputHandler.bind(this) } />
        <p>{ this.state.value}</p>
			</>
		);
  }
}

export default InputClass