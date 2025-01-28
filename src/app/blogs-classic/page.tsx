import Image from "next/image";

import { Ad } from "@/components/Blogs/Ad";
import { Pagination } from "@/components/Blogs/Pagination";
import { RecentPosts } from "@/components/Blogs/RecentPosts";
import { RecommendedTopics } from "@/components/Blogs/RecommendedTopics";
import { SidebarSearchBox } from "@/components/Blogs/SidebarSearchBox";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogClassicData, BlogClassicType } from "@/utils/data/blogs";

const BlogClassicPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Blog List" secondaryTitle="Category" />

         <section className="blog-classic-section fix section-padding">
            <div className="container">
               <div className="row g-5">
                  <div className="col-lg-9">
                     <div className="blog-classic-wrapper">
                        {blogClassicData.map((blog) => (
                           <BlogClassicItem {...blog} key={blog.id} />
                        ))}

                        <Pagination />
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="main-sidebar-2">
                        <SidebarSearchBox />
                        <RecentPosts />
                        <RecommendedTopics />
                        <Ad />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

const BlogClassicItem = ({
   author,
   date,
   date2,
   img,
   shortDesc,
   title,
}: BlogClassicType) => {
   return (
      <div className="blog-classic-items">
         <div className="blog-classic-items__blog-thumb">
            <Image src={img} width={1045} height={448} alt="thumb" />
            <div className="blog-classic-items__blog-thumb__post-date">
               <h3
                  className="blog-classic-items__blog-thumb__post-date--title"
                  dangerouslySetInnerHTML={{ __html: date }}
               ></h3>
            </div>
         </div>
         <div className="blog-classic-items__blog-content">
            <ul>
               <li>
                  <i className="fa-regular fa-user"></i>
                  {author}
               </li>
               <li>
                  <i className="fa-solid fa-calendar-days"></i>
                  {date2}
               </li>
            </ul>
            <h3 className="blog-classic-items__blog-content--title">
               <a href="blog-details.html">{title}</a>
            </h3>
            <p className="blog-classic-items__blog-content--subtitle">
               {shortDesc}
            </p>
            <div className="blog-classic-items__blog-content--btn-wrapper d-flex justify-content-between">
               <a className="theme-btn" href="cart.html">
                  Read More
                  <i className="fa-regular fa-arrow-up-right"></i>
               </a>
            </div>
         </div>
      </div>
   );
};

export default BlogClassicPage;
