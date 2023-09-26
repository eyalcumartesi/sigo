import React from "react";
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
// import { DataGrid } from "@mui/x-data-grid";

const fields = [
	{
		id: 1,
		field: "All Fields",
	},
	{
		id: 1,
		field: "Operations",
	},
	{
		id: 2,
		field: "Finance",
	},
	{
		id: 3,
		field: "Marketing",
	},
	{
		id: 4,
		field: "Sales",
	},
	{
		id: 5,
		field: "HR",
	},
];

const payments = [
	{
		id: 1,
		field: "Credit Box",
	},
	{
		id: 1,
		field: "ACH",
	},
	{
		id: 2,
		field: "Yappy",
	},
];

const Credits = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
				gap: 4,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: 4,
					backgroundColor: colors.redAccent[500],
					color: colors.grey[900],
					padding: 2,
				}}
			>
				<h1>Credit Balance</h1>
				<h1>$50,000</h1>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: 4,
				}}
			>
				<h1>Purchase Credits</h1>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						gap: 4,
					}}
				>
					<TextField
						id="credit-amount"
						label="Credit Amount"
						variant="outlined"
						className="w-48"
					/>
					<TextField
						id="select-field"
						select
						label="Employee Sector"
						defaultValue="All"
						className="w-48"
					>
						{fields.map((option) => (
							<MenuItem key={option.id} value={option.field}>
								{option.field}
							</MenuItem>
						))}
					</TextField>
					<TextField
						id="select-field"
						select
						label="Payment Method"
						defaultValue="All"
						className="w-48"
					>
						{payments.map((option) => (
							<MenuItem key={option.id} value={option.field}>
								{option.field}
							</MenuItem>
						))}
					</TextField>
				</Box>
				<div className="flex gap-6 w-98 self-center">
					<TextField id="admin-email" label="email" variant="outlined" />
					<TextField id="password" label="password" variant="outlined" />
				</div>
				<Button
					sx={{
						padding: 2,
						color: colors.primary[600],
						background: colors.redAccent[500],
						"& .:hover": {
							padding: 2,
							color: colors.primary[600],
							background: colors.redAccent[500],
						},
					}}
				>
					Purchase Now
				</Button>
			</Box>
			{/* <Box className="flex flex-col w-full h-full p-4">
				<h1>Transaction History</h1>
				<Box>
					<DataGrid />
				</Box>
			</Box> */}
		</Box>
	);
};

export default Credits;
