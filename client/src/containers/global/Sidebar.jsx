import * as React from "react";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const importIcon = (iconName) => {
	const icons = {
		HomeIcon: require("@mui/icons-material/Home").default,
		PersonIcon: require("@mui/icons-material/Person").default,
		AccountBalanceWalletIcon:
			require("@mui/icons-material/AccountBalanceWallet").default,
		SettingsIcon: require("@mui/icons-material/Settings").default,
	};
	return icons[iconName] || null;
};

const links = [
	{
		name: "Dashboard",
		icon: "HomeIcon",
		path: "/",
	},
	{
		name: "Employees",
		icon: "PersonIcon",
		path: "/employees",
	},
	{
		name: "Credits",
		icon: "AccountBalanceWalletIcon",
		path: "/credits",
	},
	{
		name: "Settings",
		icon: "SettingsIcon",
		path: "/settings",
	},
];

const Item = ({ name, path, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const IconComponent = importIcon(icon);

	return (
		<Link to={path} style={{ textDecoration: "none" }}>
			<MenuItem
				active={selected === name}
				style={{
					color: colors.grey[200],
				}}
				icon={IconComponent && <IconComponent />}
				onClick={() => setSelected(name)}
			>
				<Typography>{name}</Typography>
			</MenuItem>
		</Link>
	);
};

function SidebarComponent() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");

	return (
		<Box height={"100%"}>
			<Sidebar
				rootStyles={{
					[`.${sidebarClasses.container}`]: {
						backgroundColor:
							theme.mode === "dark" ? colors.redAccent[800] : colors.grey[800],
						height: "150vh",
					},
				}}
				collapsed={isCollapsed}
			>
				<Menu iconShape="square">
					<MenuItem
						onClick={() => setIsCollapsed(!isCollapsed)}
						icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
						style={{
							margin: "10px 0 20px 0",
							color: colors.grey[100],
						}}
					>
						{!isCollapsed && (
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								ml="15px"
							>
								<Typography variant="h3" color={colors.grey[100]}>
									ADMINS
								</Typography>
								<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
									<MenuOutlinedIcon />
								</IconButton>
							</Box>
						)}
					</MenuItem>
					{!isCollapsed && (
						<Box mb="25px">
							<Box display="flex" justifyContent="center" alignItems="center">
								<img
									alt="profile-user"
									width="100px"
									height="100px"
									src="../../assets/logo.png"
									style={{ cursor: "pointer", borderRadius: "50%" }}
								/>
							</Box>
							<Box textAlign="center">
								<Typography
									variant="h2"
									color={colors.grey[100]}
									fontWeight="bold"
									sx={{ m: "10px 0 0 0" }}
								>
									Eyal Cumartesi
								</Typography>
								<Typography variant="h5" color={colors.redAccent[500]}>
									Company Admin
								</Typography>
							</Box>
						</Box>
					)}
					<Box paddingLeft={isCollapsed ? undefined : "10%"}>
						<Menu
							menuItemStyles={{
								button: {
									[`&.hover`]: {
										backgroundColor: colors.redAccent[500],
										color: colors.grey[200],
									},
								},
								label: ({ active }) => {
									return {
										color: active ? colors.redAccent[500] : colors.grey[200],
										fontWeight: active ? "700" : "400",
									};
								},
								icon: ({ active }) => {
									return {
										color: active ? colors.redAccent[500] : colors.grey[200],
										fontWeight: active ? "700" : "400",
									};
								},
							}}
						>
							{links.map((link) => {
								return (
									<Item
										name={link.name}
										path={link.path}
										icon={link.icon}
										selected={selected}
										setSelected={setSelected}
									/>
								);
							})}
						</Menu>
					</Box>
				</Menu>
			</Sidebar>
		</Box>
	);
}

export default SidebarComponent;
