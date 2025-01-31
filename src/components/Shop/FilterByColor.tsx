import { colorData } from "@/utils/data/shop";
import React from "react";

const FilterByColor = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Filter by Color
            </h3>
         </div>
         <div className="single-sidebar-widget__widget-categories">
            <ul>
               {colorData.map((color) => (
                  <li key={color.id}>
                     <a href="#">
                        <span className="text">
                           <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <circle
                                 cx="9"
                                 cy="9"
                                 r="9"
                                 fill={`${color.svgColor}`}
                              ></circle>
                           </svg>
                           {color.name}
                        </span>
                        <span>{color.qty}</span>
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export { FilterByColor };
