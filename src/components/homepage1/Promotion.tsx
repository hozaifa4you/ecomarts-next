import Image from "next/image";

const Promotion = () => {
   return (
      <section className="promo-section section-padding fix pt-0">
         <div className="container">
            <div className="promo-wrapper style1">
               <div className="row">
                  <div className="col-lg-5">
                     <div className="promo-card promo-card_1">
                        <div className="thumb">
                           <Image
                              width={350}
                              height={330}
                              src="/images/offer/promo1.png"
                              alt="Thumb"
                           />
                        </div>
                        <div className="promo-content">
                           <div className="promo-info">
                              <p className="offer-text">GET 30% OFF</p>
                              <h3 className="promo-title">New Power Double</h3>
                           </div>
                           <div className="promo-btn-wrapper">
                              <a
                                 className="theme-btn style5"
                                 href="shop-left-sidebar.html"
                              >
                                 View All
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="promo-card promo-card_2">
                        <div className="thumb">
                           <Image
                              width={510}
                              height={400}
                              src="/images/offer/promo2.png"
                              alt="Thumb"
                           />
                        </div>
                        <div className="promo-content">
                           <div className="promo-info">
                              <p className="offer-text">LIMITED OFFER</p>
                              <h3 className="promo-title">
                                 Don&apos;t Miss 25% Off On All Item
                              </h3>
                           </div>
                           <div className="promo-btn-wrapper">
                              <a
                                 className="theme-btn style5"
                                 href="shop-left-sidebar.html"
                              >
                                 View All
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

export { Promotion };
