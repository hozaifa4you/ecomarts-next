const offerData = [
   {
      id: 1,
      img: "/images/offer/offerCardThumb2_1.png",
      offer: "Sale Up to 50% Off",
      title: "The Latest men's",
      subtitle: "trends this season",
   },
   {
      id: 2,
      img: "/images/offer/offerCardThumb2_2.png",
      offer: "Sale Up to 50% Off",
      title: "Big Patterns are",
      subtitle: "Back In Fashion",
   },
];

const bestSellerData = [
   {
      id: 1,
      offer: "25% off",
      img: "/images/best-seller/bestSellerProductThumb2_1.png",
      category: "FASHION BAG",
      name: "High-Neck puff jacket",
      originalPrice: 99.0,
      offerPrice: 79.0,
   },
   {
      id: 2,
      offer: "TRENDING",
      img: "/images/best-seller/bestSellerProductThumb2_2.png",
      category: "FASHION LEGGINGS",
      name: "Relax Fit Leggings",
      originalPrice: 54.0,
      offerPrice: 30.99,
   },
   {
      id: 3,
      offer: "NEW",
      img: "/images/best-seller/bestSellerProductThumb2_3.png",
      category: "RELAX SHIRT",
      name: "Overshirt With Pocket",
      originalPrice: 13.0,
      offerPrice: 22.0,
   },
   {
      id: 4,
      offer: "NEW",
      img: "/images/best-seller/bestSellerProductThumb2_4.png",
      category: "RELAX SHIRT",
      name: "Overshirt With Pocket",
      originalPrice: 13.0,
      offerPrice: 22.0,
   },
   {
      id: 5,
      offer: "25% off",
      img: "/images/best-seller/bestSellerProductThumb2_5.png",
      category: "WINTER HOODIE",
      name: "Rose Printed Hoodie",
      originalPrice: 99.99,
      offerPrice: 88.88,
   },
   {
      id: 6,
      offer: "NEW ITEM",
      img: "/images/best-seller/bestSellerProductThumb2_6.png",
      category: "WINTER HOODIE",
      name: "Overshirt With Pocket",
      originalPrice: 44.99,
      offerPrice: 22.88,
   },
   {
      id: 7,
      offer: "NEW OFFER",
      img: "/images/best-seller/bestSellerProductThumb2_7.png",
      category: "WINTER HOODIE",
      name: "Customize Formal Shirt",
      originalPrice: 50.0,
      offerPrice: 25.0,
   },
   {
      id: 8,
      offer: "55% off",
      img: "/images/best-seller/bestSellerProductThumb2_8.png",
      category: "WINTER HOODIE",
      name: "Rose Printed Hoodie",
      originalPrice: 74.0,
      offerPrice: 70.0,
   },
];

export type OfferDataType = (typeof offerData)[0];
export type BestSellerDataType = (typeof bestSellerData)[0];
export { offerData, bestSellerData };
