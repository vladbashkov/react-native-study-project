import { View, FlatList } from "react-native";
import { useState } from "react";

import Product from "../../components/product/product";
import AppBar from "../appBar/AppBar";

import products from "../../mock/products";

const Home = () => {
	const [searchText, setSearchText] = useState("");
	const [showOnlyNew, setShowOnlyNew] = useState(false);

	const toggleNewFiltered = () => {
		setShowOnlyNew(!showOnlyNew);
	};

	const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));

	const displayedProducts = showOnlyNew ? filteredProducts.filter((product) => product.isNew) : filteredProducts;

	return (
		<View>
			<AppBar onSearch={setSearchText} onFilter={toggleNewFiltered} isFiltered={showOnlyNew} />
			<FlatList data={displayedProducts} keyExtractor={(item) => item.title} renderItem={({ item }) => <Product product={item} />} />
		</View>
	);
};

export default Home;
