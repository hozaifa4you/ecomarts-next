import React from "react";

const ProductStatus = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Product Status
            </h3>
         </div>
         <div className="single-sidebar-widget__shop-widget-categories">
            <ul>
               <li>
                  <a href="shop-left-sidebar.html">
                     <i className="fa-solid fa-chevron-right"></i>
                     in stock
                  </a>
               </li>
               <li>
                  <a href="shop-left-sidebar.html">
                     <i className="fa-solid fa-chevron-right"></i>
                     on sale
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export { ProductStatus };
