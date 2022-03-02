import React, { Component } from 'react'
import CompC from './CompC';

export class CompB extends Component {
  render() {
    return (
			<>
				<p>Component B</p>
        <CompC/>
			</>
		);
  }
}

export default CompB