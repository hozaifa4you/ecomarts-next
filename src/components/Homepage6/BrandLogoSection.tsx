"use client";
import { brandLogoData } from "@/utils/data/homepage-6";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandLogoSection = () => {
   return (
      <div className="brand-logo-slider-section section-padding2 pt-0">
         <div className="container">
            <div className="brand-logo-slider-wrapper-four pt-0 pb-0">
               <Swiper
                  loop
                  autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
                  spaceBetween={20}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 2 },
                     767: { slidesPerView: 3 },
                     1200: { slidesPerView: 6 },
                  }}
                  modules={[Autoplay]}
               >
                  {brandLogoData.map((img, i) => (
                     <SwiperSlide key={i}>
                        <BrandLogoSlider img={img} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   );
};

const BrandLogoSlider = ({ img }: { img: string }) => {
   return <Image width={165} height={65} src={img} alt="ecomarts-next" />;
};

export { BrandLogoSection };
