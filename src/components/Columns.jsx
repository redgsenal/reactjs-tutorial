import React from "react";

function Columns() {
	const items = ["John Doe", "40", "Male"];
	return (
		<React.Fragment>
			{items.map((item, index) => (
				<td key={index}>{item}</td> // Using map to create table cells dynamically
			))}
		</React.Fragment>
	);
}

export default Columns;
