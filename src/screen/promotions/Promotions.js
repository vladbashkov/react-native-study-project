import React, { useState, useRef, useEffect } from "react";
import { View, Image, FlatList, useWindowDimensions, Pressable } from "react-native";

import promotionImages from "../../mock/promotionImages";
import styles from "./style";

const Promotions = ({ backgroundColor, textColor }) => {
	const { width } = useWindowDimensions();
	const innerWidth = width - 20;
	const [currentIndex, setCurrentIndex] = useState(0);
	const flatListRef = useRef(null);
	const [isAutoScrolling, setIsAutoScrolling] = useState(true);

	useEffect(() => {
		let interval;
		if (isAutoScrolling) {
			interval = setInterval(() => {
				const nextIndex = (currentIndex + 1) % promotionImages.length;
				flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
				setCurrentIndex(nextIndex);
			}, 5000);
		}

		return () => clearInterval(interval);
	}, [currentIndex, isAutoScrolling]);

	const handleScrollEnd = (event) => {
		const offsetX = event.nativeEvent.contentOffset.x;
		const newIndex = Math.round(offsetX / width);
		if (newIndex !== currentIndex) {
			setCurrentIndex(newIndex);
		}
	};

	const handleLongPress = () => {
		setIsAutoScrolling(false);
	};

	const handleRelease = () => {
		setIsAutoScrolling(true);
	};

	const renderItem = ({ item }) => (
		<Pressable onLongPress={handleLongPress} onPressOut={handleRelease} style={styles.slideWrapper}>
			<View style={[styles.slide, { width: innerWidth }]}>
				<Image source={{ uri: item.img }} style={[styles.image, { width: innerWidth }]} />
			</View>
		</Pressable>
	);

	return (
		<View style={{ backgroundColor, color: textColor, flex: 1 }}>
			<View style={styles.container}>
				<FlatList
					data={promotionImages} //
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item, index) => `slide-${index}`}
					ref={flatListRef}
					onMomentumScrollEnd={handleScrollEnd}
					renderItem={renderItem}
					style={styles.FlatList}
				/>

				<View style={styles.pagination}>
					{promotionImages.map((_, index) => (
						<View
							key={index} //
							style={[styles.dot, currentIndex === index ? styles.activeDot : null]}
						/>
					))}
				</View>
			</View>
		</View>
	);
};

export default Promotions;
