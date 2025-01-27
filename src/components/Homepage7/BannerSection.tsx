import React from "react";

const BannerSection = () => {
   return (
      <section className="banner-section-7 fix section-padding4">
         <div className="container">
            <div className="row g-4">
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="banner-shop-7">
                     <h3>
                        Exclusive Early Bird <br />
                        Offer: 20% Off
                     </h3>
                     <p>Hurry up! Deals end up :</p>
                     <div className="popular-product-timer-box">
                        <div className="box">
                           <h5 id="day" className="number">
                              0
                           </h5>
                           <p className="text">Days</p>
                        </div>
                        <div className="box">
                           <h5 id="hrs" className="number">
                              23
                           </h5>
                           <p className="text">Hour</p>
                        </div>
                        <div className="box">
                           <h5 id="min" className="number">
                              59
                           </h5>
                           <p className="text">Min</p>
                        </div>
                        <div className="box">
                           <h5 id="sec" className="number">
                              36
                           </h5>
                           <p className="text">Sec</p>
                        </div>
                     </div>
                     <div className="dog-image">
                        <img src="/images/home-7/animal/01.png" alt="img" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="banner-shop-7 bg-2">
                     <h3>Kennels</h3>
                     <p>
                        Consectetur adipiscing elit. <br />
                        Integer nunc viverra
                     </p>

                     <a href="shop-details-one.html" className="link-btn">
                        Shop Now
                     </a>

                     <div className="dog-image">
                        <img src="/images/home-7/animal/02.png" alt="img" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6 mx-md-auto mx-lg-0">
                  <div className="banner-shop-7 bg-2 bg-3">
                     <h3>Home Boarding</h3>
                     <p>
                        Consectetur adipiscing elit. <br />
                        Integer nunc viverra
                     </p>

                     <a href="shop-details-one.html" className="link-btn">
                        Shop Now
                     </a>
                     <div className="dog-image">
                        <img src="/images/home-7/animal/03.png" alt="img" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { BannerSection };
