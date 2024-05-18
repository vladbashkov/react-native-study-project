import React, { useState, useEffect } from "react";
import { Text, View, Image, Pressable, Share } from "react-native";

import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { lightTheme, darkTheme } from "./style";

const Product = ({ product, currentTheme }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isInCart, setInCart] = useState(false);

	const [styles, setStyles] = useState(currentTheme === "dark" ? darkTheme : lightTheme);

	const handleShare = async () => {
		try {
			const result = await Share.share({
				message: "Текст для поширення",
			});
			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					console.log("Поширення успішне");
				} else {
					console.log("Поширення скасовано");
				}
			} else if (result.action === Share.dismissedAction) {
				console.log("Поширення скасовано");
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	useEffect(() => {
		setStyles(currentTheme === "dark" ? darkTheme : lightTheme);
	}, [currentTheme]);

	const toggleFavorite = () => setIsFavorite(!isFavorite);
	const toggleInCart = () => setInCart(!isInCart);

	const iconsColor = currentTheme === "dark" ? "white" : "black";

	return (
		<View style={styles.container}>
			<View style={styles.ImgContainer}>
				{product.isNew ? (
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
					<AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color={isFavorite ? "red" : iconsColor} />
				</Pressable>

				<Pressable onPress={toggleInCart} style={styles.buyButton}>
					<MaterialCommunityIcons name="cart-outline" size={24} color={isInCart ? "green" : iconsColor} />
				</Pressable>
			</View>

			<Pressable onPress={handleShare} style={styles.shareButton}>
				<MaterialCommunityIcons name="share" size={15} color="#000" />
			</Pressable>
		</View>
	);
};

export default Product;
