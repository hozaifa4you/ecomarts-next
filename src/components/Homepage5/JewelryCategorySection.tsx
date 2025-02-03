"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import {
   jewelryCategoryData,
   JewelryCategoryType,
} from "@/utils/data/homepage-5";
import { titleEffect } from "../animation";

const JewelryCategorySection = () => {
   return (
      <section
         className="jewelry-category-section section-padding2 fix"
         id="category"
      >
         <div className="container">
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.75 }}
               viewport={{ once: true }}
               className="row gy-5"
            >
               <motion.div
                  {...titleEffect}
                  className="section-title text-center style-5"
               >
                  <div className="subtitle">Our Category</div>
                  <h2 className="title">Find Jewelry by Category</h2>
               </motion.div>
               <Swiper
                  loop
                  autoplay
                  spaceBetween={30}
                  breakpoints={{
                     1399: {
                        slidesPerView: 5,
                     },
                     1199: {
                        slidesPerView: 4,
                     },
                     991: {
                        slidesPerView: 3,
                     },
                     575: {
                        slidesPerView: 2,
                     },
                     0: {
                        slidesPerView: 1,
                     },
                  }}
                  modules={[Autoplay]}
               >
                  {jewelryCategoryData.map((category) => (
                     <SwiperSlide key={category.id}>
                        <JewelryCategorySlide {...category} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </motion.div>
         </div>
      </section>
   );
};

const JewelryCategorySlide = ({ category, img }: JewelryCategoryType) => {
   return (
      <div className="jewelry-category-box">
         <div className="thumb">
            <Image
               width={262}
               height={262}
               src={img}
               alt="ecomarts-next"
               className="object-fit-contain"
            />
         </div>
         <h4>
            <Link href="/shop-details-one">{category}</Link>
         </h4>
      </div>
   );
};

export { JewelryCategorySection };
