import React from "react";

const FilterBySize = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Filter by Sizes
            </h3>
         </div>
         <div className="single-sidebar-widget__widget-categories">
            <ul>
               <li>
                  <a href="#">
                     <span className="text">l</span>
                     <span>12</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <span className="text">m</span>
                     <span>8</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <span className="text">s</span>
                     <span>6</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <span className="text">xl</span>
                     <span>7</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <span className="text">xxl</span>
                     <span>4</span>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export { FilterBySize };
