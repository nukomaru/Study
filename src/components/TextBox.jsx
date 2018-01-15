import React from 'react'
const TextBox = (props) => (
  <input type="textbox" value={props.title} onChange={props.onChange}></input>
)

export default TextBox
