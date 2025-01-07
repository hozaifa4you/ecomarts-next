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

export type OfferDataType = (typeof offerData)[0];
export { offerData };
