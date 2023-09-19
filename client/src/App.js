import React from "react";
import { Box, Container } from "@mui/material";
import { Sidebar, Overview, Employees, Credits, Settings } from "./containers";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Box className="flex">
			<Sidebar />
			<Container
				sx={{ width: "100%", height: "100%", paddingTop: 15, paddingLeft: 25 }}
			>
				<Routes>
					<Route path="/" element={<Overview />} />
					<Route path="/employees" element={<Employees />} />
					<Route path="/credits" element={<Credits />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;
