import React from "react";

function ColumnHeaders() {
	const headers = ["Name", "Age", "Gender"];
	return (
		<>
			<thead>
				<tr>
					{headers.map((header, index) => (
						<React.Fragment key={index}>
							<th>{header}</th>
						</React.Fragment>
					))}
				</tr>
			</thead>
		</>
	);
}

export default ColumnHeaders;
