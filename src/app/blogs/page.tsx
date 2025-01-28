import { Breadcrumb } from "@/components/Breadcrumb";
import { Icons } from "@/components/Icons";
import { blogData, BlogType } from "@/utils/data/blogs";
import Image from "next/image";
import Link from "next/link";

const BlogsPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Blogs List" secondaryTitle="Category" />
         <section className="blog-page-section section-padding2 fix">
            <div className="container">
               <div className="blog-wrapper style1">
                  <div className="row">
                     {blogData.map((blog) => (
                        <div className="col-xl-4 col-md-6" key={blog.id}>
                           <BlogCard {...blog} />
                        </div>
                     ))}
                  </div>
               </div>
               <div className="pagination">
                  <a href="#" className="prev">
                     <i className="fa-solid fa-chevron-left"></i>
                  </a>
                  <a href="#" className="page active">
                     01
                  </a>
                  <a href="#" className="page">
                     02
                  </a>
                  <a href="#" className="page">
                     03
                  </a>
                  <a href="#" className="page">
                     04
                  </a>
                  <a href="#" className="next">
                     <i className="fa-solid fa-chevron-right"></i>
                  </a>
               </div>
            </div>
         </section>
      </>
   );
};

const BlogCard = ({ author, category, date, img, title }: BlogType) => {
   return (
      <div className="blog_card_two">
         <div className="blog_card_two__thumb">
            <Image width={455} height={375} src={img} alt="thumb" />
         </div>
         <div className="blog_card_two__content">
            <ul className="blog_card_two__content--post-list d-flex align-items-center">
               <li>
                  {Icons.User} {author}
               </li>
               <li>
                  {Icons.Tag} {category}
               </li>
            </ul>
            <div className="blog_card_two__content--date">
               <ul>
                  <li>
                     {Icons.Calendar} {date}
                  </li>
               </ul>
            </div>
            <h3>
               <Link href="/blog-details">{title}</Link>
            </h3>
            <Link href="/blog-details" className="theme-btn-2 mt-3">
               read More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
         </div>
      </div>
   );
};

export default BlogsPage;
