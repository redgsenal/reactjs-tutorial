import React from "react";

/* function FRChildInput() {
	return (
		<div>
			<input type="text" />
		</div>
	);
} */

const FRChildInput = React.forwardRef((props, ref) => {
	return (
		<div>
			<input type="text" ref={ref} />
		</div>
	);
});

export default FRChildInput;
