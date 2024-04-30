import { Pressable, View } from "react-native";

export const CustomPressable = ({ children, onPress }) => {
	return <Pressable onPress={onPress}>{children}</Pressable>;
};
