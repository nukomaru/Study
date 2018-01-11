import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, MenuItem, Drawer } from 'material-ui'
import {
	Link
} from 'react-router-dom'

export default class NavBar extends Component {
	constructor(props){
		super(props)

		this.state = {
			open: false,
		};
	}

	handleToggle() {
    this.setState({
			open: !this.state.open,
    })
	}

	handleClose() {
		this.setState({
			open: false
		})
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Drawer docked={false} width={200} open={this.state.open} onRequestChange={() => this.handleToggle()}>
						<Link to="/"><MenuItem onClick={() => this.handleClose()}>Home</MenuItem></Link>
						<Link to="/about"><MenuItem onClick={() => this.handleClose()}>About</MenuItem></Link>
						<Link to="/text"><MenuItem onClick={() => this.handleClose()}>Text</MenuItem></Link>
					</Drawer>
				<AppBar title="React Study!!!" onLeftIconButtonClick={() => this.handleToggle()}/>
				</div>
			</MuiThemeProvider>
		);
	}
}