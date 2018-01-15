import React from 'react'
import DropDown from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "○",
      };
    }
  
    handleChange(event) {
      this.setState({value: event.target.textContent})
    }
  
    render() {
      return (
        <DropDown value={this.state.value} onChange={this.handleChange.bind(this)}>
          <MenuItem value={"○"} primaryText="○" />
          <MenuItem value={"×"} primaryText="×" />
        </DropDown>
      )
    }
  }
  