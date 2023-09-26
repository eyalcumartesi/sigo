import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
	TopBar,
	Sidebar,
	Dashboard,
	Employees,
	Credits,
	Settings,
	SignIn,
} from "./containers";
import { Routes, Route } from "react-router-dom";

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route path="/sign-in/*" element={<SignIn />} />
				</Routes>
				<div className="app">
					<Sidebar />
					<main className="content">
						<TopBar />

						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/employees" element={<Employees />} />
							<Route path="/credits" element={<Credits />} />
							<Route path="/settings" element={<Settings />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
