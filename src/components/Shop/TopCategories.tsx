import { topCategoryData } from "@/utils/data/shop";

const TopCategories = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Categories
            </h3>
         </div>
         <div className="single-sidebar-widget__shop-widget-categories">
            <ul>
               {topCategoryData.map((category) => (
                  <li key={category}>
                     <a href="shop-left-sidebar.html">
                        <i className="fa-solid fa-chevron-right"></i>
                        {category}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export { TopCategories };
