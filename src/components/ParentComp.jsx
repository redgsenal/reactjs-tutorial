import React, { Component, PureComponent } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

export class ParentComp extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello from Parent Component",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				message: "Updated message from Parent Component after 2 seconds",
			});
		}, 2000);
	}

	render() {
		console.log("1 -> Parent Component Rendered"); // This will log every time the state changes
		return (
			<div>
				<h3>{this.state.message}</h3>
				<RegularComp message={this.state.message} />
				<PureComp message={this.state.message} />
			</div>
		);
	}
}

export default ParentComp;
