import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";

const restaurants = [
	{
		name: "Aroma",
		logo: logo,
	},
	{
		name: "Aroma",
		logo: logo,
	},
	{
		name: "Aroma",
		logo: logo,
	},
];

export default function RankingComponent() {
	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardContent>
				<Typography variant="h5" className="mb-2">
					Top 3 Restaurants This Month
				</Typography>
				<List className="flex flex-col gap-4">
					{restaurants.map((rest, index) => (
						<ListItem key={rest.name} disablePadding>
							<ListItemButton className="flex gap-4">
								<Typography>{index + 1}.</Typography>
								<Avatar src={rest.logo} />
								<ListItemText primary={rest.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>
	);
}
