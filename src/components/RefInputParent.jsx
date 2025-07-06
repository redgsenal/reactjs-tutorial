import React, { Component } from "react";
import RefInput from "./RefInput";

class RefInputParent extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	clickFocusHandler = () => {
		this.inputRef.current.focusInput();
	};

	render() {
		return (
			<div>
				<RefInput ref={this.inputRef} />
				<button onClick={this.clickFocusHandler}>Focus Input</button>
			</div>
		);
	}
}

export default RefInputParent;
