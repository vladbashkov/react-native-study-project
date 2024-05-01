import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { CustomPressable } from "../../components/customPressable/customPressable";
import { CustomModal } from "../../components/customModal/customModal";

import styles from "./style";

const AppBar = ({ onSearch, onFilter, isFiltered }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isTextInputOpen, setIsTextInputOpen] = useState(false);
	const [isFilterModalOpen, setIsFIlterModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const toggleTextInput = () => {
		setIsTextInputOpen(!isTextInputOpen);
	};

	const toggleFilterModal = () => {
		setIsFIlterModalOpen(!isFilterModalOpen);
	};

	return (
		<View style={styles.AppBar}>
			<View style={styles.SearchContainer}>
				{isTextInputOpen && <TextInput placeholder="Search product..." onChangeText={onSearch} style={styles.TextInput} />}

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
			</View>
			<View style={styles.FilterContainer}>
				<CustomPressable onPress={toggleFilterModal}>
					<Text>Filter</Text>
				</CustomPressable>
			</View>
		</View>
	);
};

export default AppBar;
