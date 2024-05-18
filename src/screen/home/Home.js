import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";

import Product from "../../components/product/product";
import AppBar from "../appBar/AppBar";
import Promotions from "../promotions/Promotions";
import ContactBar from "../contactBar/contactBar";

import products from "../../mock/products";
import styles from "./styles";

const INITIAL_LOAD_COUNT = 5;
const LOAD_INCREMENT = 5;

const Tab = createBottomTabNavigator();

const Home = ({ onAutoThemeChange, onDarkThemeChange, textColor, backgroundColor, currentTheme }) => {
	const [searchText, setSearchText] = useState("");
	const [showOnlyNew, setShowOnlyNew] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [itemsToShow, setItemsToShow] = useState(INITIAL_LOAD_COUNT);

	const toggleNewFiltered = () => {
		setShowOnlyNew(!showOnlyNew);
	};

	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

	const displayedProducts = showOnlyNew ? filteredProducts.filter((product) => product.isNew) : filteredProducts;

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
		}, 3000);
	};

	const renderItemComponent = ({ item }) => <Product currentTheme={currentTheme} product={item} />;

	const PromotionsItem = ({ backgroundColor, textColor }) => {
		return <Promotions backgroundColor={backgroundColor} textColor={textColor} />;
	};

	const ProductsItems = ({ backgroundColor, textColor, currentTheme }) => {
		return (
			<View style={{ backgroundColor }}>
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
				<FlatList
					data={displayedProducts.slice(0, itemsToShow)} //
					keyExtractor={() => uuid.v4()}
					refreshing={refreshing}
					onEndReached={handleLoadMore}
					onEndReachedThreshold={0}
					onRefresh={handleRefresh}
					renderItem={renderItemComponent}
					style={{ paddingVertical: 15 }}
				/>
			</View>
		);
	};

	return (
		<NavigationContainer>
			<ContactBar
				email="example@example.com" //
				phone="+123456789"
				sms="+123456789"
				website="https://example.com"
				currentTheme={currentTheme}
			/>
			<Tab.Navigator
				screenOptions={{
					tabBarStyle: {
						backgroundColor,
					},
				}}
				tabBarOptions={{
					showLabel: false,
					activeTintColor: "#ffb568",
				}}
			>
				<Tab.Screen
					name="Products"
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="fast-food" size={size} color={color} /> //
						),
					}}
				>
					{() => ProductsItems({ backgroundColor, textColor, currentTheme })}
				</Tab.Screen>
				<Tab.Screen
					name="Promotions"
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="pricetag" size={size} color={color} /> //
						),
					}}
				>
					{() => PromotionsItem({ backgroundColor, textColor, currentTheme })}
				</Tab.Screen>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Home;
