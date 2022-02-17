import { Component } from 'react';

export default function logged(InputComponent) { 

  return class enhanced extends Component {

    constructor(props) { 
      super()
    }
    // js code

    componentDidMount() { 
      console.log('Component Mounted')
    }

    render() { 
        return <InputComponent { ...this.props}/>
    }
  };
}

