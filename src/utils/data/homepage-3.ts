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

export type IntroDataType = (typeof introData)[0];
export type CategoryCardsDataType = (typeof categoryCardsData)[0];
export { introData, categoryCardsData };
