import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { SafeAreaView, useColorScheme, Text } from "react-native";

import Home from "./src/screen/home/Home";

export default function App() {
	const deviceColorScheme = useColorScheme();
	const [isAutoThemeEnabled, setIsAutoThemeEnabled] = useState(true);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const currentTheme = isAutoThemeEnabled
		? deviceColorScheme //
		: isDarkTheme
		? "dark"
		: "light";

	const barStyle = currentTheme === "dark" ? "light" : "dark";
	const backgroundColor = currentTheme === "dark" ? "#333" : "#fff";
	const textColor = currentTheme === "dark" ? "#fff" : "#000";

	useEffect(() => {
		if (isAutoThemeEnabled) {
			setIsDarkTheme(deviceColorScheme === "dark");
		}
	}, [deviceColorScheme, isAutoThemeEnabled]);

	const toggleAutoTheme = () => {
		setIsDarkTheme(false);
		setIsAutoThemeEnabled(!isAutoThemeEnabled);
	};

	const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor }}>
			<StatusBar
				style={barStyle} //
				backgroundColor={backgroundColor}
				translucent={false}
			/>
			<Home
				onAutoThemeChange={toggleAutoTheme} //
				onDarkThemeChange={toggleDarkTheme}
				textColor={textColor}
				backgroundColor={backgroundColor}
				currentTheme={currentTheme}
			/>
		</SafeAreaView>
	);
}
