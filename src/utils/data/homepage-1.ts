import { Icons } from "@/components/Icons";

const marqueeData = [
   "Limited time offer",
   "Gadget 30% Off",
   "10% of products for winter",
   "$5 Off Accessories",
   "50% off clearance sale",
   "Flash sales of up to 90%",
];

const categoryData = [
   { id: 1, category: "I Pad", count: "16 items", svg: Icons.Ipad },
   { id: 2, category: "Laptop", count: "22 items", svg: Icons.Laptop },
   { id: 3, category: "Gadgets", count: "230 items", svg: Icons.Gadgets },
   { id: 4, category: "Plug", count: "32 items", svg: Icons.Gadgets },
   { id: 5, category: "Phone", count: "105 items", svg: Icons.Phone },
   { id: 6, category: "Game", count: "73 items", svg: Icons.Game },
   { id: 7, category: "I Pad", count: "16 items", svg: Icons.Ipad },
   { id: 8, category: "Laptop", count: "22 items", svg: Icons.Laptop },
];

const bestSellerData = [
   {
      id: 1,
      name: "Android phone",
      reviews: "(7)",
      mainPrice: 25,
      offerPrice: 85,
      img: "/images/top-deals-item/topDealsItemThumb1_1.png",
   },
   {
      id: 2,
      name: "VLC Speaker",
      reviews: "(10)",
      mainPrice: 5,
      offerPrice: 8,
      img: "/images/top-deals-item/topDealsItemThumb1_2.png",
   },
   {
      id: 3,
      name: "iPhone 16max pro",
      reviews: "(1.5K)",
      mainPrice: 200,
      offerPrice: 185,
      img: "/images/top-deals-item/topDealsItemThumb1_3.png",
   },
   {
      id: 4,
      name: "Wireless Mouse",
      reviews: "(5.9K)",
      mainPrice: 12,
      offerPrice: 18,
      img: "/images/top-deals-item/topDealsItemThumb1_4.png",
   },
   {
      id: 5,
      name: "Macbook M2",
      reviews: "(1.56K)",
      mainPrice: 1200,
      offerPrice: 1185,
      img: "/images/top-deals-item/topDealsItemThumb1_6.png",
   },
   {
      id: 6,
      name: "Smart Drone Plus",
      reviews: "(2.9K)",
      mainPrice: 800,
      offerPrice: 785,
      img: "/images/top-deals-item/topDealsItemThumb1_5.png",
   },
   {
      id: 7,
      name: "Charging Lights",
      reviews: "(11.3K)",
      mainPrice: 10,
      offerPrice: 7,
      img: "/images/top-deals-item/topDealsItemThumb1_7.png",
   },
   {
      id: 8,
      name: "Smart CC Camera",
      reviews: "(8.6K)",
      mainPrice: 30,
      offerPrice: 27,
      img: "/images/top-deals-item/topDealsItemThumb1_8.png",
   },
];

const featuredProductData = [
   {
      id: 1,
      img: "/images/best-seller/bestSellerProductThumb1_1.png",
      discount: "10% OFF",
      name: "Core i9 laptop",
      reviews: "0 Review",
      price: 531,
      offerPrice: 478,
   },
   {
      id: 2,
      img: "/images/best-seller/bestSellerProductThumb1_2.png",
      discount: "10% OFF",
      name: "Apple i16x",
      reviews: "43 Review",
      price: 321,
      offerPrice: 289,
   },
   {
      id: 3,
      img: "/images/best-seller/bestSellerProductThumb1_3.png",
      discount: "10% OFF",
      name: "Bluetooth Headphones",
      reviews: "43 Review",
      price: 43,
      offerPrice: 39,
   },
   {
      id: 4,
      img: "/images/best-seller/bestSellerProductThumb1_4.png",
      discount: "10% OFF",
      name: "New Smart Watch",
      reviews: "0.54K Review",
      price: 120,
      offerPrice: 108,
   },
   {
      id: 5,
      img: "/images/best-seller/bestSellerProductThumb1_5.png",
      discount: "10% OFF",
      name: "iPhone 16max pro",
      reviews: "99.4K Review",
      price: 1500,
      offerPrice: 1350,
   },
   {
      id: 6,
      img: "/images/best-seller/bestSellerProductThumb1_6.png",
      discount: "10% OFF",
      name: "iMax Headset",
      reviews: "10.11K Review",
      price: 429,
      offerPrice: 386,
   },
   {
      id: 7,
      img: "/images/best-seller/bestSellerProductThumb1_7.png",
      discount: "10% OFF",
      name: "Zezziz Lens",
      reviews: "109K Review",
      price: 12290,
      offerPrice: 11061,
   },
   {
      id: 8,
      img: "/images/best-seller/bestSellerProductThumb1_8.png",
      discount: "10% OFF",
      name: "New Smart Watch",
      reviews: "0.54K Review",
      price: 120,
      offerPrice: 108,
   },
];

export type CategoryType = (typeof categoryData)[0];
export type BestSellerType = (typeof bestSellerData)[0];
export type FeaturedProductType = (typeof featuredProductData)[0];
export { categoryData, marqueeData, bestSellerData, featuredProductData };
