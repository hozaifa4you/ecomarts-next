import Link from "next/link";
import React from "react";

const CtaCollectionSection = () => {
   return (
      <section className="cta-collection-section section-bg-5 section-padding2">
         <div className="container">
            <div className="cta-collection-wrapper">
               <h2>Explore Collections</h2>
               <div className="row">
                  <div className="col-lg-5">
                     <div
                        className="cta-collection-image bg-cover"
                        style={{
                           backgroundImage:
                              "url('/images/home-5/banner/01.jpg')",
                        }}
                     >
                        <div className="content">
                           <h3>
                              Where Elegance & <br /> Affordability Meet
                           </h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nc
                           </p>
                        </div>
                        <Link href="/shop-details-one" className="theme-btn">
                           Shop Now
                        </Link>
                     </div>
                  </div>
                  <div className="col-lg-7">
                     <div className="row">
                        <div className="col-md-6">
                           <div
                              className="cta-collection-image bg-cover"
                              style={{
                                 backgroundImage:
                                    "url('/images/home-5/banner/02.jpg')",
                              }}
                           >
                              <div className="content">
                                 <h4>
                                    Where style and <br /> value unite
                                 </h4>
                              </div>
                              <Link href="/shop-details-one" className="icon">
                                 <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div
                              className="cta-collection-image bg-cover"
                              style={{
                                 backgroundImage:
                                    "url('/images/home-5/banner/03.jpg')",
                              }}
                           >
                              <div className="content">
                                 <h4>
                                    Where sophistication <br /> meets
                                    affordability
                                 </h4>
                              </div>
                              <Link href="/shop-details-one" className="icon">
                                 <i className="fa-solid fa-chevron-right"></i>
                              </Link>
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

export { CtaCollectionSection };
