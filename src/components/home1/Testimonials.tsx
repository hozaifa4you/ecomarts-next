import React from "react";

const Testimonials = () => {
   return (
      <section className="testimonial-section fix section-padding margin-bottom-40">
         <div className="container">
            <div className="section-title">
               <div className="subtitle style1">Testimonial</div>
               <h2 className="title">What our client say</h2>
            </div>
            <div className="swiper testimonial-slider-one">
               <div
                  className="swiper gt-slider"
                  id="testimonialSliderOne"
                  data-slider-options='{"loop": true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":1,"centeredSlides":true},"768":{"slidesPerView":1},"992":{"slidesPerView":2},"1200":{"slidesPerView":3}}}'
               >
                  <div className="swiper-wrapper">
                     <div className="swiper-slide">
                        <div className="testimonial-card-items-one">
                           <p>
                              One of the most powerful takeaways from this book
                              is the emphasis on adopting a mindset of abundance
                              and possibility. The idea that we can choose to
                              see opportunities rather than limitations is a
                              game-changer.
                           </p>
                           <div className="client-info-wrapper d-flex align-items-center justify-content-between">
                              <div className="client-info">
                                 <div
                                    className="client-img bg-cover"
                                    style={{
                                       backgroundImage:
                                          "url('/images/testimonial/testimonialProfileThumb1_1.jpg')",
                                    }}
                                 >
                                    <div className="icon">
                                       <img
                                          className="shape"
                                          src="/images/shape/shape.svg"
                                          alt="img"
                                       />
                                    </div>
                                 </div>
                                 <div className="content">
                                    <h3>Ronald Richards</h3>
                                    <span>Marketing Coordinator</span>
                                    <div className="star">
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="testimonial-card-items-one">
                           <p>
                              The idea that we can choose to see opportunities
                              rather than limitations is a game-changer. The
                              book encourages readers to step out of their
                              comfort zones and embrace a more positive outlook
                              on life.
                           </p>
                           <div className="client-info-wrapper d-flex align-items-center justify-content-between">
                              <div className="client-info">
                                 <div
                                    className="client-img bg-cover"
                                    style={{
                                       backgroundImage:
                                          "url('/images/testimonial/testimonialProfileThumb1_2.jpg')",
                                    }}
                                 >
                                    <div className="icon">
                                       <img
                                          className="shape"
                                          src="/images/shape/shape.svg"
                                          alt="img"
                                       />
                                    </div>
                                 </div>
                                 <div className="content">
                                    <h3>Dianne Russell</h3>
                                    <span>Project Manager</span>
                                    <div className="star">
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="testimonial-card-items-one">
                           <p>
                              &apos;The Art of Possibility&apos; by Rosamund
                              Stone Zander and Benjamin Zander is a
                              transformative read that challenges conventional
                              thinking and opens up new possibilities. As a
                              reader, I found myself profoundly .
                           </p>
                           <div className="client-info-wrapper d-flex align-items-center justify-content-between">
                              <div className="client-info">
                                 <div
                                    className="client-img bg-cover"
                                    style={{
                                       backgroundImage:
                                          "url('/images/testimonial/testimonialProfileThumb1_3.jpg')",
                                    }}
                                 >
                                    <div className="icon">
                                       <img
                                          className="shape"
                                          src="/images/shape/shape.svg"
                                          alt="img"
                                       />
                                    </div>
                                 </div>
                                 <div className="content">
                                    <h3>Ronald Richards</h3>
                                    <span>Marketing Coordinator</span>
                                    <div className="star">
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="swiper-slide">
                        <div className="testimonial-card-items-one">
                           <p>
                              From the very first chapter, the authors engage
                              readers with inspiring stories and practical
                              insights. Benjamin Zander&apos;s experiences as a
                              conductor bring a unique perspective to leadership
                              .
                           </p>
                           <div className="client-info-wrapper d-flex align-items-center justify-content-between">
                              <div className="client-info">
                                 <div
                                    className="client-img bg-cover"
                                    style={{
                                       backgroundImage:
                                          "url('/images/testimonial/testimonialProfileThumb1_2.jpg')",
                                    }}
                                 >
                                    <div className="icon">
                                       <img
                                          className="shape"
                                          src="/images/shape/shape.svg"
                                          alt="img"
                                       />
                                    </div>
                                 </div>
                                 <div className="content">
                                    <h3>Ronald Richards</h3>
                                    <span>Marketing Coordinator</span>
                                    <div className="star">
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-solid fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
                                       <i className="fa-regular fa-star"></i>
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

export { Testimonials };
