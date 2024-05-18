import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 10,
	},
	FlatList: {
		marginBottom: 20,
	},
	slideWrapper: {
		paddingHorizontal: 10,
	},
	slide: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "orange",
		borderRadius: 12,
		padding: 10,
	},
	image: {
		height: 200,
		objectFit: "contain",
	},
	pagination: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	dot: {
		height: 10,
		width: 10,
		borderRadius: 5,
		backgroundColor: "gray",
		margin: 5,
	},
	activeDot: {
		backgroundColor: "orange",
	},
});

export default styles;
