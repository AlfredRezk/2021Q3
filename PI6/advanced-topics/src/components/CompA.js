import React, { Component } from 'react'
import CompB from './CompB'

export class CompA extends Component {
  render() {
    return (
      <>
        <p>Component A</p>
        <CompB auth={ this.props.auth}/>
      </>
    )
  }
}

export default CompA