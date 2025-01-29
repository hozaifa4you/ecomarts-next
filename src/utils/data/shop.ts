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

export type ReviewsType = (typeof reviewsData)[0];
export { reviewsData };
