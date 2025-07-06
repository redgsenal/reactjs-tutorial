import React, { PureComponent } from "react";

class PureComp extends PureComponent {
	render() {
		console.log("3 -> Pure Component Rendered");
		return (
			<div>
				<h3>Pure Component {this.props.message}</h3>
				<p>This is a pure component.</p>
			</div>
		);
	}
}

export default PureComp;
