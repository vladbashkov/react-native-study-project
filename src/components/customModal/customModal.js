import { Modal, View, Text, TouchableWithoutFeedback, Pressable } from "react-native";

import { favoriteModal, filterModal } from "./style";

export const CustomModal = ({ isVisible, onClose, children, styleVariant }) => {
	const handleOutsideClick = () => {
		onClose();
	};

	const styles = styleVariant === "Favorite" ? favoriteModal : filterModal;

	return (
		<Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
			<TouchableWithoutFeedback onPress={handleOutsideClick}>
				<View style={styles.modalOverlay}>
					<TouchableWithoutFeedback>
						<View style={styles.modalContent}>
							<Pressable title="Close" onPress={onClose}>
								{children}
							</Pressable>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};
