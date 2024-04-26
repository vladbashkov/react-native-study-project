import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, Text } from "react-native";

import Home from "./src/screen/home/Home";

export default function App() {
	return (
		<SafeAreaView>
			<StatusBar barStyle="dark-content" backgroundColor="#ffffff" translucent={false} />
			<ScrollView style={{ borderTopWidth: 1, borderTopColor: "#ffb568", paddingTop: 10, paddingBottom: 40, paddingHorizontal: 10 }}>
				{/* <Text style={{ color: "black" }}>Hello</Text> */}
				<Home />
			</ScrollView>
		</SafeAreaView>
	);
}
