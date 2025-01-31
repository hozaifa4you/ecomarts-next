const reviewsData = [
   {
      id: 1,
      img: "/images/shop-details/comment-author1.png",
      date: "March 20, 2024 at 2:37 pm",
      comment:
         "Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy",
      author: {
         name: "Masirul Islam",
      },
   },
   {
      id: 2,
      img: "/images/shop-details/comment-author2.png",
      date: "April 15, 2024 at 4:12 pm",
      comment:
         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: {
         name: "John Doe",
      },
   },
];

const productData = [
   {
      id: 1,
      tag: "25% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_1.png",
         w: 138,
         h: 255,
      },
      category: "Winter jacket",
      name: "High-Neck puff jacket",
      price: 79.5,
      offerPrice: 59.5,
   },
   {
      id: 2,
      tag: "30% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_2.png",
         w: 107,
         h: 255,
      },
      category: "Summer dress",
      name: "Floral print dress",
      price: 49.5,
      offerPrice: 34.5,
   },
   {
      id: 3,
      tag: "15% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_3.png",
         w: 198,
         h: 255,
      },
      category: "Casual shirt",
      name: "Checked casual shirt",
      price: 39.5,
      offerPrice: 33.5,
   },
   {
      id: 4,
      tag: "20% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_4.png",
         w: 115,
         h: 255,
      },
      category: "Formal shirt",
      name: "Slim fit formal shirt",
      price: 59.5,
      offerPrice: 47.5,
   },
   {
      id: 5,
      tag: "10% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_5.png",
         w: 138,
         h: 255,
      },
      category: "Jeans",
      name: "Regular fit jeans",
      price: 69.5,
      offerPrice: 62.5,
   },
   {
      id: 6,
      tag: "50% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_6.png",
         w: 169,
         h: 255,
      },
      category: "T-shirt",
      name: "Graphic print t-shirt",
      price: 29.5,
      offerPrice: 14.5,
   },
   {
      id: 7,
      tag: "35% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_7.png",
         w: 212,
         h: 255,
      },
      category: "Sweater",
      name: "Woolen sweater",
      price: 89.5,
      offerPrice: 58.5,
   },
   {
      id: 8,
      tag: "40% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_8.png",
         w: 127,
         h: 255,
      },
      category: "Skirt",
      name: "Pleated skirt",
      price: 49.5,
      offerPrice: 29.5,
   },
   {
      id: 9,
      tag: "45% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_1.png",
         w: 138,
         h: 255,
      },
      category: "Blazer",
      name: "Classic blazer",
      price: 99.5,
      offerPrice: 54.5,
   },
   {
      id: 10,
      tag: "60% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_2.png",
         w: 107,
         h: 255,
      },
      category: "Shorts",
      name: "Denim shorts",
      price: 39.5,
      offerPrice: 15.5,
   },
   {
      id: 11,
      tag: "70% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_3.png",
         w: 198,
         h: 255,
      },
      category: "Jumpsuit",
      name: "Casual jumpsuit",
      price: 79.5,
      offerPrice: 23.5,
   },
   {
      id: 12,
      tag: "55% Off",
      image: {
         url: "/images/best-seller/bestSellerProductThumb2_4.png",
         w: 115,
         h: 255,
      },
      category: "Coat",
      name: "Trench coat",
      price: 129.5,
      offerPrice: 58.5,
   },
];

const topCategoryData = [
   "women’s collections",
   "men’s collections",
   "kid’s collections",
   "accessories",
   "shoes",
];

const colorData = [
   { id: 1, svgColor: "#122F2A", name: "Black", qty: 15 },
   { id: 2, svgColor: "#1DE925", name: "Green", qty: 12 },
   { id: 3, svgColor: "#FC791A", name: "Orange", qty: 8 },
   { id: 4, svgColor: "#F10101", name: "Red", qty: 19 },
   { id: 5, svgColor: "#F0A003", name: "Yellow", qty: 5 },
   { id: 6, svgColor: "#A46810", name: "Brown", qty: 21 },
   { id: 7, svgColor: "white", name: "White", qty: 99 },
];

export type ReviewsType = (typeof reviewsData)[0];
export type ProductType = (typeof productData)[0];
export type ColorType = (typeof colorData)[0];
export { reviewsData, productData, topCategoryData, colorData };
