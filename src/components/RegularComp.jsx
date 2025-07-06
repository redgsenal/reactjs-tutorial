import React, { Component } from "react";

class RegularComp extends Component {
	render() {
		console.log("2 ->   Regular Component Rendered");
		return (
			<div>
				<h3>Regular Component {this.props.message}</h3>
				<p>This is a regular component.</p>
			</div>
		);
	}
}

export default RegularComp;
