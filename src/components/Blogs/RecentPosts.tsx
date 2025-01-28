import Image from "next/image";
import Link from "next/link";

import { recentPostData, RecentPostType } from "@/utils/data/blogs";

const RecentPosts = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Recent Post
            </h3>
         </div>
         <div className="single-sidebar-widget__recent-post-area">
            {recentPostData.map((post) => (
               <RecentPostItem key={post.id} {...post} />
            ))}
         </div>
      </div>
   );
};

const RecentPostItem = ({ date, img, title }: RecentPostType) => {
   return (
      <div className="single-sidebar-widget__recent-post-area__recent-items">
         <div className="single-sidebar-widget__recent-post-area__recent-items--recent-thumb">
            <Image width={70} height={70} src={img} alt="thumb" />
         </div>
         <div className="single-sidebar-widget__recent-post-area__recent-items--recent-content">
            <ul>
               <li>
                  <i className="fa-solid fa-calendar-days"></i>
                  {date}
               </li>
            </ul>
            <h6>
               <Link href="/blog-details">{title}</Link>
            </h6>
         </div>
      </div>
   );
};

export { RecentPosts };
