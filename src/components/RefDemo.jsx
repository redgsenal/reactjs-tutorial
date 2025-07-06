import React, { Component } from "react";

class RefDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.callBackRef = null;
		this.setCallBackRef = (element) => {
			this.callBackRef = element;
			console.log("Callback ref set: ", this.callBackRef);
		};
	}

	componentDidMount() {
		// Focus the input field when the component mounts
		this.focusInput();
		if (this.callBackRef) {
			console.log("Callback Input field has focus and is ready: ", this.callBackRef);
			this.callBackRef.focus();
		}
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
				<input name="createRefInput" type="text" ref={this.inputRef} placeholder="Input with createRef" />
				<input
					name="callbackRefInput"
					type="text"
					ref={this.setCallBackRef}
					placeholder="Input with CallbackRef is focus"
				/>
				<button onClick={this.focusInput}>Focus Input</button>
				<button onClick={this.showInputValue}>Show Input Value</button>
				<button onClick={this.clearInputValue}>Clear Input Value</button>
			</div>
		);
	}
}

export default RefDemo;
