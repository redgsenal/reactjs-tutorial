import React, { Component } from "react";
import RefInput from "./RefInput";

// RefInputParent component that uses RefInput and provides a button to focus the input
// This component demonstrates how to use refs in a parent component to control a child component's behavior
// It creates a reference to the RefInput component and calls its focusInput method when the button is clicked
// This is useful for scenarios where you need to programmatically focus an input field or perform other actions on a child component
// The RefInput component itself is a simple input field that uses React's createRef to manage its own input reference
// The parent component, RefInputParent, creates a ref to the RefInput component and provides a button to trigger the focus on the input field
// This pattern is commonly used in React to manage focus, scroll, or other imperative actions on child components
// This approach allows for better separation of concerns, where the parent component handles the logic and the child component handles the UI rendering
// This example showcases how to effectively use refs in React to interact with child components
// Work only on class components, not functional components
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
