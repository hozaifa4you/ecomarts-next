import React from "react";

const FeaturedProductSection3 = () => {
   return (
      <section className="feature-section section-padding3 fix">
         <div className="container">
            <div className="row g-4">
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon3_1.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Free Delivery</h6>
                        <p className="feature-box-item-three__content--text">
                           Free shipping on all order
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon3_2.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Money Return</h6>
                        <p className="feature-box-item-three__content--text">
                           Back guarantee under 7 day
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon3_3.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Online Support 24/7</h6>
                        <p className="feature-box-item-three__content--text">
                           Support online 24 hours a day
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <img src="/images/icon/featureIcon3_4.svg" alt="icon" />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Reliable</h6>
                        <p className="feature-box-item-three__content--text">
                           Trusted by 1000+ brands
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FeaturedProductSection3;
