import { FlatList, TouchableHighlight, Text } from "react-native";
import uuid from "react-native-uuid";
import { useState } from "react";

import Product from "../../components/product/product";
import AppBar from "../appBar/AppBar";
import Promotions from "../promotions/Promotions";
import ContactBar from "../contactBar/contactBar";

import products from "../../mock/products";
import styles from "./styles";

const INITIAL_LOAD_COUNT = 5;
const LOAD_INCREMENT = 5;

const Home = ({ onAutoThemeChange, onDarkThemeChange, textColor, backgroundColor, currentTheme }) => {
	const [searchText, setSearchText] = useState("");
	const [showOnlyNew, setShowOnlyNew] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [promotions, setPromotions] = useState(false);
	const [itemsToShow, setItemsToShow] = useState(INITIAL_LOAD_COUNT);

	const toggleNewFiltered = () => {
		setShowOnlyNew(!showOnlyNew);
	};

	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

	const displayedProducts = showOnlyNew
		? filteredProducts.filter((product) => product.isNew) //
		: filteredProducts;

	const handleRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 2000);
	};

	const handleLoadMore = () => {
		setTimeout(() => {
			if (itemsToShow < displayedProducts.length) {
				setItemsToShow(itemsToShow + LOAD_INCREMENT);
			}
		}, 3000); // Timeout to see the refreshing
	};

	const renderItem = ({ item }) => <Product currentTheme={currentTheme} product={item} />;

	return (
		<>
			<ContactBar
				email="example@example.com" //
				phone="+123456789"
				sms="+123456789"
				website="https://example.com"
				currentTheme={currentTheme}
			/>
			<AppBar
				onSearch={setSearchText} //
				onFilter={toggleNewFiltered}
				isFiltered={showOnlyNew}
				textColor={textColor}
				onAutoThemeChange={onAutoThemeChange}
				onDarkThemeChange={onDarkThemeChange}
				backgroundColor={backgroundColor}
				currentTheme={currentTheme}
			/>
			<TouchableHighlight underlayColor="#c6c6c6" style={styles.PromotionButton} onPress={() => setPromotions(!promotions)}>
				<Text style={styles.PromotionButtonText}>{promotions ? "Products" : "Promotions"}</Text>
			</TouchableHighlight>
			{promotions ? (
				<Promotions />
			) : (
				<FlatList
					data={displayedProducts.slice(0, itemsToShow)} //
					keyExtractor={() => uuid.v4()}
					refreshing={refreshing}
					onEndReached={handleLoadMore}
					onEndReachedThreshold={0} // 0 just to check if refreshing
					onRefresh={handleRefresh}
					renderItem={renderItem}
					style={{ paddingTop: 15 }}
				/>
			)}
		</>
	);
};

export default Home;
