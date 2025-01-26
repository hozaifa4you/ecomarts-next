const topCategoryData = [
   { id: 1, img: "/images/home-6/product/01.png", name: "Armchair" },
   { id: 2, img: "/images/home-6/product/02.png", name: "Ceiling Fan" },
   { id: 3, img: "/images/home-6/product/03.png", name: "Chandelier" },
   { id: 4, img: "/images/home-6/product/04.png", name: "Coffee Table" },
   { id: 5, img: "/images/home-6/product/05.png", name: "Desk Lamp" },
   { id: 6, img: "/images/home-6/product/06.png", name: "Floor Lamp" },
   { id: 7, img: "/images/home-6/product/07.png", name: "Loveseat" },
   { id: 8, img: "/images/home-6/product/08.png", name: "Nightstand" },
   { id: 9, img: "/images/home-6/product/09.png", name: "Recliner" },
   { id: 10, img: "/images/home-6/product/10.png", name: "Sectional Sofa" },
   { id: 11, img: "/images/home-6/product/11.png", name: "Side Table" },
   { id: 12, img: "/images/home-6/product/12.png", name: "Wall Art" },
];

const featuredProductData = [
   {
      id: 1,
      tag: "Sale 25%",
      img: "/images/home-6/product/13.png",
      name: "Armchair",
      OfferPrice: 14.99,
      price: 20.99,
   },
   {
      id: 2,
      tag: "New Arrival",
      img: "/images/home-6/product/14.png",
      name: "Ceiling Fan",
      OfferPrice: 29.99,
      price: 39.99,
   },
   {
      id: 3,
      tag: "Best Seller",
      img: "/images/home-6/product/15.png",
      name: "Chandelier",
      OfferPrice: 49.99,
      price: 59.99,
   },
   {
      id: 4,
      tag: "Limited Edition",
      img: "/images/home-6/product/16.png",
      name: "Coffee Table",
      OfferPrice: 89.99,
      price: 99.99,
   },
   {
      id: 5,
      tag: "Hot Deal",
      img: "/images/home-6/product/17.png",
      name: "Desk Lamp",
      OfferPrice: 19.99,
      price: 29.99,
   },
   {
      id: 6,
      tag: "Discount 15%",
      img: "/images/home-6/product/18.png",
      name: "Floor Lamp",
      OfferPrice: 34.99,
      price: 40.99,
   },
   {
      id: 7,
      tag: "Special Offer",
      img: "/images/home-6/product/19.png",
      name: "Loveseat",
      OfferPrice: 199.99,
      price: 249.99,
   },
   {
      id: 8,
      tag: "Clearance",
      img: "/images/home-6/product/20.png",
      name: "Nightstand",
      OfferPrice: 59.99,
      price: 69.99,
   },
];

export type TopCategoryType = (typeof topCategoryData)[0];
export type FeaturedProductType = (typeof featuredProductData)[0];
export { topCategoryData, featuredProductData };
