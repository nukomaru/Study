import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenuSample extends React.Component {
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
        <DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)}>
            <MenuItem value={"○"} primaryText="○" />
              <MenuItem value={"×"} primaryText="×" />
        </DropDownMenu>
      )
    }
  }
  