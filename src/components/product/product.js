import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./style";

const truncateText = (text, length) => {
	if (text.length > length) {
		return `${text.substring(0, length)}...`;
	}
	return text;
};

const Product = ({ product }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isInCart, setInCart] = useState(false);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
	};

	const toggleInCart = () => {
		setInCart(!isInCart);
	};

	// const product = {
	// 	title: "New York Pizza",
	// 	newPrice: "7.99$",
	// 	oldPrice: "9.99$",
	// 	description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in magni ut quisquam sequi enim tempore voluptatum repudiandae itaque earum officia, aperiam, iure minus perferendis aspernatur iusto quam omnis aliquid",
	// 	image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	// };

	return (
		<View style={styles.container}>
			<View style={styles.ImgContainer}>
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
				<Text style={styles.description}>{truncateText(product.description, 20)}</Text>
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
