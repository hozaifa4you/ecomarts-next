import React from "react";

const JewelryCategorySection = () => {
   return (
      <section
         className="jewelry-category-section section-padding2 fix"
         id="category"
      >
         <div className="container">
            <div className="row gy-5">
               <div className="section-title text-center style-5">
                  <div className="subtitle">Our Category</div>
                  <h2 className="title">Find Jewelry by Category</h2>
               </div>
               <div className="swiper jewelry-category-slider">
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className="jewelry-category-box">
                           <div className="thumb">
                              <img
                                 src="/images/home-5/category/01.png"
                                 alt="img"
                              />
                           </div>
                           <h4>
                              <a href="shop-details-one.html">RINGS</a>
                           </h4>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="jewelry-category-box">
                           <div className="thumb">
                              <img
                                 src="/images/home-5/category/02.png"
                                 alt="img"
                              />
                           </div>
                           <h4>
                              <a href="shop-details-one.html">RINGS</a>
                           </h4>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="jewelry-category-box">
                           <div className="thumb">
                              <img
                                 src="/images/home-5/category/03.png"
                                 alt="img"
                              />
                           </div>
                           <h4>
                              <a href="shop-details-one.html">RINGS</a>
                           </h4>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="jewelry-category-box">
                           <div className="thumb">
                              <img
                                 src="/images/home-5/category/04.png"
                                 alt="img"
                              />
                           </div>
                           <h4>
                              <a href="shop-details-one.html">RINGS</a>
                           </h4>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="jewelry-category-box">
                           <div className="thumb">
                              <img
                                 src="/images/home-5/category/05.png"
                                 alt="img"
                              />
                           </div>
                           <h4>
                              <a href="shop-details-one.html">RINGS</a>
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { JewelryCategorySection };
