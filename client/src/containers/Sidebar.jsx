import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Avatar } from "@mui/material";
import logo from "../assets/logo.png";
import Overview from "./Overview";
import Employees from "./Employees";
import Credits from "./Credits";
import Settings from "./Settings";
import { NavLink } from "react-router-dom";

const links = [
	{
		name: "Overview",
		icon: HomeIcon,
		path: "/",
		component: Overview,
	},
	{
		name: "Employees",
		icon: PersonIcon,
		path: "/employees",
		component: Employees,
	},
	{
		name: "Credits",
		icon: AccountBalanceWalletIcon,
		path: "/credits",
		component: Credits,
	},
	{
		name: "Settings",
		icon: SettingsIcon,
		path: "/settings",
		component: Settings,
	},
];

const drawerWidth = 240;

export default function ClippedDrawer() {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, marginBottom: 10 }}
			>
				<Toolbar className="flex items-center gap-4 ">
					<Avatar src={logo} />
					<Typography variant="h6" noWrap component="div">
						Flowmark
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<List>
						{links.map((link) => (
							<NavLink
								to={link.path}
								key={link.name}
								className={({ isActive, isPending }) =>
									isPending ? "text-black" : isActive ? "text-red-600" : ""
								}
							>
								<ListItem disablePadding>
									<ListItemButton>
										<ListItemIcon className="color-red-600">
											{React.createElement(link.icon)}
										</ListItemIcon>
										<ListItemText primary={link.name} />
									</ListItemButton>
								</ListItem>
							</NavLink>
						))}
					</List>
				</Box>
			</Drawer>
		</Box>
	);
}
