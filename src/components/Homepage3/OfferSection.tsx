import React from "react";

const OfferSection = () => {
   return (
      <section className="offer-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row gy-5">
               <div className="col-xl-5">
                  <div
                     className="offer-card-items-one"
                     data-bg-src="/images/offer/offerCardBg3_1.jpg"
                  >
                     <h6>GET 30% OFF</h6>
                     <h4>Fresh Vegetables</h4>
                     <div className="btn-wrapper">
                        <a className="theme-btn style4" href="cart.html">
                           Buy Now<i className="fa-light fa-chevron-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-7">
                  <div
                     className="offer-card-items-two"
                     data-bg-src="/images/offer/offerCardBg3_2.jpg"
                  >
                     <h6>Limited Offer</h6>
                     <h4 className="text-white">
                        Don&apos;t miss 25% off on all fruits
                     </h4>
                     <div className="btn-wrapper">
                        <a className="theme-btn style13" href="cart.html">
                           Buy Now<i className="fa-light fa-chevron-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default OfferSection;
