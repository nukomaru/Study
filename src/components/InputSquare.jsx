import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

export default class InputSquare extends Component{
  constructor(props){
    super(props)

    this.state = {
      value: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event){
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    return (
      <Paper style={style} zDepth={1}>
        <TextField onChange={this.onChange}/>
        {this.state.value}
      </Paper>
    );
  }
}

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
}
