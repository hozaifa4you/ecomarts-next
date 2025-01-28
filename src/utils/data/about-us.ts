const teamData = [
   {
      id: 1,
      name: "Alice Johnson",
      img: "/images/team/team-thumb1_1.jpg",
      designation: "CEO",
   },
   {
      id: 2,
      name: "Bob Smith",
      img: "/images/team/team-thumb1_2.jpg",
      designation: "CTO",
   },
   {
      id: 3,
      name: "Charlie Brown",
      img: "/images/team/team-thumb1_3.jpg",
      designation: "CFO",
   },
   {
      id: 4,
      name: "Diana Prince",
      img: "/images/team/team-thumb1_4.jpg",
      designation: "COO",
   },
];

const testimonialData = [
   {
      id: 1,
      name: "Esther Howard",
      designation: "Web Designer",
      reviews:
         "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
      img: "/images/testimonial/testimonialCardThumb2_1.jpg",
   },
   {
      id: 2,
      name: "John Doe",
      designation: "Web Development",
      reviews:
         "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
      img: "/images/testimonial/testimonialCardThumb2_2.jpg",
   },
   {
      id: 3,
      name: "Jane Doe",
      designation: "Software Engineer",
      reviews:
         "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
      img: "/images/testimonial/testimonialCardThumb2_1.jpg",
   },
   {
      id: 4,
      name: "Jane Doe",
      designation: "Software Engineer",
      reviews:
         "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
      img: "/images/testimonial/testimonialCardThumb2_2.jpg",
   },
];

export type TeamType = (typeof teamData)[0];
export type TestimonialType = (typeof testimonialData)[0];
export { teamData, testimonialData };
