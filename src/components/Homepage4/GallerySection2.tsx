import React from "react";

const GallerySection2 = () => {
   return (
      <section className="gallery-section fix">
         <div className="container">
            <div className="gallery-wrapper-four">
               <div className="section-title text-center mb-40">
                  <div className="subtitle style4">Top Rated</div>
                  <h2 className="title">Incredible Products</h2>
               </div>

               <div className="slider-area gallerySliderFour">
                  <div
                     className="swiper gt-slider"
                     id="brandSliderFour2"
                     data-slider-options='{"loop": true,"autoplay": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":2},"767":{"slidesPerView":3},"1200":{"slidesPerView":4}}}'
                  >
                     <div className="swiper-wrapper">
                        <div className="swiper-slide">
                           <div className="gallery-thumb">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb4_1.jpg"
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
                                 src="/images/insta-gallery/gallery-Thumb4_2.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb2">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb4_3.jpg"
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
                                 src="/images/insta-gallery/gallery-Thumb4_4.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb2">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb4_5.jpg"
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
                                 src="/images/insta-gallery/gallery-Thumb4_1.jpg"
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
                                 src="/images/insta-gallery/gallery-Thumb4_2.jpg"
                                 alt="thumb"
                              />
                              <div className="icon">
                                 <i className="fa-brands fa-instagram"></i>
                              </div>
                           </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="gallery-thumb2">
                              <img
                                 src="/images/insta-gallery/gallery-Thumb4_3.jpg"
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
                                 src="/images/insta-gallery/gallery-Thumb4_4.jpg"
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

export { GallerySection2 };
