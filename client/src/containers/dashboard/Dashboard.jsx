import React from "react";
import {
	Header,
	BarChart,
	// RankingComponent,
	SmallInfoCard,
} from "../../components";
import { expensesData } from "../../data/expensesData";
import EmailIcon from "@mui/icons-material/Email";

// import { Header } from "../../components";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="Dashboard" subtitle="Welcome!" />
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
						<Typography>Buy Credits +</Typography>
					</Button>
				</Box>
			</Box>
			<Box
				display="grid"
				gridTemplateColumns="repeat(12, 1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.grey[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<SmallInfoCard
						title="12,361"
						subtitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.redAccent[500], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.grey[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<SmallInfoCard
						title="12,361"
						subtitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.redAccent[500], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.grey[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<SmallInfoCard
						title="12,361"
						subtitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.redAccent[500], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				<Box
					gridColumn="span 3"
					backgroundColor={colors.grey[800]}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<SmallInfoCard
						title="12,361"
						subtitle="Emails Sent"
						progress="0.75"
						increase="+14%"
						icon={
							<EmailIcon
								sx={{ color: colors.redAccent[500], fontSize: "26px" }}
							/>
						}
					/>
				</Box>
				{/*ROW 2*/}
				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.grey[800]}
				>
					<Box gridColumn="span 4" backgroundColor={colors.grey[800]}>
						<Typography
							variant="h5"
							fontWeight="600"
							sx={{ padding: "30px 30px 0 30px" }}
						>
							Distribution of Credit Usage
						</Typography>
						<Box height="550px" mt="-20px">
							<Box height="100%">
								<BarChart data={expensesData} />
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
