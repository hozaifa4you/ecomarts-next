const jewelryCategoryData = [
   { id: 1, img: "/images/home-5/category/01.png", category: "RINGS" },
   { id: 2, img: "/images/home-5/category/02.png", category: "NECKLACES" },
   { id: 3, img: "/images/home-5/category/03.png", category: "EARRINGS" },
   { id: 4, img: "/images/home-5/category/04.png", category: "BRACELETS" },
   { id: 5, img: "/images/home-5/category/05.png", category: "WATCHES" },
   { id: 6, img: "/images/home-5/category/01.png", category: "BROOCHES" },
];

const topRatedProductsData = [
   {
      id: 1,
      tag: "NEW",
      img: "/images/home-5/product/01.png",
      category: "Golden ring",
      name: "Elite Whitening Serum",
      price: 99.0,
      offerPrice: 79.0,
   },
   {
      id: 2,
      tag: "SALE",
      img: "/images/home-5/product/02.png",
      category: "Silver necklace",
      name: "Radiant Glow Serum",
      price: 120.0,
      offerPrice: 95.0,
   },
   {
      id: 3,
      tag: "HOT",
      img: "/images/home-5/product/03.png",
      category: "Diamond earrings",
      name: "Luminous Skin Cream",
      price: 150.0,
      offerPrice: 130.0,
   },
   {
      id: 4,
      tag: "NEW",
      img: "/images/home-5/product/04.png",
      category: "Pearl bracelet",
      name: "Hydrating Face Mask",
      price: 80.0,
      offerPrice: 70.0,
   },
   {
      id: 5,
      tag: "SALE",
      img: "/images/home-5/product/05.png",
      category: "Gold watch",
      name: "Revitalizing Eye Cream",
      price: 200.0,
      offerPrice: 180.0,
   },
   {
      id: 6,
      tag: "HOT",
      img: "/images/home-5/product/06.png",
      category: "Platinum brooch",
      name: "Anti-Aging Serum",
      price: 250.0,
      offerPrice: 220.0,
   },
   {
      id: 7,
      tag: "NEW",
      img: "/images/home-5/product/07.png",
      category: "Emerald ring",
      name: "Brightening Cleanser",
      price: 110.0,
      offerPrice: 90.0,
   },
   {
      id: 8,
      tag: "SALE",
      img: "/images/home-5/product/08.png",
      category: "Ruby necklace",
      name: "Soothing Toner",
      price: 130.0,
      offerPrice: 100.0,
   },
];

const brandLogoData = [
   "/images/brand-logo/brand-logo4_1.png",
   "/images/brand-logo/brand-logo4_2.png",
   "/images/brand-logo/brand-logo4_3.png",
   "/images/brand-logo/brand-logo4_4.png",
   "/images/brand-logo/brand-logo4_5.png",
   "/images/brand-logo/brand-logo4_6.png",
   "/images/brand-logo/brand-logo4_1.png",
   "/images/brand-logo/brand-logo4_2.png",
   "/images/brand-logo/brand-logo4_3.png",
];

const newProductsData = [
   {
      id: 1,
      img: "/images/home-5/news/01.jpg",
      name: "Quick and Easy Flaky Pastry for Tasty Breakfast",
      category: "JEWELRY",
   },
   {
      id: 2,
      img: "/images/home-5/news/02.jpg",
      name: "The Ultimate Guide to Choosing the Perfect Necklace",
      category: "JEWELRY",
   },
   {
      id: 3,
      img: "/images/home-5/news/03.jpg",
      name: "Top 10 Earrings Trends for This Season",
      category: "JEWELRY",
   },
];

export type JewelryCategoryType = (typeof jewelryCategoryData)[0];
export type TopRatedProductType = (typeof topRatedProductsData)[0];
export type NewProductType = (typeof newProductsData)[0];
export {
   jewelryCategoryData,
   topRatedProductsData,
   brandLogoData,
   newProductsData,
};
