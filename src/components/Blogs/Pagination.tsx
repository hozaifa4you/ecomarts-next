import React from "react";

const Pagination = () => {
   return (
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
   );
};

export { Pagination };
