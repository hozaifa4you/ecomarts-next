import React from "react";

const ProductSection = () => {
   return (
      <section className="product-section section-padding3 pb-0 fix">
         <div className="product-contianer-wrapper style3">
            <div className="container">
               <div className="row">
                  <div
                     className="swiper gt-slider productSliderThree"
                     id="productSliderThree"
                     data-slider-options='{"loop": true,"autoplay": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2,"centeredSlides":true},"768":{"slidesPerView":3},"992":{"slidesPerView":4},"1200":{"slidesPerView":6}}}'
                  >
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_1.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>Vegetable</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_2.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>Milk & dairy</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_3.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>Coffee & Tea</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_4.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>Drinks</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_5.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>meat</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_6.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>Fresh Fruits</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="product-box-items-three">
                              <div className="product-box-items-three__icon">
                                 <img
                                    src="/images/icon/productIcon3_2.svg"
                                    alt="icon"
                                 />
                              </div>
                              <div className="product-box-items-three__content">
                                 <h6>Vegetable</h6>
                                 <p>16 items</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="arrow-btn">
               <button
                  data-slider-prev="#productSliderThree"
                  className="slider-arrow slider-prev"
               >
                  <i className="fa-sharp fa-light fa-chevron-left"></i>
               </button>
               <button
                  data-slider-next="#productSliderThree"
                  className="slider-arrow slider-next"
               >
                  <i className="fa-sharp fa-light fa-chevron-right"></i>
               </button>
            </div>
         </div>
      </section>
   );
};

export  {ProductSection};
