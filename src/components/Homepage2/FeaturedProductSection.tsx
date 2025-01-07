import React from "react";

const FeaturedProductSection = () => {
   return (
      <section className="featured-item-section section-padding2 fix">
         <div className="container">
            <div className="featured-item-wrapper style1">
               <div className="row gy-4">
                  <div className="col-xl-4 col-md-6">
                     <div className="featured_item_two">
                        <div className="featured_item_two__content">
                           <span className="featured_item_two__content--subtitle">
                              Hot Fashion
                           </span>
                           <h4 className="featured_item_two__content--title">
                              Buy Now Wear Forever
                           </h4>
                           <p className="featured_item_two__content--text">
                              Accessories Up To 20% Off
                           </p>
                           <div className="btn-wrapper">
                              <a
                                 className="theme-btn style11"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
                           </div>
                        </div>
                        <div className="featured_item_two__thumb">
                           <img
                              src="/images/featured-item/featuredItemThumb2_1.png"
                              alt="thumb"
                           />
                           <div className="featured_item_two__thumb--shape"></div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                     <div className="featured_item_two bg-orange2">
                        <div className="featured_item_two__content">
                           <span className="featured_item_two__content--subtitle">
                              MINIMAL STYLE
                           </span>
                           <h4 className="featured_item_two__content--title">
                              Buy Now Wear Forever
                           </h4>
                           <p className="featured_item_two__content--text">
                              Accessories Up To 20% Off
                           </p>
                           <div className="btn-wrapper">
                              <a
                                 className="theme-btn style11"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
                           </div>
                        </div>
                        <div className="featured_item_two__thumb">
                           <img
                              src="/images/featured-item/featuredItemThumb2_2.png"
                              alt="thumb"
                           />
                           <div className="featured_item_two__thumb--shape"></div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-md-6 mx-md-auto mx-lg-start">
                     <div className="featured_item_two bg-theme6">
                        <div className="featured_item_two__content">
                           <span className="featured_item_two__content--subtitle">
                              Best DEAL
                           </span>
                           <h4 className="featured_item_two__content--title">
                              Traditional Ethnic Dress
                           </h4>
                           <p className="featured_item_two__content--text">
                              Accessories Up To 20% Off
                           </p>
                           <div className="btn-wrapper">
                              <a
                                 className="theme-btn style11"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
                           </div>
                        </div>
                        <div className="featured_item_two__thumb">
                           <img
                              src="/images/featured-item/featuredItemThumb2_3.png"
                              alt="thumb"
                           />
                           <div className="featured_item_two__thumb--shape"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { FeaturedProductSection };
