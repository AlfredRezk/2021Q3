import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  componentDidMount() { 
    console.log('Card is Mounted');
  }

  componentDidUpdate() { 
    console.log('Card updated')
  }

  componentWillUnmount() { 
    console.log('Card un-mounted')
  }


  render() {
    return (
      <div className={`card ${this.props.className}`} >{ this.props.children}</div>
    )
  }
}

export default Card