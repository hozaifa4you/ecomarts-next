import React from "react";

const OfferSection = () => {
   return (
      <section className="offer-section fix section-padding2">
         <div className="container">
            <div className="offer-card-items-fashon-two">
               <div className="row g-4">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <div className="offer-card-items-fashon-two1-info1">
                        <div className="offer-card-items-fashon-two1-info1__thumb">
                           <img
                              src="/images/offer/offerCardThumb2_1.png"
                              alt="thumb"
                           />
                        </div>
                        <div className="offer-card-items-fashon-two1-info1__content">
                           <p className="offer-card-items-fashon-two1-info1__content--subtitle">
                              Sale Up to 50% Off
                           </p>
                           <h6 className="offer-card-items-fashon-two1-info1__content--title">
                              The Latest men’s
                              <br />
                              <span>trends this season</span>
                           </h6>
                           <div className="offer-card-items-fashon-two1-info1__content--btn-wrapper">
                              <a
                                 className="theme-btn style12"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="offer-card-items-fashon-two1-info1 mt-4 style2">
                        <div className="offer-card-items-fashon-two1-info1__thumb">
                           <img
                              src="/images/offer/offerCardThumb2_2.png"
                              alt="thumb"
                           />
                        </div>
                        <div className="offer-card-items-fashon-two1-info1__content">
                           <p className="offer-card-items-fashon-two1-info1__content--subtitle">
                              Sale Up to 50% Off
                           </p>
                           <h6 className="offer-card-items-fashon-two1-info1__content--title">
                              Big Patterns are
                              <br />
                              <span>Back In Fashion</span>
                           </h6>
                           <div className="offer-card-items-fashon-two1-info1__content--btn-wrapper">
                              <a
                                 className="theme-btn style6"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <div className="offer-card-items-fashon-two2">
                        <div className="offer-card-items-fashon-two2__thumb">
                           <img
                              src="/images/offer/offerCardThumb2_3.jpg"
                              alt="thumb"
                           />
                        </div>
                        <div className="offer-card-items-fashon-two2__content">
                           <span className="offer-card-items-fashon-two2__content--subtitle">
                              New Product
                           </span>
                           <h6 className="offer-card-items-fashon-two2__content--title">
                              Get Up To 40% Off Clothing
                           </h6>
                           <p className="offer-card-items-fashon-two2__content--text">
                              Consectetur adipiscing elit. Integer nunc viverra
                              laoreet est,
                           </p>
                           <div className="offer-card-items-fashon-two2__content--btn-wrapper">
                              <a
                                 className="theme-btn style6"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
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

export { OfferSection };
