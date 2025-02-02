import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Div } from "../animation";

const FeaturedCardSection = () => {
   return (
      <section className="featured-item-section section-padding2 fix">
         <div className="container">
            <div className="featured-item-wrapper style1">
               <div className="row gy-4">
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75 }}
                     viewport={{ once: true }}
                     className="col-xl-4 col-md-6"
                  >
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
                              <Link
                                 className="theme-btn style11"
                                 href="/shop-details-one"
                              >
                                 Shop Now
                              </Link>
                           </div>
                        </div>
                        <div className="featured_item_two__thumb">
                           <Image
                              width={185}
                              height={185}
                              src="/images/featured-item/featuredItemThumb2_1.png"
                              alt="thumb"
                           />
                           <div className="featured_item_two__thumb--shape"></div>
                        </div>
                     </div>
                  </Div>
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75 }}
                     viewport={{ once: true }}
                     className="col-xl-4 col-md-6"
                  >
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
                              <Link
                                 className="theme-btn style11"
                                 href="/shop-details-one"
                              >
                                 Shop Now
                              </Link>
                           </div>
                        </div>
                        <div className="featured_item_two__thumb">
                           <Image
                              width={185}
                              height={185}
                              src="/images/featured-item/featuredItemThumb2_2.png"
                              alt="thumb"
                           />
                           <div className="featured_item_two__thumb--shape"></div>
                        </div>
                     </div>
                  </Div>
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75 }}
                     viewport={{ once: true }}
                     className="col-xl-4 col-md-6 mx-md-auto mx-lg-start"
                  >
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
                              <Link
                                 className="theme-btn style11"
                                 href="/shop-details-one"
                              >
                                 Shop Now
                              </Link>
                           </div>
                        </div>
                        <div className="featured_item_two__thumb">
                           <Image
                              width={185}
                              height={185}
                              src="/images/featured-item/featuredItemThumb2_3.png"
                              alt="thumb"
                           />
                           <div className="featured_item_two__thumb--shape"></div>
                        </div>
                     </div>
                  </Div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { FeaturedCardSection };
