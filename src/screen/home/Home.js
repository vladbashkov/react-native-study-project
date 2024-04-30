import { View, FlatList } from "react-native";
import { useState } from "react";

import Product from "../../components/product/product";
import AppBar from "../appBar/AppBar";

import products from "../../mock/products";

const Home = () => {
	const [searchText, setSearchText] = useState("");

	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

	return (
		<View>
			<AppBar onSearch={setSearchText} />
			<FlatList data={filteredProducts} keyExtractor={products.title} renderItem={({ item }) => <Product key={item.title} product={item} />} />
		</View>
	);
};

export default Home;
