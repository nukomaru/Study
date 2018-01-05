import React from 'react'
import Hello from './Hello'
import TextBox from './TextBox'
import NavBar from './NavBar'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        open: false
    };
  }

  render(){
    return (
        <div>
            <NavBar onToggle={() => this.handleToggle()} open={this.state.open}/>
            <Hello title={this.state.title}/>
            <TextBox title={this.state.title} onChange={this.onChange.bind(this)}/>
        </div>
    )
  }

  onChange(event){
    this.setState({title: event.target.value});
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
}
