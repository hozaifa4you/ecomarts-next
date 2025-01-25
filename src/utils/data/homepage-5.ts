const jewelryCategoryData = [
   { id: 1, img: "/images/home-5/category/01.png", category: "RINGS" },
   { id: 2, img: "/images/home-5/category/02.png", category: "NECKLACES" },
   { id: 3, img: "/images/home-5/category/03.png", category: "EARRINGS" },
   { id: 4, img: "/images/home-5/category/04.png", category: "BRACELETS" },
   { id: 5, img: "/images/home-5/category/05.png", category: "WATCHES" },
   { id: 6, img: "/images/home-5/category/01.png", category: "BROOCHES" },
];

export type JewelryCategoryType = (typeof jewelryCategoryData)[0];
export { jewelryCategoryData };
