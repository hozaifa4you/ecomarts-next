"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import { Icons } from "@/components/Icons";
import { MotionDiv } from "@/components/animation";

const IntroSection = () => {
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
                        <MotionDiv
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.5, delay: 0.45 }}
                           className="intro-content"
                        >
                           <div className="subtitle style1">
                              {Icons.TagBlack}
                              59% <span className="color-text">
                                 {" "}
                                 discount{" "}
                              </span>{" "}
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
                                    {Icons.Circle1}
                                    {Icons.Circle2}
                                    {Icons.Circle3}
                                 </div>
                              </div>
                              <div className="video-wrap ripple-effect rounded-0">
                                 <Link
                                    href="https://www.youtube.com/watch?v=f2Gzr8sAGB8"
                                    className="play-btn popup-video"
                                    target="_blank"
                                 >
                                    <Image
                                       width={60}
                                       height={60}
                                       className="playerImg"
                                       src="/images/icon/playerIcon1_1.svg"
                                       alt="icon"
                                    />
                                 </Link>
                              </div>
                           </div>

                           <div className="btn-wrapper">
                              <Link className="theme-btn style6" href="/cart">
                                 Add To Cart
                              </Link>
                              <Link className="theme-btn style7" href="/cart">
                                 view now
                              </Link>
                           </div>
                        </MotionDiv>
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

export { IntroSection };
