import React, { Component } from "react";

class RefInput extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	focusInput = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} placeholder="Input with createRef" />
			</div>
		);
	}
}

export default RefInput;
