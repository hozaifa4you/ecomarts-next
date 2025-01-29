"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Breadcrumb } from "@/components/Breadcrumb";

const LookBookPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Look Book" secondaryTitle="Category" />

         <div className="look-book-section section-padding fix">
            <div className="container">
               <div className="row gy-lg-0 gy-4 mb-4 gx-165 d-flex align-items-start">
                  <div className="col-md-6 d-lg-flex justify-content-center">
                     <div className="text-container">
                        <h4 className="vertical-text">
                           Elegant And Stylish Look
                        </h4>
                        <Link
                           className="vertical-text collection-text"
                           href="#!"
                        >
                           Shop Collection <span>→</span>
                        </Link>
                     </div>
                     <div className="image-wrapper">
                        <div className="look-book-product-wrapper">
                           <Swiper
                              loop
                              autoplay
                              breakpoints={{ 0: { slidesPerView: 1 } }}
                              navigation={{
                                 prevEl: "#look-book-slider-prev",
                                 nextEl: "#look-book-slider-next",
                              }}
                              modules={[Autoplay, Navigation]}
                           >
                              <SwiperSlide>
                                 <Image
                                    width={360}
                                    height={555}
                                    className="w-100"
                                    src="/images/look-book/look-book-thumb-1_1.jpg"
                                    alt="thumb"
                                 />
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image
                                    width={360}
                                    height={555}
                                    className="w-100"
                                    src="/images/look-book/look-book-thumb-1_4.jpg"
                                    alt="thumb"
                                 />
                              </SwiperSlide>
                           </Swiper>
                           <div className="arrow-btn">
                              <button
                                 id="look-book-slider-prev"
                                 className="slider-arrow slider-prev"
                              >
                                 <i className="fa-sharp fa-light fa-chevron-left"></i>
                              </button>
                              <button
                                 id="look-book-slider-next"
                                 className="slider-arrow slider-next"
                              >
                                 <i className="fa-sharp fa-light fa-chevron-right"></i>
                              </button>
                           </div>
                        </div>
                        <div className="discount-label">
                           SALE UP TO <span>30% OFF</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-lg-start">
                     <div className="thumb">
                        <Image
                           width={340}
                           height={340}
                           src="/images/look-book/look-book-thumb-1_2.jpg"
                           alt="Look 2"
                        />
                     </div>
                  </div>
               </div>

               <div className="row gy-lg-0 gy-4 gx-165 mt-4 d-flex align-items-end">
                  <div className="col-md-6 d-flex justify-content-lg-end">
                     <div className="thumb">
                        <Image
                           width={340}
                           height={340}
                           src="/images/look-book/look-book-thumb-1_3.jpg"
                           alt="Look 3"
                        />
                     </div>
                  </div>
                  <div className="col-md-6 d-lg-flex">
                     <div className="image-wrapper">
                        <div className="look-book-product-wrapper style2">
                           <Swiper
                              loop
                              autoplay
                              breakpoints={{ 0: { slidesPerView: 1 } }}
                              navigation={{
                                 prevEl: "#look-book-slider-prev2",
                                 nextEl: "#look-book-slider-next2",
                              }}
                              modules={[Autoplay, Navigation]}
                           >
                              <SwiperSlide>
                                 <Image
                                    width={360}
                                    height={555}
                                    className="w-100"
                                    src="/images/look-book/look-book-thumb-1_4.jpg"
                                    alt="thumb"
                                 />
                              </SwiperSlide>
                              <SwiperSlide>
                                 <Image
                                    width={360}
                                    height={555}
                                    className="w-100"
                                    src="/images/look-book/look-book-thumb-1_1.jpg"
                                    alt="thumb"
                                 />
                              </SwiperSlide>
                           </Swiper>
                           <div className="arrow-btn">
                              <button
                                 id="look-book-slider-prev2"
                                 className="slider-arrow slider-prev"
                              >
                                 <i className="fa-sharp fa-light fa-chevron-left"></i>
                              </button>
                              <button
                                 id="look-book-slider-next2"
                                 className="slider-arrow slider-next"
                              >
                                 <i className="fa-sharp fa-light fa-chevron-right"></i>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="text-container .style2">
                        <h4 className="vertical-text ms-lg-4">
                           Timeless Style For Any Occasion
                        </h4>
                        <Link
                           className="vertical-text collection-text"
                           href="#!"
                        >
                           Shop Collection <span>→</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LookBookPage;
