import React from "react";
import { Text, TextInput, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { CustomModal } from "../../../components/customModal/customModal";
import { CustomPressable } from "../../../components/customPressable/customPressable";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Switch } from "react-native";
import styles from "../style";

export const SearchSection = ({ isTextInputOpen, toggleTextInput, onSearch, showAlert, onToggleFavoriteModal, onToggleFilterModal, textColor, currentTheme, onToggleThemeModal }) => (
	<View style={styles.SearchContainer}>
		{isTextInputOpen && (
			<TextInput
				placeholder="Search product..." //
				onChangeText={onSearch}
				style={currentTheme === "dark" ? styles.TextInputDark : styles.TextInputLight}
			/>
		)}

		<CustomPressable style={styles.favorite} onPress={toggleTextInput}>
			<MaterialIcons name="search" size={24} color={textColor} />
		</CustomPressable>

		<CustomPressable style={styles.favorite} onPress={onToggleFavoriteModal}>
			<AntDesign name="heart" size={24} color="red" />
		</CustomPressable>

		<CustomPressable style={styles.favorite} onPress={showAlert}>
			<AntDesign name="shoppingcart" size={24} color={textColor} />
		</CustomPressable>

		<CustomPressable onPress={onToggleFilterModal}>
			<AntDesign name="filter" size={24} color={textColor} />
		</CustomPressable>

		<CustomPressable onPress={onToggleThemeModal}>
			<AntDesign name="setting" size={24} color={textColor} />
		</CustomPressable>
	</View>
);

export const FavoriteModal = ({ isVisible, onClose }) => (
	<CustomModal isVisible={isVisible} closeOnTextPress={true} styleVariant="Favorite" onClose={onClose}>
		<Text>Close Modal</Text>
	</CustomModal>
);

export const FilterModal = ({ isVisible, onClose, onFilter, isFiltered }) => (
	<CustomModal isVisible={isVisible} styleVariant="Filter" onClose={onClose}>
		<BouncyCheckbox text="Filter" onPress={onFilter} isChecked={isFiltered ? true : false} />
	</CustomModal>
);

export const ThemeModal = ({ isVisible, onClose, isAutoThemeEnabled, toggleAutoThemeSwitch, isDarkTheme, toggleDarkTheme, backgroundColor, textColor }) => (
	<CustomModal isVisible={isVisible} modalStyle={{ backgroundColor }} styleVariant="Favorite" CloseOnTextPress={false} onClose={onClose}>
		<View style={styles.ThemeSettings}>
			<Text style={{ color: textColor }}>Auto theme check</Text>
			<Switch
				trackColor={{ false: "#767577", true: "#ffab49" }}
				thumbColor="#f4f3f4" //
				onValueChange={toggleAutoThemeSwitch}
				value={isAutoThemeEnabled}
			/>
			<Text style={{ color: textColor }}>Dark theme</Text>
			<Switch
				trackColor={{ false: "#767577", true: "#ffab49" }} //
				thumbColor="#f4f3f4"
				onValueChange={toggleDarkTheme}
				value={isDarkTheme}
				disabled={isAutoThemeEnabled}
			/>
		</View>
	</CustomModal>
);
