import Link from "next/link";
import React from "react";
import { Div } from "../animation";

const FeaturesSection = () => {
   return (
      <section className="featured-product-banner-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row">
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="col-xl-4 col-md-6"
               >
                  <div className="featured-item-three">
                     <div
                        className="featured-product-banner-three"
                        style={{
                           backgroundImage:
                              "url(/images/featured-item/featured-product-banner3_1.jpg)",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                        }}
                     >
                        <div className="feature-product-banner-three-content">
                           <h2>100% Fresh Cow Milk</h2>
                           <div className="prices">
                              Starting at <span>$14.99</span>
                           </div>
                           <div className="btn-wrapper">
                              <Link className="theme-btn style14" href="/cart">
                                 Shop Now
                                 <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="col-xl-4 col-md-6"
               >
                  <div className="featured-item-three">
                     <div
                        className="featured-product-banner-three"
                        style={{
                           backgroundImage:
                              "url(/images/featured-item/featured-product-banner3_2.jpg)",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                        }}
                     >
                        <div className="feature-product-banner-three-content right-content">
                           <h6>Drink Sale</h6>
                           <h3>Water & Soft Drink</h3>
                           <div className="btn-wrapper">
                              <Link className="theme-btn style14" href="/cart">
                                 Shop Now
                                 <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="col-xl-4 col-md-6 mx-md-auto mx-lg-start"
               >
                  <div className="featured-item-three">
                     <div
                        className="featured-product-banner-three"
                        style={{
                           backgroundImage:
                              "url(/images/featured-item/featured-product-banner3_3.jpg)",
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                        }}
                     >
                        <div className="feature-product-banner-three-content">
                           <h6>100% Organic</h6>
                           <h3>Quick Breakfast</h3>
                           <div className="btn-wrapper">
                              <Link className="theme-btn style14" href="/cart">
                                 Shop Now
                                 <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </Div>
            </div>
         </div>
      </section>
   );
};

export { FeaturesSection };
