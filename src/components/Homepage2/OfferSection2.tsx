import React from "react";

const OfferSection2 = () => {
   return (
      <section className="offer-section fix bg-color7">
         <div className="offer-container-wrapper style2">
            <div className="container">
               <div className="offer-wrapper style2">
                  <div className="row d-flex align-items-center gx-60 gy-5 gy-lg-0">
                     <div className="col-xl-7">
                        <div className="thumb">
                           <img
                              src="/images/offer/offerThumb2_1.png"
                              alt="thumb"
                           />
                        </div>
                     </div>
                     <div className="col-xl-5">
                        <div className="offer-content">
                           <h6>Clearing Sale</h6>
                           <h2>60% sale on selected products</h2>
                           <p>
                              Consectetur adipiscing elit. Integer nunc viverra
                              laoreet est, a pretium metus aliquam eget.
                              Maecenas porta is nunc
                           </p>

                           <div className="timer-box2">
                              <div className="box">
                                 <div className="number" id="days">
                                    15
                                 </div>
                                 <div className="text">Day</div>
                              </div>
                              <div className="box">
                                 <div className="number" id="hours">
                                    59
                                 </div>
                                 <div className="text">Hour</div>
                              </div>
                              <div className="box">
                                 <div className="number" id="minutes">
                                    45
                                 </div>
                                 <div className="text">Min</div>
                              </div>
                              <div className="box">
                                 <div className="number" id="seconds">
                                    49
                                 </div>
                                 <div className="text">Sec</div>
                              </div>
                           </div>

                           <div className="btn-wrapper">
                              <a className="theme-btn style6" href="cart.html">
                                 Shop Now
                              </a>
                           </div>

                           <h6 className="bottom-text">
                              Limited time offer. The deal will expires on
                              <span className="date">
                                 December 11, 2024
                              </span>{" "}
                              HURRY UP!
                           </h6>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { OfferSection2 };
