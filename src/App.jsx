import React from 'react'
import NavBar from './NavBar'
import Body from './Body'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        title: ''
    };
  }

  render(){
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    )
  }

  onChange(event){
    this.setState({title: event.target.value});
  }
}
