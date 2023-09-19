import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const Past3Months = () => {
	return (
		<div className="flex flex-col">
			<h1> Credit Spending Last 3 Months</h1>
			<BarChart
				xAxis={[
					{
						id: "barCategories",
						data: ["August", "September", "October"],
						scaleType: "band",
					},
				]}
				series={[
					{
						data: [2, 5, 8],
					},
				]}
				width={500}
				height={300}
			/>
		</div>
	);
};

export default Past3Months;
