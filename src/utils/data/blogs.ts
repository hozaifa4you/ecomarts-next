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

const blogClassicData = [
   {
      id: 1,
      img: "/images/blog/blog-classic-thumb1_1.jpg",
      date: "15<span>Dec</span>",
      author: "By Admin",
      date2: "15th Dec, 2021",
      title: "Fashion is what you’re offered four times a year by  designers. And style is what you choose",
      shortDesc:
         "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet",
   },
   {
      id: 2,
      img: "/images/blog/blog-classic-thumb1_2.jpg",
      date: "20<span>Nov</span>",
      author: "By Jane Doe",
      date2: "20th Nov, 2021",
      title: "The evolution of technology in the modern world",
      shortDesc:
         "Technology has advanced at an unprecedented pace over the past few decades. From the invention of the internet to the rise of artificial intelligence, the impact of technology on our daily lives is undeniable. This article explores the key milestones in the evolution of technology and its implications for the future.",
   },
   {
      id: 3,
      img: "/images/blog/blog-classic-thumb1_3.jpg",
      date: "10<span>Oct</span>",
      author: "By John Smith",
      date2: "10th Oct, 2021",
      title: "Health and wellness: Tips for a balanced lifestyle",
      shortDesc:
         "Maintaining a healthy lifestyle is essential for overall well-being. This article provides practical tips on how to achieve a balanced lifestyle, including advice on nutrition, exercise, and mental health. Learn how to make small changes that can have a big impact on your health and happiness.",
   },
];

const recentPostData = [
   {
      id: 1,
      img: "/images/blog/blog-recent-thumb1_1.jpg",
      date: "Jan 12, 2025",
      title: "The middle of text all the lorem Ipsum",
   },
   {
      id: 2,
      img: "/images/blog/blog-recent-thumb1_1.jpg",
      date: "Feb 18, 2025",
      title: "Exploring the future of technology",
   },
   {
      id: 3,
      img: "/images/blog/blog-recent-thumb1_1.jpg",
      date: "Mar 25, 2025",
      title: "Tips for a healthier lifestyle",
   },
];

const commentData = [
   {
      id: 1,
      name: "temptics pro",
      date: "March 20, 2023 at 2:37 pm",
      img: "/images/blog/blog-details-autho1.jpg",
      comment:
         "Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis dolor,",
   },
   {
      id: 2,
      name: "john doe",
      date: "April 15, 2023 at 4:12 pm",
      img: "/images/blog/blog-details-autho2.jpg",
      comment:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Integer nec libero venenatis, faucibus libero nec, ultricies mi. Sed at ligula quis est convallis tempor.",
   },
];

export type BlogType = (typeof blogData)[0];
export type BlogClassicType = (typeof blogClassicData)[0];
export type RecentPostType = (typeof recentPostData)[0];
export type CommentType = (typeof commentData)[0];
export { blogData, blogClassicData, recentPostData, commentData };
