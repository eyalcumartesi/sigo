import React from "react";
import { Card, CardContent, Button, TextField, MenuItem } from "@mui/material";
import { Employees } from "./";

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
		field: "Credit Card",
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
	return (
		<div className="flex flex-col gap-4 ">
			<Card className=" flex flex-col justify-between align-center max-w-2xl max-h-xl p-4">
				<CardContent className="flex gap-2">
					<h1>Credit Balance</h1>
					<h1>$50,000</h1>
				</CardContent>
				<CardContent className="flex flex-col gap-2 w-98">
					<h1>Purchase Credits</h1>
					<CardContent className="flex gap-2 w-full justify-around">
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
					</CardContent>
					<CardContent className="flex gap-6 w-98 self-center">
						<TextField id="admin-email" label="email" variant="outlined" />
						<TextField id="password" label="password" variant="outlined" />
					</CardContent>
					<Button> Purchase Now </Button>
				</CardContent>
			</Card>
			<Card className="flex flex-col w-full h-full p-4">
				<h1>Transaction History</h1>
				<CardContent>
					<Employees />
				</CardContent>
			</Card>
		</div>
	);
};

export default Credits;
