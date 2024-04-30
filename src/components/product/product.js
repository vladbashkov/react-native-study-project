import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";

const Product = ({ product }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isInCart, setInCart] = useState(false);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};

	const toggleInCart = () => {
		setInCart(!isInCart);
	};

	return (
		<View style={styles.container}>
			<View style={styles.ImgContainer}>
				{product.new ? (
					<View style={styles.isNew}>
						<Text style={styles.isNewText}>New</Text>
					</View>
				) : (
					""
				)}
				<Image source={{ uri: product.image }} style={styles.productImage} />
			</View>

			<View style={styles.details}>
				<Text style={styles.title}>{product.title}</Text>
				<View style={styles.priceContainer}>
					{product.price ? (
						<Text style={styles.price}>{product.price}</Text>
					) : (
						<>
							<Text style={styles.newPrice}>{product.newPrice}</Text>
							<Text style={styles.oldPrice}>{product.oldPrice}</Text>
						</>
					)}
				</View>
				<Text style={styles.description}>{`${product.description.substring(0, 20)}...`}</Text>
			</View>

			<View style={styles.rightSection}>
				<Pressable onPress={toggleFavorite} style={styles.favoriteButton}>
					<AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color={isFavorite ? "red" : "black"} />
				</Pressable>

				<Pressable onPress={toggleInCart} style={styles.buyButton}>
					<MaterialCommunityIcons name="cart-outline" size={24} color={isInCart ? "green" : "black"} />
				</Pressable>
			</View>
		</View>
	);
};

export default Product;
