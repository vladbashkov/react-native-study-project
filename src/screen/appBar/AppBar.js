import { useState } from "react";
import { View, Text, TextInput, Alert, Switch } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { CustomPressable } from "../../components/customPressable/customPressable";
import { CustomModal } from "../../components/customModal/customModal";

import styles from "./style";

const AppBar = ({ onSearch, onFilter, isFiltered }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isTextInputOpen, setIsTextInputOpen] = useState(false);
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
	const [isAutoThemeEnabled, setIsAutoThemeEnabled] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const toggleTextInput = () => {
		setIsTextInputOpen(!isTextInputOpen);
	};

	const toggleFilterModal = () => {
		setIsFilterModalOpen(!isFilterModalOpen);
	};

	const toggleThemeModal = () => {
		setIsThemeModalOpen(!isThemeModalOpen);
	};

	const toggleAutoThemeSwitch = () => {
		setIsAutoThemeEnabled(!isAutoThemeEnabled);
	};

	const toggleDarkTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const showAlert = () => {
		Alert.alert("Shopping cart", "Sorry, but there is no shopping cart yet", [
			{
				text: "OK",
			},
			{
				text: "Return",
			},
		]);
	};

	return (
		<View style={styles.AppBar}>
			<View style={styles.SearchContainer}>
				{isTextInputOpen && <TextInput placeholder="Search product..." onChangeText={onSearch} style={styles.TextInput} />}

				<CustomPressable style={styles.favorite} onPress={showAlert}>
					<AntDesign name="shoppingcart" size={24} color={"black"} />
				</CustomPressable>

				<CustomPressable style={styles.favorite} onPress={toggleModal}>
					<AntDesign name={"heart"} size={24} color={"red"} />
				</CustomPressable>

				<CustomPressable style={styles.input} onPress={toggleTextInput}>
					<MaterialIcons name="search" size={24} color="black" />
				</CustomPressable>

				<CustomModal isVisible={isModalOpen} styleVariant="Favorite" onClose={toggleModal}>
					<Text style={styles.modalText}>Close modal</Text>
				</CustomModal>

				<CustomModal isVisible={isFilterModalOpen} styleVariant="Filter" onClose={toggleFilterModal}>
					<BouncyCheckbox text="Filter" onPress={onFilter} isChecked={isFiltered ? true : false} />
				</CustomModal>

				<CustomModal isVisible={isThemeModalOpen} styleVariant="Favorite" onClose={toggleThemeModal}>
					<Text>Auto theme check</Text>
					<Switch
						trackColor={{ false: "#767577", true: "#81b0ff" }}
						thumbColor={isAutoThemeEnabled ? "#f5dd4b" : "#f4f3f4"}
						// ios_backgroundColor="#3e3e3e" //
						onValueChange={toggleAutoThemeSwitch}
						value={isAutoThemeEnabled}
					/>
					<Text>Dark theme</Text>
					<Switch
						trackColor={{ false: "#767577", true: "#81b0ff" }}
						// disabled
						thumbColor={isDarkTheme ? "#f5dd4b" : "#f4f3f4"}
						// ios_backgroundColor="#3e3e3e" //
						onValueChange={toggleDarkTheme}
						value={isDarkTheme}
					/>
				</CustomModal>
			</View>
			<View style={styles.FilterContainer}>
				<CustomPressable onPress={toggleFilterModal}>
					<Text>Filter</Text>
				</CustomPressable>
				<CustomPressable onPress={toggleThemeModal}>
					<Text>Theme Switcher</Text>
				</CustomPressable>
			</View>
		</View>
	);
};

export default AppBar;
