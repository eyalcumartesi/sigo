import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const BarChart = ({ data /* see data tab */ }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<ResponsiveBar
			data={data}
			keys={["lunch", "breakfast", "dinner"]}
			indexBy="time"
			margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
			padding={0.3}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			defs={[
				{
					id: "lunch",
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: "dinner",
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
				{
					id: "breakfast",
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			fill={[
				{
					id: "lunch",
				},
				{
					id: "dinner",
				},
				{
					id: "breakfast",
				},
			]}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}

			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: "time",
				legendPosition: "middle",
				legendOffset: 32,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				// legend: "food",
				// legendPosition: "middle",
				// legendOffset: -40,
			}}
			colors={{ scheme: "red_grey" }}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={colors.whiteAccent[900]}
			legends={[
				{
					dataFrom: "keys",
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: "hover",
							style: {
								itemOpacity: 1,
							},
						},
					],
				},
			]}
			role="application"
			ariaLabel="Nivo bar chart demo"
			barAriaLabel={(e) =>
				e.id + ": " + e.formattedValue + " in country: " + e.indexValue
			}
		/>
	);
};

export default BarChart;
