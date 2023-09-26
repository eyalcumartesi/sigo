import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
	...(mode === "dark"
		? {
				redAccent: {
					100: "#FCD8D3",
					200: "#FBB0A8",
					300: "#FA887C",
					400: "#F96051",
					500: "#F73825",
					600: "#CC2C1E",
					700: "#982016",
					800: "#6A150F",
					900: "#3C0A07",
				},
				primary: {
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#FFFFFF",
					500: "#FFFFFF",
					600: "#CCCCCC",
					700: "#999999",
					800: "#666666",
					900: "#333333",
				},
				whiteAccent: {
					100: "#FAF9F9",
					200: "#F6F6F5",
					300: "#F2F2F1",
					400: "#EDECEB",
					500: "#E8E6E6",
					600: "#BAB8B8",
					700: "#8D8B8B",
					800: "#605D5D",
					900: "#333131",
				},
				grey: {
					100: "#F6F6F5",
					200: "#EDECEB",
					300: "#E3E2E2",
					400: "#D9D8D8",
					500: "#CFCDCD",
					600: "#A7A6A6",
					700: "#7E7D7D",
					800: "#555353",
					900: "#2C2B2B",
				},
		  }
		: {
				redAccent: {
					100: "#3C0A07",
					200: "#6A150F",
					300: "#982016",
					400: "#CC2C1E",
					500: "#F73825",
					600: "#F96051",
					700: "#FA887C",
					800: "#FBB0A8",
					900: "#F6F6F5",
				},
				primary: {
					100: "#FFFFFF",
					200: "#FFFFFF",
					300: "#FFFFFF",
					400: "#FFFFFF",
					500: "#FFFFFF",
					600: "#CCCCCC",
					700: "#999999",
					800: "#666666",
					900: "#333333",
				},
				whiteAccent: {
					100: "#2C2B2B",
					200: "#555353",
					300: "#7E7D7D",
					400: "#A7A6A6",
					500: "#CFCDCD",
					600: "#D9D8D8",
					700: "#E3E2E2",
					800: "#EDECEB",
					900: "#F6F6F5",
				},
				grey: {
					100: "#2C2B2B",
					200: "#555353",
					300: "#7E7D7D",
					400: "#A7A6A6",
					500: "#CFCDCD",
					600: "#D9D8D8",
					700: "#E3E2E2",
					800: "#EDECEB",
					900: "#F6F6F5",
				},
		  }),
});

export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						// palette values for dark mode
						primary: {
							main: colors.primary[900],
						},
						secondary: {
							main: colors.redAccent[500],
						},
						neutral: {
							dark: colors.grey[700],
							main: colors.grey[500],
							light: colors.grey[100],
						},
						background: {
							default: "#2C2B2B",
						},
				  }
				: {
						// palette values for light mode
						primary: {
							main: colors.primary[100],
						},
						secondary: {
							main: colors.redAccent[500],
						},
						neutral: {
							dark: colors.grey[700],
							main: colors.grey[500],
							light: colors.grey[100],
						},
						background: {
							default: "#fcfcfc",
						},
				  }),
		},
		typography: {
			fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 40,
			},
			h2: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 32,
			},
			h3: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 24,
			},
			h4: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 20,
			},
			h5: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 16,
			},
			h6: {
				fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
				fontSize: 14,
			},
		},
	};
};

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("light");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
