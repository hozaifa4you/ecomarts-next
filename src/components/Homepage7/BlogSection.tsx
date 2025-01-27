import Image from "next/image";
import Link from "next/link";

import { blogData, BlogType } from "@/utils/data/homepage-7";

const BlogSection = () => {
   return (
      <section className="blog-section section-padding2 pt-0 fix">
         <div className="container">
            <div className="section-title style-6">
               <div className="subtitle color">Blog</div>
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
      <div className="blog-card-items2 style-2">
         <div className="blog-image">
            <Image width={454} height={274} src={img} alt="img" />
            <ul className="post fashion-post">{category}</ul>
         </div>
         <div className="blog-content">
            <ul className="post-meta style-2">
               <li>
                  <i className="fa-regular fa-user"></i>
                  {author}
               </li>
               <li>
                  <i className="fa-solid fa-calendar-days"></i>
                  {date}
               </li>
            </ul>
            <h3>
               <Link
                  href="/blog-details"
                  dangerouslySetInnerHTML={{ __html: title }}
               ></Link>
            </h3>
            <a href="blog-details.html" className="theme-btn-2 style-2">
               Read More
               <i className="fa-solid fa-arrow-up-right"></i>
            </a>
         </div>
      </div>
   );
};

export { BlogSection };
