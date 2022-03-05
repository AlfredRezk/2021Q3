import React, { Component } from 'react'

export class MyComp extends Component {
  componentDidMount() { 
    throw Error('Some Error');
  }
  
  render() {
    return (
      <div>MyComp</div>
    )
  }
}

export default MyComp