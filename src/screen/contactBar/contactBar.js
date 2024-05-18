import React from "react";
import { View, Pressable, Linking } from "react-native";
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";

const ContactBar = ({ email, phone, sms, website, currentTheme }) => {
	const handlePress = (type, value) => {
		if (value) {
			let url;
			switch (type) {
				case "email":
					url = `mailto:${value}`;
					break;
				case "phone":
					url = `tel:${value}`;
					break;
				case "sms":
					url = `sms:${value}`;
					break;
				case "website":
					url = value;
					break;
				default:
					return;
			}
			Linking.openURL(url);
		}
	};

	const iconColor = currentTheme === "dark" ? "#fff" : "#000";

	return (
		<View style={styles.container}>
			<Pressable onPress={() => handlePress("email", email)}>
				<FontAwesome name="envelope" size={24} color={iconColor} />
			</Pressable>

			<Pressable onPress={() => handlePress("phone", phone)}>
				<AntDesign name="phone" size={24} color={iconColor} />
			</Pressable>

			<Pressable onPress={() => handlePress("sms", sms)}>
				<MaterialCommunityIcons name="message-outline" size={24} color={iconColor} />
			</Pressable>

			<Pressable onPress={() => handlePress("website", website)}>
				<AntDesign name="earth" size={24} color={iconColor} />
			</Pressable>
		</View>
	);
};

export default ContactBar;
