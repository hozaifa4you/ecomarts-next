import React from "react";

const SidebarSearchBox = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__search-widget">
            <form action="#">
               <input type="text" placeholder="Search" />
               <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
               </button>
            </form>
         </div>
      </div>
   );
};

export { SidebarSearchBox };
