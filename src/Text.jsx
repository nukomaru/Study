import React from 'react'
import Hello from './Hello'
import TextBox from './TextBox'

export default class Text extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        title: ''
    };
  }

  render(){
    return (
        <div>
            <Hello title={this.state.title}/>
            <TextBox title={this.state.title} onChange={this.onChange.bind(this)}/>
        </div>
    )
  }

  onChange(event){
    this.setState({title: event.target.value});
  }
}
