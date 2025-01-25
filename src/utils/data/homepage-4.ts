const introData = [
   {
      id: 1,
      img: "/images/intro/introThumb4_1.png",
      user: `45K <span>user</span>`,
   },
   {
      id: 2,
      img: "/images/intro/introThumb4_1.png",
      user: `45K <span>user</span>`,
   },
   {
      id: 3,
      img: "/images/intro/introThumb4_1.png",
      user: `45K <span>user</span>`,
   },
];

const popularCategoryDate = [
   {
      id: 1,
      img: "/images/popular-categories/popularCategories4_1.jpg",
      name: "Eye Shadow",
      count: "19 Items",
   },
   {
      id: 2,
      img: "/images/popular-categories/popularCategories4_2.jpg",
      name: "Face Cream",
      count: "21 Items",
   },
   {
      id: 3,
      img: "/images/popular-categories/popularCategories4_3.jpg",
      name: "Skin Care",
      count: "25 Items",
   },
   {
      id: 4,
      img: "/images/popular-categories/popularCategories4_4.jpg",
      name: "Body Cream",
      count: "99 Items",
   },
   {
      id: 5,
      img: "/images/popular-categories/popularCategories4_1.jpg",
      name: "Eye Shadow",
      count: "19 Items",
   },
   {
      id: 6,
      img: "/images/popular-categories/popularCategories4_2.jpg",
      name: "Face Cream",
      count: "21 Items",
   },
   {
      id: 7,
      img: "/images/popular-categories/popularCategories4_3.jpg",
      name: "Skin Care",
      count: "25 Items",
   },
   {
      id: 8,
      img: "/images/popular-categories/popularCategories4_4.jpg",
      name: "Body Cream",
      count: "99 Items",
   },
];

const beautyCareProductData = [
   {
      id: 1,
      tag: "25% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_1.png",
         w: 217,
         h: 255,
      },
      category: "FASHION BAG",
      name: "Brightening Face Oil",
      price: 79.55,
      offerPrice: 70.55,
   },
   {
      id: 2,
      tag: "30% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_2.png",
         w: 205,
         h: 255,
      },
      category: "SKIN CARE",
      name: "Hydrating Face Cream",
      price: 89.99,
      offerPrice: 62.99,
   },
   {
      id: 3,
      tag: "15% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_3.png",
         w: 257,
         h: 255,
      },
      category: "MAKEUP",
      name: "Matte Lipstick",
      price: 29.99,
      offerPrice: 25.49,
   },
   {
      id: 4,
      tag: "20% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_4.png",
         w: 268,
         h: 236,
      },
      category: "HAIR CARE",
      name: "Nourishing Shampoo",
      price: 45.0,
      offerPrice: 36.0,
   },
   {
      id: 5,
      tag: "10% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_5.png",
         w: 175,
         h: 255,
      },
      category: "BODY CARE",
      name: "Moisturizing Lotion",
      price: 55.0,
      offerPrice: 49.5,
   },
   {
      id: 6,
      tag: "35% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_6.png",
         w: 135,
         h: 255,
      },
      category: "FRAGRANCE",
      name: "Eau de Parfum",
      price: 120.0,
      offerPrice: 78.0,
   },
   {
      id: 7,
      tag: "50% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_7.png",
         w: 165,
         h: 255,
      },
      category: "ACCESSORIES",
      name: "Makeup Brush Set",
      price: 40.0,
      offerPrice: 20.0,
   },
   {
      id: 8,
      tag: "40% off",
      img: {
         url: "/images/beauty-care/beautyCareProductThumb4_8.png",
         w: 202,
         h: 255,
      },
      category: "SKIN CARE",
      name: "Anti-Aging Serum",
      price: 150.0,
      offerPrice: 90.0,
   },
];

const brandData = [
   "/images/brand-logo/brand-logo4_1.png",
   "/images/brand-logo/brand-logo4_2.png",
   "/images/brand-logo/brand-logo4_3.png",
   "/images/brand-logo/brand-logo4_4.png",
   "/images/brand-logo/brand-logo4_5.png",
   "/images/brand-logo/brand-logo4_6.png",
   "/images/brand-logo/brand-logo4_1.png",
   "/images/brand-logo/brand-logo4_2.png",
];

export type IntroDataType = (typeof introData)[0];
export type PopularCategoryDateType = (typeof popularCategoryDate)[0];
export type BeautyCareProductDataType = (typeof beautyCareProductData)[0];
export { introData, popularCategoryDate, beautyCareProductData, brandData };
