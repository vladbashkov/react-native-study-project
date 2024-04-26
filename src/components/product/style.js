import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		borderWidth: 1,
		borderColor: "#000",
		borderRadius: 10,
		marginBottom: 10,
	},
	details: {
		flex: 2,
		justifyContent: "space-between",
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	priceContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	oldPrice: {
		textDecorationLine: "line-through",
		opacity: 0.5,
	},
	newPrice: {
		color: "red",
		fontWeight: "bold",
		marginRight: 10,
	},
	description: {
		fontSize: 14,
		color: "#666",
	},
	rightSection: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	favoriteButton: {
		alignSelf: "flex-end",
	},
	ImgContainer: {
		marginRight: 16,
	},
	productImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
	},
});

export default styles;
