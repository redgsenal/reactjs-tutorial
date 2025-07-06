import React from "react";

function MemoComp({ message }) {
	console.log("4 -> Memo Component Rendered"); // This will log only when the props change
	return (
		<div>
			<h3>Memo Component {message}</h3>
			<p>This is a memoized component.</p>
		</div>
	);
}

export default React.memo(MemoComp);
