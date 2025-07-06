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

	showInputValue = () => {
		alert(this.inputRef.current.value);
	};

	clearInputValue = () => {
		this.inputRef.current.value = "";
		this.focusInput();
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<button onClick={this.focusInput}>Focus Input</button>
				<button onClick={this.showInputValue}>Show Input Value</button>
				<button onClick={this.clearInputValue}>Clear Input Value</button>
			</div>
		);
	}
}

export default RefDemo;
