import React from 'react'
import Hello from './Hello'
import TextBox from './TextBox'
import NavBar from './NavBar'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
    };
  }

  render(){
    return (
        <div>
            <NavBar />
            <Hello title={this.state.title}/>
            <TextBox title={this.state.title} onChange={this.onChange.bind(this)}/>
        </div>
    )
  }

  onChange(event){
    this.setState({title: event.target.value});
  }
}
