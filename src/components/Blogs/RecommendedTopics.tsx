import Link from "next/link";

const RecommendedTopics = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Recommended Topics
            </h3>
         </div>
         <div className="single-sidebar-widget__blog-widget-categories">
            <div className="single-sidebar-widget__blog-widget-categories--tagcloud">
               <Link href="/blog-classic">Accessories</Link>
               <Link href="/blog-details">Fashion</Link>
               <Link href="/blog-details">Blog</Link>
               <Link href="/blog-details">Life Style</Link>
               <Link href="/blog-details">Tadatheme</Link>
            </div>
         </div>
      </div>
   );
};

export { RecommendedTopics };
