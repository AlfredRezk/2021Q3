import { Component } from 'react'

class List extends Component {

  state = {
    show: false, 
    list: ['Apple', 'Orange', 'Mango']
  }

  clickHandler() { 
    // this.state.show = !this.state.show   //DON'T DO THIS 
    this.setState((prevState) => ({show: !prevState.show}))
  }

  render() {
  return (
    <>
      <button onClick={ () => this.clickHandler()}> {this.state.show? 'Hide List': 'Show List'}</button> 
      <ul> 
        { this.state.show &&  this.state.list.map((item, index) => <li key={ index.toString()}>{ item}</li>)}
      </ul>
    </>
      
    )
  }
}

export default List