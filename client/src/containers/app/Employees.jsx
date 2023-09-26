import * as React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { Header } from "../../components";

const columns = [
	{ field: "id", headerName: "ID", width: 90 },
	{
		field: "firstName",
		headerName: "First name",
		width: 150,
		editable: true,
	},
	{
		field: "lastName",
		headerName: "Last name",
		width: 150,
		editable: true,
	},
	{
		field: "age",
		headerName: "Age",
		type: "number",
		width: 110,
		editable: true,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},
	{
		field: "credits",
		headerName: "Credit Balance",
		type: "number",
		default: 10,
		width: 110,
		editable: true,
	},
];

const rows = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
	{ id: 6, lastName: "Melisandre", firstName: null, age: 150 },
	{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
	{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
	{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
	{ id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
	{ id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Employees() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header
					title="Employees"
					subtitle="Look at all your beautiful employees"
				/>
				<Box>
					<Button
						sx={{
							backgroundColor: colors.redAccent[500],
							color: colors.grey[900],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
							"&:hover": {
								backgroundColor: colors.grey[900],
								color: colors.redAccent[500],
							},
						}}
					>
						Add Employees +
					</Button>
				</Box>
			</Box>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 20,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
				sx={{
					"& .MuiDataGrid-cellCheckbox:hover svg , & .MuiDataGrid-cellCheckbox input[type='checkbox']:checked + svg":
						{
							color: colors.redAccent[300],
							background: colors.redAccent[500],
						},
				}}
			/>
		</Box>
	);
}
