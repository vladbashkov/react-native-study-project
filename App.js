import { StatusBar } from "expo-status-bar";
import { SafeAreaView, useColorScheme } from "react-native";

import Home from "./src/screen/home/Home";

export default function App() {
	const colorScheme = useColorScheme();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colorScheme === "dark" ? "#666" : "#fff" }}>
			<StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />
			<Home />
		</SafeAreaView>
	);
}
