"use client";

import { createContext, useContext } from "react";

type Theme = {
	colors: {
		primary: string;
		secondary: string;
	};
};

const defaultTheme: Theme = {
	colors: {
		primary: "#128501",
		secondary: "#41021385",
	},
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ProviderContext = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

export const useTheme = () => useContext(ThemeContext);
