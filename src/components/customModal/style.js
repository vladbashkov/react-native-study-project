import { StyleSheet } from "react-native";

export const favoriteModal = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	modalContent: {
		width: "100%",
		height: "40%",
		padding: 20,
		backgroundColor: "white",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	modalText: {
		fontSize: 16,
		marginBottom: 10,
	},
});

export const filterModal = StyleSheet.create({
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 50,
	},
	modalContent: {
		width: "30%",
		// height: "40%",
		padding: 20,
		backgroundColor: "white",
		// borderRadius: 20,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	modalText: {
		fontSize: 16,
		marginBottom: 10,
	},
});
