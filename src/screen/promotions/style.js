import { StyleSheet, useWindowDimensions } from "react-native";

const { width } = useWindowDimensions;
const innerWidth = width - 20;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		height: 300,
	},
	FlatList: {
		marginBottom: 20,
	},
	slideWrapper: {
		paddingHorizontal: 10,
	},
	slide: {
		width: innerWidth,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "orange",
	},
	image: {
		width: innerWidth,
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
