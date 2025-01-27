import Image from "next/image";
import Link from "next/link";

import { blogData, BlogType } from "@/utils/data/homepage-6";

const BlogSection = () => {
   return (
      <section className="blog-section section-padding2 pt-0 fix">
         <div className="container">
            <div className="section-title style-6 text-center">
               <div className="subtitle">Blog</div>
               <h2 className="title">Stay updated with our latest posts</h2>
            </div>
            <div className="row">
               {blogData.map((blog) => (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={blog.id}>
                     <BlogCard {...blog} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

const BlogCard = ({ author, category, date, img, title }: BlogType) => {
   return (
      <div className="blog-card-items2">
         <div className="blog-image">
            <Image width={455} height={370} src={img} alt="img" />
            <ul className="post">
               <li>
                  <i className="fa-solid fa-calendar-days"></i>
               </li>
               <li>{date}</li>
            </ul>
         </div>
         <div className="blog-content">
            <ul className="post-meta">
               <li>
                  <i className="fa-regular fa-user"></i>
                  {author}
               </li>
               <li>
                  <i className="fa-solid fa-tag"></i>
                  {category}
               </li>
            </ul>
            <h3>
               <Link
                  href="/blog-details"
                  dangerouslySetInnerHTML={{ __html: title }}
               ></Link>
            </h3>
            <Link href="/blog-details" className="theme-btn-2 mt-3">
               Read More
            </Link>
         </div>
      </div>
   );
};

export { BlogSection };
