import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	AppBar: {
		flexDirection: "column",
		width: "100%",
		paddingVertical: 10,
	},
	SearchContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: 5,
		width: "100%",
		marginBottom: 10,
	},
	TextInput: {
		height: 36,
		flex: 1,
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		opacity: 1.0,
	},
	TextInputHide: {
		opacity: 0,
	},
});

export default styles;
