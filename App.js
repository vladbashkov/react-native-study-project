import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import Home from "./src/screen/home/Home";

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />
			<Home />
		</SafeAreaView>
	);
}
