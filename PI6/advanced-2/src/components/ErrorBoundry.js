import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor() {
    super();
  this.state = { hasError: false };
  
  }
  componentDidCatch(error) { 
    console.log('Catched error')
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {

      return <p>Something went wrong </p>
    }
    return this.props.children
  }
}

export default ErrorBoundry