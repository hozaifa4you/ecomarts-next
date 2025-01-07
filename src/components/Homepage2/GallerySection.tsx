import React from "react";

const GallerySection = () => {
   return (
      <section className="gallery-section fix">
         <div className="container">
            <div className="gallery-wrapper-two">
               <div className="section-title text-center mb-50">
                  <div className="subtitle style2">Top Rated</div>
                  <h3 className="title">Incredible Products</h3>
               </div>

               <div className="slider-area gallerySliderTwo">
                  <div
                     className="swiper gt-slider"
                     id="brandSliderFour"
                     data-slider-options='{"loop": true,"autoplay": true,"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":3},"767":{"slidesPerView":4},"1200":{"slidesPerView":5}}}'
                  >
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_1.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_2.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_3.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_4.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_5.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_6.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_7.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_8.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb2_2.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
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

export { GallerySection };
