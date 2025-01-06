"use client";
import { useState } from "react";
import Link from "next/link";

const SearchModal = () => {
   const [showSearchModal, setShowSearchModal] = useState(false);

   return (
      <>
         <Link
            onClick={() => setShowSearchModal(true)}
            href="#"
            className="search-trigger search-icon"
         >
            <i className="fal fa-search"></i>
         </Link>
         {showSearchModal && (
            <div className="search-wrap">
               <div className="search-inner">
                  <button onClick={() => setShowSearchModal(false)}>
                     <i
                        className="fas fa-times search-close"
                        id="search-close"
                     ></i>
                  </button>
                  <div className="search-cell">
                     <form method="get">
                        <div className="search-field-holder">
                           <input
                              type="search"
                              className="main-search-input"
                              placeholder="Search..."
                           />
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export { SearchModal };
