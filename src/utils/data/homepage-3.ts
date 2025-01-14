const introData = [
   {
      id: 1,
      subtitle: "100% Organic Product",
      title: "Choose your Healthy Lifestyle",
      description: `Nunc lectus dui, ultricies id orci ac, condimentum posuere sapien. <br /> ipsum primis in faucibus orci luctus et ultrices.`,
      img: "/images/intro/introThumb3_1.png",
   },
   {
      id: 2,
      subtitle: "100% Organic Product",
      title: "Choose your Healthy Lifestyle",
      description: `Nunc lectus dui, ultricies id orci ac, condimentum posuere sapien. <br /> ipsum primis in faucibus orci luctus et ultrices.`,
      img: "/images/intro/introThumb3_1.png",
   },
   {
      id: 3,
      subtitle: "100% Organic Product",
      title: "Choose your Healthy Lifestyle",
      description: `Nunc lectus dui, ultricies id orci ac, condimentum posuere sapien. <br /> ipsum primis in faucibus orci luctus et ultrices.`,
      img: "/images/intro/introThumb3_1.png",
   },
];

const categoryCardsData = [
   {
      id: 1,
      name: "Vegetable",
      qty: "16 items",
      icon: "/images/icon/productIcon3_1.svg",
   },
   {
      id: 2,
      name: "Fruits",
      qty: "10 items",
      icon: "/images/icon/productIcon3_2.svg",
   },
   {
      id: 3,
      name: "Dairy",
      qty: "8 items",
      icon: "/images/icon/productIcon3_3.svg",
   },
   {
      id: 4,
      name: "Meat",
      qty: "12 items",
      icon: "/images/icon/productIcon3_4.svg",
   },
   {
      id: 5,
      name: "Bakery",
      qty: "5 items",
      icon: "/images/icon/productIcon3_5.svg",
   },
   {
      id: 6,
      name: "Seafood",
      qty: "7 items",
      icon: "/images/icon/productIcon3_6.svg",
   },
   {
      id: 7,
      name: "Beverages",
      qty: "20 items",
      icon: "/images/icon/productIcon3_1.svg",
   },
   {
      id: 8,
      name: "Snacks",
      qty: "15 items",
      icon: "/images/icon/productIcon3_2.svg",
   },
   {
      id: 9,
      name: "Frozen",
      qty: "9 items",
      icon: "/images/icon/productIcon3_3.svg",
   },
   {
      id: 10,
      name: "Pantry",
      qty: "18 items",
      icon: "/images/icon/productIcon3_4.svg",
   },
   {
      id: 11,
      name: "Health",
      qty: "11 items",
      icon: "/images/icon/productIcon3_5.svg",
   },
];

const trendyProductData = [
   {
      id: 1,
      img: "/images/trendy/trendyCardThumb3_1.png",
      name: "Cheddar Fries",
      price: "USD 13.00",
   },
   {
      id: 2,
      img: "/images/trendy/trendyCardThumb3_2.png",
      name: "A Organic Avocado",
      price: "USD 20.00",
   },
   {
      id: 3,
      img: "/images/trendy/trendyCardThumb3_3.png",
      name: "Broccoli Organic",
      price: "USD 4.55",
   },
   {
      id: 4,
      img: "/images/trendy/trendyCardThumb3_4.png",
      name: "Broccoli Farms",
      price: "USD 1.99",
   },
   {
      id: 5,
      img: "/images/trendy/trendyCardThumb3_5.png",
      name: "Fresh Orange",
      price: "USD 9.99",
   },
   {
      id: 6,
      img: "/images/trendy/trendyCardThumb3_6.png",
      name: "Apricot Fruit",
      price: "USD 18.75",
   },
   {
      id: 7,
      img: "/images/trendy/trendyCardThumb3_7.png",
      name: "Pink Sugar",
      price: "USD 11.50",
   },
   {
      id: 8,
      img: "/images/trendy/trendyCardThumb3_8.png",
      name: "Read apple",
      price: "USD 96.90",
   },
];

export type IntroDataType = (typeof introData)[0];
export type CategoryCardsDataType = (typeof categoryCardsData)[0];
export type TrendyProductDataType = (typeof trendyProductData)[0];
export { introData, categoryCardsData, trendyProductData };
