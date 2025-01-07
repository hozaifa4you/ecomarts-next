import React from "react";

const FeaturedProductSection4 = () => {
   return (
      <section className="feature-section section-padding2 fix">
         <div className="container">
            <div className="row g-5">
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon4_1.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>High Quality</h6>
                        <p className="feature-box-item-three__content--text">
                           Crafted from top materials
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon4_2.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Warrany Protection</h6>
                        <p className="feature-box-item-three__content--text">
                           Over 2 years
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon4_3.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Free Shipping</h6>
                        <p className="feature-box-item-three__content--text">
                           Order over 150 $
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon4_4.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>24 / 7 Support</h6>
                        <p className="feature-box-item-three__content--text">
                           Dedicated support
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { FeaturedProductSection4 };
