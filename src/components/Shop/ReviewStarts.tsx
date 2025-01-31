import React from "react";

const ReviewStarts = () => {
   return (
      <div className="single-sidebar-widget">
         <div className="single-sidebar-widget__wid-title">
            <h3 className="single-sidebar-widget__wid-title--title">
               Review star
            </h3>
         </div>
         <div className="single-sidebar-widget__categories-list">
            <label className="checkbox-single">
               <span className="checkbox-area">
                  <input type="checkbox" />
                  <span className="checkmark d-center"></span>
                  <span className="star">
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                  </span>
               </span>
               <span className="text-color"> 5 only </span>
            </label>
            <label className="checkbox-single">
               <span className="checkbox-area">
                  <input type="checkbox" />
                  <span className="checkmark d-center"></span>
                  <span className="star">
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-regular fa-star"></i>
                     </a>
                  </span>
               </span>
               <span className="text-color"> 4 & up </span>
            </label>
            <label className="checkbox-single">
               <span className="checkbox-area">
                  <input type="checkbox" />
                  <span className="checkmark d-center"></span>
                  <span className="star">
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                  </span>
               </span>
               <span className="text-color"> 3 & up </span>
            </label>
            <label className="checkbox-single">
               <span className="checkbox-area">
                  <input type="checkbox" />
                  <span className="checkmark d-center"></span>
                  <span className="star">
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                  </span>
               </span>
               <span className="text-color"> 2 & up </span>
            </label>
            <label className="checkbox-single">
               <span className="checkbox-area">
                  <input type="checkbox" />
                  <span className="checkmark d-center"></span>
                  <span className="star">
                     <a href="#!">
                        <i className="fa-solid fa-star"></i>
                     </a>
                  </span>
               </span>
               <span className="text-color"> 1 & up </span>
            </label>
         </div>
      </div>
   );
};

export { ReviewStarts };
