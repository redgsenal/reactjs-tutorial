import React, { Component } from "react";
import FRChildInput from "./FRChildInput";

class FRParentInput extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	clickFocusHandler = () => {
		this.inputRef.current.focus(); // Focus the input element using the ref
	};

	render() {
		return (
			<div>
				<FRChildInput ref={this.inputRef} />
				<button onClick={this.clickFocusHandler}>Focus Input</button>
			</div>
		);
	}
}

export default FRParentInput;
