const products = [
	{
		title: "Margherita Pizza",
		price: "$10.99",
		description: "Classic Margherita with tomato, mozzarella, and basil.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Pepperoni Pizza",
		newPrice: "$11.99",
		oldPrice: "$13.99",
		description: "Pizza with pepperoni and extra cheese.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Veggie Pizza",
		newPrice: "$12.99",
		oldPrice: "$14.99",
		description: "Pizza with mushrooms, bell peppers, and onions.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "BBQ Chicken Pizza",
		price: "$14.99",
		description: "Pizza with BBQ sauce and grilled chicken.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Pasta Carbonara",
		newPrice: "$12.49",
		oldPrice: "$14.49",
		description: "Classic pasta with cream, egg, bacon, and parmesan.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Spaghetti Bolognese",
		price: "$13.49",
		description: "Spaghetti with a rich Bolognese sauce.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Fettuccine Alfredo",
		price: "$11.99",
		description: "Fettuccine with creamy Alfredo sauce.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Caesar Salad",
		newPrice: "$8.99",
		oldPrice: "$10.99",
		description: "Classic Caesar salad with romaine lettuce and croutons.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Greek Salad",
		price: "$9.99",
		description: "Salad with feta cheese, olives, and tomatoes.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "House Salad",
		newPrice: "$7.99",
		oldPrice: "$9.99",
		description: "Mixed greens with assorted vegetables.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Garlic Bread",
		price: "$4.99",
		description: "Toasted bread with garlic and butter.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Mozzarella Sticks",
		newPrice: "$6.99",
		oldPrice: "$8.99",
		description: "Fried mozzarella sticks with marinara sauce.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Chicken Wings",
		price: "$10.99",
		description: "Chicken wings with your choice of sauce.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "French Fries",
		price: "$3.99",
		description: "Crispy French fries with ketchup.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Onion Rings",
		newPrice: "$5.49",
		oldPrice: "$6.99",
		description: "Fried onion rings with a crispy coating.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Tiramisu",
		price: "$7.99",
		description: "Classic Italian dessert with coffee and mascarpone cheese.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Cheesecake",
		price: "$6.49",
		description: "Creamy cheesecake with a graham cracker crust.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Brownie",
		newPrice: "$3.99",
		oldPrice: "$5.49",
		description: "Rich chocolate brownie with walnuts.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Chocolate Chip Cookie",
		price: "$1.99",
		description: "Fresh-baked cookie with chocolate chips.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
	{
		title: "Ice Cream Sundae",
		price: "$5.99",
		description: "Vanilla ice cream with chocolate syrup and a cherry on top.",
		image: "https://www.foodandwine.com/thmb/rdvaTR7cfzwgJp6-3Li_p6arVnA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/new-york-pizza-guide-FT-BLOG042-82b23ec2d6c04844a58c6fcedb4ddd43.jpg",
	},
];

export default products;