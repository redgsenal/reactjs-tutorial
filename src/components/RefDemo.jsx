import React, { Component } from "react";

class RefDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		// Focus the input field when the component mounts
		this.focusInput();
		console.log("RefDemo component mounted: ", this.inputRef);
	}

	focusInput = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<button onClick={this.focusInput}>Focus Input</button>
			</div>
		);
	}
}

export default RefDemo;
