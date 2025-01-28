const blogData = [
   {
      id: 1,
      img: "/images/blog/blogThumb2_1.jpg",
      author: "By Admin",
      category: "Business",
      date: "20th Aug, 2021",
      title: "How to Get the Most Out of Your Gizmolab Shopify",
   },
   {
      id: 2,
      img: "/images/blog/blogThumb2_2.jpg",
      author: "By Jane Doe",
      category: "Technology",
      date: "15th Sep, 2021",
      title: "Top 10 Tech Trends in 2021",
   },
   {
      id: 3,
      img: "/images/blog/blogThumb2_3.jpg",
      author: "By John Smith",
      category: "Health",
      date: "10th Oct, 2021",
      title: "The Future of Health and Wellness",
   },
   {
      id: 4,
      img: "/images/blog/blogThumb2_4.jpg",
      author: "By Emily Johnson",
      category: "Travel",
      date: "5th Nov, 2021",
      title: "Top Destinations to Visit in 2022",
   },
   {
      id: 5,
      img: "/images/blog/blogThumb2_1.jpg",
      author: "By Michael Brown",
      category: "Finance",
      date: "25th Dec, 2021",
      title: "How to Manage Your Finances Effectively",
   },
   {
      id: 6,
      img: "/images/blog/blogThumb2_2.jpg",
      author: "By Sarah Wilson",
      category: "Lifestyle",
      date: "1st Jan, 2022",
      title: "New Year, New You: Lifestyle Tips for 2022",
   },
];

export type BlogType = (typeof blogData)[0];
export { blogData };
