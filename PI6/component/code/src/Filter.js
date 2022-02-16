import React, { Component } from 'react'

const dummyList = ["Apple", "Orange", "Mango", "Grapes"];

export class Filter extends Component {

  state = {
    list: dummyList, 
    value:''
  }

  filter(e) {
    this.setState({
			value: e.target.value,
			list: dummyList.filter((item) => item.includes(e.target.value))
		});
  
  }

  render() {
    return (
      <>
        <input type="text" onChange={ this.filter.bind(this) } />
        <ul>
          { this.state.list.map((item, index) => <li key={ index.toString()}>{ item}</li> )}

        </ul>
      </>
    )
  }
}

export default Filter