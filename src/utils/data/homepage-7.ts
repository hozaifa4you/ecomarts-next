const foodCollectionData = [
   {
      id: 1,
      img: "/images/home-7/product/01.png",
      price: 99.0,
      offerPrice: 79.0,
      name: "Beyond With protein and fiber",
   },
   {
      id: 2,
      img: "/images/home-7/product/02.png",
      price: 89.0,
      offerPrice: 69.0,
      name: "Organic Almonds",
   },
   {
      id: 3,
      img: "/images/home-7/product/03.png",
      price: 79.0,
      offerPrice: 59.0,
      name: "Natural Peanut Butter",
   },
   {
      id: 4,
      img: "/images/home-7/product/04.png",
      price: 109.0,
      offerPrice: 89.0,
      name: "Gluten-Free Oats",
   },
   {
      id: 5,
      img: "/images/home-7/product/05.png",
      price: 99.0,
      offerPrice: 79.0,
      name: "Chia Seeds",
   },
   {
      id: 6,
      img: "/images/home-7/product/06.png",
      price: 119.0,
      offerPrice: 99.0,
      name: "Quinoa",
   },
   {
      id: 7,
      img: "/images/home-7/product/07.png",
      price: 69.0,
      offerPrice: 49.0,
      name: "Organic Honey",
   },
   {
      id: 8,
      img: "/images/home-7/product/08.png",
      price: 59.0,
      offerPrice: 39.0,
      name: "Dried Cranberries",
   },
];

const blogData = [
   {
      id: 1,
      category: "Fashion",
      author: "Adam Smith",
      date: "07 May,2024",
      title: "ConCung Good Compact Elite stroller <br /> in dark blue color",
      img: "/images/home-6/news/04.jpg",
   },
   {
      id: 2,
      category: "Health",
      author: "Jane Doe",
      date: "15 June,2024",
      title: "The Benefits of a Plant-Based Diet",
      img: "/images/home-6/news/05.jpg",
   },
   {
      id: 3,
      category: "Lifestyle",
      author: "John Doe",
      date: "22 July,2024",
      title: "10 Tips for a More Sustainable Lifestyle",
      img: "/images/home-6/news/06.jpg",
   },
];

export type FoodCollectionType = (typeof foodCollectionData)[0];
export type BlogType = (typeof blogData)[0];
export { foodCollectionData, blogData };
