import { useState } from "react";
import { View, Text, Alert, useColorScheme } from "react-native";
import { CustomPressable } from "../../components/customPressable/customPressable";

import { SearchSection, ThemeModal, FilterModal, FavoriteModal } from "./components/AppBarComponents";
import styles from "./style";

const AppBar = ({ onSearch, onFilter, isFiltered, textColor, onAutoThemeChange, onDarkThemeChange, backgroundColor, currentTheme }) => {
	const [isTextInputOpen, setIsTextInputOpen] = useState(false);
	const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
	const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
	const [isAutoThemeEnabled, setIsAutoThemeEnabled] = useState(true);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [isFavoriteModalOpen, setIsFavoriteModalOpen] = useState(false);

	const toggleTextInput = () => setIsTextInputOpen(!isTextInputOpen);
	const toggleFilterModal = () => setIsFilterModalOpen(!isFilterModalOpen);
	const toggleThemeModal = () => setIsThemeModalOpen(!isThemeModalOpen);
	const toggleFavoriteModal = () => setIsFavoriteModalOpen(!isFavoriteModalOpen);

	const toggleAutoThemeSwitch = () => {
		setIsAutoThemeEnabled(!isAutoThemeEnabled);
		setIsDarkTheme(false);
		onAutoThemeChange();
	};
	const toggleDarkTheme = () => {
		setIsDarkTheme(!isDarkTheme);
		onDarkThemeChange();
	};

	const showAlert = () => {
		Alert.alert("Shopping cart", "Sorry, but there is no shopping cart yet", [{ text: "OK" }, { text: "Return" }]);
	};

	return (
		<View style={styles.AppBar}>
			<SearchSection
				isTextInputOpen={isTextInputOpen} //
				onToggleFavoriteModal={toggleFavoriteModal}
				toggleTextInput={toggleTextInput}
				onSearch={onSearch}
				showAlert={showAlert}
				textColor={textColor}
				currentTheme={currentTheme}
				onToggleFilterModal={toggleFilterModal}
				onToggleThemeModal={toggleThemeModal}
			/>

			<FavoriteModal
				isVisible={isFavoriteModalOpen} //
				onClose={toggleFavoriteModal}
			/>

			<FilterModal
				isVisible={isFilterModalOpen} //
				onClose={toggleFilterModal}
				onFilter={onFilter}
				isFiltered={isFiltered}
			/>

			<ThemeModal
				isVisible={isThemeModalOpen} //
				onClose={toggleThemeModal}
				isAutoThemeEnabled={isAutoThemeEnabled}
				toggleAutoThemeSwitch={toggleAutoThemeSwitch}
				isDarkTheme={isDarkTheme}
				toggleDarkTheme={toggleDarkTheme}
				backgroundColor={backgroundColor}
				textColor={textColor}
			/>
		</View>
	);
};

export default AppBar;
