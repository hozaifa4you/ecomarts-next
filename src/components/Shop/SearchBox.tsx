import React from "react";

const SearchBox = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__search-widget">
            <form action="#">
               <input type="text" placeholder="search items" />
               <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
               </button>
            </form>
         </div>
      </div>
   );
};

export { SearchBox };
