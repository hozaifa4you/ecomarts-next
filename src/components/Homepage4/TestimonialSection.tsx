import React from "react";

const TestimonialSection = () => {
   return (
      <section className="testimonial-section section-padding4 fix">
         <div className="container">
            <div className="section-title text-center mb-40">
               <div className="subtitle style4">TESTIMONIAL</div>
               <h2 className="title">What Our Clients Say</h2>
            </div>
            <div className="slider-area testimonialSliderFour">
               <div
                  className="swiper gt-slider"
                  id="testimonialSliderFour"
                  data-slider-options='{"loop": true,"autoplay": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1}}}'
               >
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className="testimonial-card-items-four">
                           <p>
                              “Nulla bibendum volutpat nisl, in ullamcorper sem
                              vehicula non. Vestibulum quis ipsum elementum,
                              pulvinar enim eget, suscipit nisl. Nullam aliquam
                              est a vulputate placerat. Ut quis lectus sodales,
                              laoreet nisi ut, ultricies ex Maecenas consequat
                              nunc purus, non maximus nunc gravida nec.”
                           </p>
                           <div className="testimonial-card-items-four_thumb">
                              <img
                                 src="/images/testimonial/testimonialProfileThumb4_1.jpg"
                                 alt="thumb"
                              />
                              <div className="bg">
                                 <img
                                    src="/images/testimonial/testimonialProfileThumbbg4_1.jpg"
                                    alt="thumbbg"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="arrow-btn">
                  <button
                     data-slider-prev="#testimonialSliderFour"
                     className="slider-arrow slider-prev"
                  >
                     <i className="fa-sharp fa-light fa-arrow-left"></i>
                  </button>
                  <button
                     data-slider-next="#testimonialSliderFour"
                     className="slider-arrow slider-next"
                  >
                     <i className="fa-sharp fa-light fa-arrow-right"></i>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export { TestimonialSection };
