import { View } from "react-native";

import Product from "../../components/product/product";
import products from "../../mock/products";

const Home = () => {
	return (
		<View>
			{products.map((product, index) => {
				return <Product key={index} product={product} />;
			})}
		</View>
	);
};

export default Home;
