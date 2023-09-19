import React from "react";
import "../../styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SmallInfoCard = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Information
				</Typography>
				<Typography variant="h5" component="div">
					Credit Amount
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					this month
				</Typography>
				<Typography variant="h3">
					$50,000
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Get More Credits</Button>
			</CardActions>
		</Card>
	);
};

export default SmallInfoCard;
