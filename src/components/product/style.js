import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		marginHorizontal: 10,
		borderWidth: 1,
		borderColor: "#000",
		backgroundColor: "#fff",
		borderRadius: 10,
		marginBottom: 10,
		// Тінь для iOS
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.6,
		shadowRadius: 2,
		// Тінь для Android
		elevation: 5,
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
		position: "relative",
	},
	isNew: {
		position: "absolute",
		borderRadius: "9999px",
		zIndex: "100",
		right: -10,
		top: -9,
		width: 25,
		height: 25,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
		borderWidth: 1,
		borderColor: "#ffb568",
	},
	isNewText: {
		fontSize: 8,
		color: "red",
	},
	productImage: {
		width: 80,
		height: 80,
		borderRadius: 10,
	},
});

export default styles;
