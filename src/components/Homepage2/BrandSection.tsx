import React from "react";

const BrandSection = () => {
   return (
      <div className="brand-slider-section fix section-padding2 pt-0">
         <div className="container">
            <div className="brand-wrapper-two style1">
               <div
                  className="swiper gt-slider"
                  id="brandSliderOne"
                  data-slider-options='{"loop": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1,"centeredSlides":true},"768":{"slidesPerView":3},"992":{"slidesPerView":4},"1200":{"slidesPerView":5}}}'
               >
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className="brand-img-two">
                           <img
                              src="/images/brand-logo/brand-logo2_1.png"
                              alt="brand-logo"
                           />
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="brand-img-two">
                           <img
                              src="/images/brand-logo/brand-logo2_2.png"
                              alt="brand-logo"
                           />
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="brand-img-two">
                           <img
                              src="/images/brand-logo/brand-logo2_3.png"
                              alt="brand-logo"
                           />
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="brand-img-two">
                           <img
                              src="/images/brand-logo/brand-logo2_4.png"
                              alt="brand-logo"
                           />
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="brand-img-two">
                           <img
                              src="/images/brand-logo/brand-logo2_5.png"
                              alt="brand-logo"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export { BrandSection };
