import React from "react";

const PopularCategorySection = () => {
   return (
      <section
         className="popular-category-section section-padding4 fix"
         id="category"
      >
         <div className="container">
            <div className="row gy-5">
               <div className="section-title text-center">
                  <div className="subtitle style4">SHOP BY CATEGORIES</div>
                  <h2 className="title">Popular Categories</h2>
               </div>
               <div className="swiper popular-category-slider">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className="popular-category-items-four">
                           <div className="popular-category-items-four__thumb">
                              <img
                                 src="/images/popular-categories/popularCategories4_1.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="popular-category-items-four__content">
                              <div className="popular-category-items-four__content--title">
                                 {" "}
                                 Eye Shadow{" "}
                              </div>
                              <p>19 Item</p>
                           </div>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="popular-category-items-four">
                           <div className="popular-category-items-four__thumb">
                              <img
                                 src="/images/popular-categories/popularCategories4_2.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="popular-category-items-four__content">
                              <div className="popular-category-items-four__content--title">
                                 {" "}
                                 Face Cream{" "}
                              </div>
                              <p>21 Item</p>
                           </div>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="popular-category-items-four">
                           <div className="popular-category-items-four__thumb">
                              <img
                                 src="/images/popular-categories/popularCategories4_3.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="popular-category-items-four__content">
                              <div className="popular-category-items-four__content--title">
                                 {" "}
                                 Skin Care{" "}
                              </div>
                              <p>25 Item</p>
                           </div>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="popular-category-items-four">
                           <div className="popular-category-items-four__thumb">
                              <img
                                 src="/images/popular-categories/popularCategories4_4.jpg"
                                 alt="thumb"
                              />
                           </div>
                           <div className="popular-category-items-four__content">
                              <div className="popular-category-items-four__content--title">
                                 {" "}
                                 Body Cream{" "}
                              </div>
                              <p>30 Item</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { PopularCategorySection };
