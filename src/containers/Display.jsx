import React from 'react'
import InputSquare from '../components/InputSquare'
import { inputText } from '../actions/action'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

let Display = ({dispatch}) => (
  <div>
    <TextField onChange={e => {dispatch(inputText(e.target.value))}} name="textbox"/>
    <Paper style={style} zDepth={1}></Paper>
    <InputSquare />
    <InputSquare />
    <InputSquare />
    <InputSquare />
    <InputSquare />
  </div>
)

Display = connect()(Display)

const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
  display: 'inline-block',
}

export default Display
