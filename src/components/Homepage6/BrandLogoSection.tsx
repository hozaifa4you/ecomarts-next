const BrandLogoSection = () => {
   return (
      <div className="brand-logo-slider-section section-padding2 pt-0">
         <div className="container">
            <div className="brand-logo-slider-wrapper-four pt-0 pb-0">
               <div
                  className="swiper gt-slider"
                  id="brandSliderFour"
                  data-slider-options='{"loop": true,"autoplay": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"767":{"slidesPerView":3},"1200":{"slidesPerView":6}}}'
               >
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_1.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_2.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_3.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_4.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_5.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_6.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_3.png"
                           alt="logo"
                        />
                     </div>
                     <div className="swiper-slide">
                        <img
                           src="/images/brand-logo/brand-logo4_2.png"
                           alt="logo"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export { BrandLogoSection };
