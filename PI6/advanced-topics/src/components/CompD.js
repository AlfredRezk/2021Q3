import React, { Component } from 'react'
import AuthContext from './AuthContext';

export class CompD extends Component {
  // static contextType = AuthContext;    //=> this.context

  render() {
    return (
      <AuthContext.Consumer>{ (ctx) => { 
        return (
        <>
					<p>Component D</p>
					<p>Authentication: {ctx.auth}</p>
				</>
          
        )

      } }
			</AuthContext.Consumer>
		);
  }
}

export default CompD