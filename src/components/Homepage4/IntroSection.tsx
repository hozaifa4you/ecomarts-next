"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { introData, IntroDataType } from "@/utils/data/homepage-4";

const IntroSection = () => {
   return (
      <section className="intro-section fix">
         <div
            className="intro-container-wrapper style4"
            style={{ backgroundImage: "url('/images/intro/intro4-bg.png')" }}
         >
            <div className="container">
               <div className="intro-wrapper style4">
                  <div className="row">
                     <div className="col-xl-4">
                        <div className="intro-content-left">
                           <h3>ecomarts beauty cosmetics</h3>
                           <p>
                              Nunc lectus dui, ultricies id orci ac, condimentum
                              posuere <br /> sapien. ipsum primis in faucibus
                              orci luctus et ultrices.
                           </p>
                           <div className="btn-wrapper">
                              <Link className="theme-btn style7" href="/cart">
                                 Explore collection{" "}
                                 <i className="fa-light fa-chevron-right"></i>
                              </Link>
                           </div>
                           <div className="thumb">
                              <Image
                                 width={225}
                                 height={282}
                                 src="/images/intro/introShape4_2.png"
                                 alt="Thumb"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-7 ">
                        <div className="intro-middle-thumb-wrapper">
                           <Swiper
                              loop
                              autoplay={{ delay: 2500 }}
                              pagination={{
                                 clickable: true,
                                 el: ".slider-pagination",
                              }}
                              modules={[Autoplay, Pagination]}
                           >
                              {introData.map((item) => (
                                 <SwiperSlide key={item.id}>
                                    <IntroSliderCard {...item} />
                                 </SwiperSlide>
                              ))}

                              <div
                                 className="slider-pagination mt-2"
                                 style={{ marginLeft: "220px" }}
                              ></div>
                           </Swiper>
                           <div className="intro-middle-shape">
                              <Image
                                 width={900}
                                 height={460}
                                 src="/images/intro/introShape4_1.png"
                                 alt="Shape"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-lg-5">
                        <div className="intro-content-right">
                           <h3 className="title">luxurious beauty product</h3>
                           <div className="intro-content-flexbox">
                              <div className="thumb">
                                 <Image
                                    width={205}
                                    height={277}
                                    src="/images/intro/introShape4_3.png"
                                    alt="Thumb"
                                 />
                              </div>
                              <div className="content">
                                 <h6>starting from</h6>
                                 <h4>$25.00</h4>
                                 <div className="btn-wrapper">
                                    <Link
                                       className="theme-btn style7"
                                       href="/cart"
                                    >
                                       Buy Now{" "}
                                       <i className="fa-light fa-chevron-right"></i>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                           <div className="intro-bottom-avatar">
                              <p>join the community of beauty</p>
                              <div className="avatar">
                                 <Image
                                    width={150}
                                    height={46}
                                    src="/images/intro/intro4_avater.png"
                                    alt="Avatar"
                                 />
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

const IntroSliderCard = ({ img, user }: IntroDataType) => {
   return (
      <div className="thumb">
         <Image width={433} height={579} src={img} alt="Thumb" />
         <div className="intro-badge">
            <h5 dangerouslySetInnerHTML={{ __html: user }}></h5>
         </div>
      </div>
   );
};

export { IntroSection };
