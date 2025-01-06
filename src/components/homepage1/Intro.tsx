"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Intro = () => {
   return (
      <section className="intro-section">
         <div className="intro-container-wrapper style1">
            <div className="container">
               <div className="intro-wrapper style1">
                  <div className="thumb-shape-wrapper">
                     <div className="thumbShape thumbShape1">
                        <Image
                           width={40}
                           height={60}
                           src="/images/intro/introThumbShape1_1.png"
                           alt="shape"
                        />
                     </div>
                     <div className="thumbShape thumbShape2">
                        <Image
                           width={40}
                           height={60}
                           src="/images/intro/introThumbShape1_2.png"
                           alt="shape"
                        />
                     </div>
                     <div className="thumbShape thumbShape3">
                        <Image
                           width={40}
                           height={60}
                           src="/images/intro/introThumbShape1_3.png"
                           alt="shape"
                        />
                     </div>
                  </div>

                  <div className="row gy-5 d-flex align-items-center">
                     <div className="col-xl-6">
                        <div className="intro-content">
                           <div className="subtitle style1">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="14"
                                 height="14"
                                 viewBox="0 0 14 14"
                                 fill="none"
                              >
                                 <g clipPath="url(#clip0_86_101)">
                                    <path
                                       d="M12.8333 6.10352e-05H7.98425C7.66347 6.10352e-05 7.21514 0.185895 6.9885 0.412368L0.34046 7.06037C-0.113477 7.51379 -0.113477 8.2572 0.34046 8.71008L5.29046 13.6599C5.74338 14.1133 6.48606 14.1133 6.93966 13.6594L13.5877 7.01242C13.8141 6.78598 14 6.33693 14 6.01684V1.16678C14 0.525228 13.4748 6.10352e-05 12.8333 6.10352e-05ZM10.4998 4.66675C9.85547 4.66675 9.33311 4.14384 9.33311 3.50004C9.33311 2.85517 9.85547 2.33332 10.4998 2.33332C11.1442 2.33332 11.6667 2.85517 11.6667 3.50004C11.6667 4.14384 11.1442 4.66675 10.4998 4.66675Z"
                                       fill="#0A111E"
                                    />
                                 </g>
                                 <defs>
                                    <clipPath id="clip0_86_101">
                                       <rect
                                          width="14"
                                          height="14"
                                          fill="white"
                                       />
                                    </clipPath>
                                 </defs>
                              </svg>
                              59% <span className="color-text"> discount </span>{" "}
                              for all items
                           </div>
                           <h1>Electric charging smart tea maker</h1>
                           <p>
                              Sell globally in minutes with localized
                              currencies, languages, and experiences in every
                              market.
                           </p>
                           <div className="pricing-card">
                              <div className="price-box">
                                 <div className="price">price</div>
                                 <h6>$125.75</h6>
                              </div>
                              <div className="color-box">
                                 <div className="color">color</div>
                                 <div className="color-plate">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 16 16"
                                       fill="none"
                                    >
                                       <circle
                                          cx="8"
                                          cy="8"
                                          r="8"
                                          fill="#770215"
                                       />
                                    </svg>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 16 16"
                                       fill="none"
                                    >
                                       <circle
                                          cx="8"
                                          cy="8"
                                          r="8"
                                          fill="#E9CF10"
                                       />
                                    </svg>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 16 16"
                                       fill="none"
                                    >
                                       <circle
                                          cx="8"
                                          cy="8"
                                          r="8"
                                          fill="#35424B"
                                       />
                                    </svg>
                                 </div>
                              </div>
                              <div className="video-wrap ripple-effect rounded-0">
                                 <a
                                    href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                                    className="play-btn popup-video"
                                 >
                                    <Image
                                       width={60}
                                       height={60}
                                       className="playerImg"
                                       src="/images/icon/playerIcon1_1.svg"
                                       alt="icon"
                                    />
                                 </a>
                              </div>
                           </div>

                           <div className="btn-wrapper">
                              <a className="theme-btn style6" href="cart.html">
                                 Add To Cart
                              </a>
                              <a className="theme-btn style7" href="cart.html">
                                 view now
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6">
                        <div className="thumb-slider">
                           <div className="introThumbShape">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                 src="/images/intro/introThumbShape1_4.png"
                                 alt="shape"
                              />
                           </div>
                           <div className="intro-thumb">
                              <Swiper
                                 pagination={{ clickable: true }}
                                 centeredSlides={true}
                                 className="mySwiper"
                                 id="introSliderOne"
                                 loop
                                 autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                 }}
                                 modules={[Pagination, Autoplay]}
                              >
                                 <SwiperSlide>
                                    <div className="thumb">
                                       <Image
                                          width={470}
                                          height={575}
                                          src="/images/intro/introThumb1_1.png"
                                          alt="thumb"
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="thumb">
                                       <Image
                                          width={470}
                                          height={575}
                                          src="/images/intro/introThumb1_2.png"
                                          alt="thumb"
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="thumb">
                                       <Image
                                          width={470}
                                          height={575}
                                          src="/images/intro/introThumb1_3.png"
                                          alt="thumb"
                                       />
                                    </div>
                                 </SwiperSlide>
                              </Swiper>
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

export { Intro };
