import { Modal, View, TouchableWithoutFeedback, Pressable } from "react-native";

import { favoriteModal, filterModal } from "./style";

export const CustomModal = ({ isVisible, onClose, children, styleVariant, closeOnTextPress, modalStyle }) => {
	const handleOutsideClick = () => {
		onClose();
	};

	const styles = styleVariant === "Favorite" ? favoriteModal : filterModal;

	return (
		<Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
			<TouchableWithoutFeedback onPress={handleOutsideClick}>
				<View style={[styles.modalOverlay]}>
					<View style={[styles.modalContent, modalStyle]}>
						<Pressable title="Close" onPress={closeOnTextPress ? onClose : null}>
							{children}
						</Pressable>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};
