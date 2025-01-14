import Image from "next/image";
import React from "react";

const NewItems = () => {
   return (
      <section className="feature-shop-section fix section-padding2">
         <div className="feature-shop-wrapper">
            <div className="row align-items-center">
               <div className="col-xl-6">
                  <div className="feature-shop-thumb">
                     <Image
                        width={940}
                        height={770}
                        src="/images/feature-shop.jpg"
                        alt="img"
                     />
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="feature-shop-wrapper mt-4 mt-lg-0">
                     <div className="section-title mb-40">
                        <div className="subtitle style1">New Products</div>
                        <h3 className="title text-white">Meet New Arrivals</h3>
                     </div>
                     <div className="swiper new-product-slider">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="best-seller-product-items-two">
                                 <div className="icon-box2">
                                    <button
                                       data-bs-toggle="modal"
                                       data-bs-target="#exampleModal2"
                                    >
                                       <i className="fa-regular fa-eye"></i>
                                    </button>
                                    <a href="wishlist.html">
                                       <i className="fa-regular fa-heart"></i>
                                    </a>
                                    <a href="cart.html">
                                       <i className="fa-light fa-bag-shopping"></i>
                                    </a>
                                 </div>
                                 <div className="best-seller-product-items-two__thumb">
                                    <img src="/images/boy-1.png" alt="thumb" />
                                 </div>
                                 <div className="best-seller-product-items-two__content">
                                    <div className="best-seller-product-items-two__details">
                                       <p className="best-seller-product-items-two__details--subtitle">
                                          FASHION BAG
                                       </p>
                                       <h6 className="best-seller-product-items-two__details--title">
                                          <a href="shop-details-one.html">
                                             High-Neck puff jacket
                                          </a>
                                       </h6>
                                       <div className="best-seller-product-items-two__details--price">
                                          <span className="offer-price">
                                             $79.00
                                          </span>
                                          <span className="original-price">
                                             $99.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="best-seller-product-items-two">
                                 <div className="icon-box2">
                                    <button
                                       data-bs-toggle="modal"
                                       data-bs-target="#exampleModal2"
                                    >
                                       <i className="fa-regular fa-eye"></i>
                                    </button>
                                    <a href="wishlist.html">
                                       <i className="fa-regular fa-heart"></i>
                                    </a>
                                    <a href="cart.html">
                                       <i className="fa-light fa-bag-shopping"></i>
                                    </a>
                                 </div>
                                 <div className="best-seller-product-items-two__thumb">
                                    <img src="/images/boy-2.png" alt="thumb" />
                                 </div>
                                 <div className="best-seller-product-items-two__content">
                                    <div className="best-seller-product-items-two__details">
                                       <p className="best-seller-product-items-two__details--subtitle">
                                          FASHION BAG
                                       </p>
                                       <h6 className="best-seller-product-items-two__details--title">
                                          <a href="shop-details-one.html">
                                             High-Neck puff jacket
                                          </a>
                                       </h6>
                                       <div className="best-seller-product-items-two__details--price">
                                          <span className="offer-price">
                                             $79.00
                                          </span>
                                          <span className="original-price">
                                             $99.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="best-seller-product-items-two">
                                 <div className="icon-box2">
                                    <button
                                       data-bs-toggle="modal"
                                       data-bs-target="#exampleModal2"
                                    >
                                       <i className="fa-regular fa-eye"></i>
                                    </button>
                                    <a href="wishlist.html">
                                       <i className="fa-regular fa-heart"></i>
                                    </a>
                                    <a href="cart.html">
                                       <i className="fa-light fa-bag-shopping"></i>
                                    </a>
                                 </div>
                                 <div className="best-seller-product-items-two__badge1">
                                    25% off
                                 </div>
                                 <div className="best-seller-product-items-two__thumb">
                                    <img src="/images/boy-1.png" alt="thumb" />
                                 </div>
                                 <div className="best-seller-product-items-two__content">
                                    <div className="best-seller-product-items-two__details">
                                       <p className="best-seller-product-items-two__details--subtitle">
                                          FASHION BAG
                                       </p>
                                       <h6 className="best-seller-product-items-two__details--title">
                                          <a href="shop-details-one.html">
                                             High-Neck puff jacket
                                          </a>
                                       </h6>
                                       <div className="best-seller-product-items-two__details--price">
                                          <span className="offer-price">
                                             $79.00
                                          </span>
                                          <span className="original-price">
                                             $99.00
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
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

export { NewItems };
