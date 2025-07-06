import React from "react";
import Columns from "./Columns";
import ColumnHeaders from "./ColumnHeaders";

function Table() {
	return (
		<table>
			<ColumnHeaders />
			<tbody>
				<tr>
					<Columns />
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
