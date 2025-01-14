/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { introData, IntroDataType } from "@/utils/data/homepage-3";

const IntroSection = () => {
   return (
      <section className="intro-section-3 fix">
         <div className="intro-container-wrapper style3 bg-color5">
            <div className="shape1">
               <img src="/images/shape/introShape3_1.png" alt="shape" />
            </div>
            <div className="shape2">
               <img src="/images/shape/introShape3_2.png" alt="shape" />
            </div>
            <div className="shape3">
               <img src="/images/shape/introShape3_3.png" alt="shape" />
            </div>
            <div className="shape4">
               <img src="/images/shape/introShape3_4.png" alt="shape" />
            </div>
            <div className="shape5">
               <img src="/images/shape/introShape3_5.png" alt="shape" />
            </div>
            <div className="shape6">
               <img src="/images/shape/introShape3_6.png" alt="shape" />
            </div>
            <div className="container">
               <div className="intro-wrapper style3">
                  <div className="row gy-5 d-flex align-items-center">
                     <div className="col-xl-9">
                        <Swiper
                           loop
                           pagination={{ clickable: true }}
                           autoplay
                           modules={[Pagination, Autoplay]}
                        >
                           {introData.map((item) => (
                              <SwiperSlide key={item.id}>
                                 <IntroSlide {...item} />
                              </SwiperSlide>
                           ))}
                           <div className="swiper-dot2 text-center">
                              <div className="dot2"></div>
                           </div>
                        </Swiper>
                     </div>
                     <div className="col-xl-3">
                        <div className="intro-second-thumb">
                           <div className="thumb">
                              <Image
                                 width={335}
                                 height={430}
                                 src="/images/intro/intro-thumb3_2.jpg"
                                 alt="Thumb"
                              />
                           </div>
                           <div className="content">
                              <h6>Summer Sale</h6>
                              <h4>75% OFF</h4>
                              <p>Only Fruit & Vegetable</p>
                              <div className="btn-wrapper">
                                 <Link
                                    className="theme-btn style4"
                                    href="/cart"
                                 >
                                    Buy Now
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                 </Link>
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

const IntroSlide = ({ description, img, subtitle, title }: IntroDataType) => {
   return (
      <div className="row g-4">
         <div className="col-lg-7">
            <div className="intro-content">
               <h6 className="intro-subtitle style3">{subtitle}</h6>
               <h1 className="intro-title">{title}</h1>
               <p dangerouslySetInnerHTML={{ __html: description }}></p>
               <div className="btn-wrapper">
                  <Link className="theme-btn style4" href="/cart">
                     Buy Now
                     <i className="fa-light fa-chevron-right"></i>
                  </Link>
               </div>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="intro-thumb">
               <Image width={425} height={285} src={img} alt="thumb" />
            </div>
         </div>
      </div>
   );
};

export default IntroSection;
