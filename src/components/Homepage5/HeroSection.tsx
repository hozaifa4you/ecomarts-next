"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const HeroSection = () => {
   return (
      <section
         className="hero-section hero-5 bg-cover"
         style={{ backgroundImage: "url(/images/home-5/hero/bg-image.jpg)" }}
      >
         <div className="discount-shape">
            <Image
               width={211}
               height={202}
               src="/images/home-5/hero/discount.png"
               alt="img"
            />
         </div>
         <div className="array-button">
            <button className="array-prev" id="hero-prev">
               <i className="far fa-chevron-up"></i>
            </button>
            <button className="array-next" id="hero-next">
               <i className="far fa-chevron-down"></i>
            </button>
         </div>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true }}
            className="container"
         >
            <Swiper
               loop
               autoplay={{ pauseOnMouseEnter: true }}
               navigation={{ nextEl: "#hero-next", prevEl: "#hero-prev" }}
               modules={[Navigation, Autoplay]}
            >
               <SwiperSlide>
                  <HeroSlider />
               </SwiperSlide>
               <SwiperSlide>
                  <HeroSlider />
               </SwiperSlide>
               <SwiperSlide>
                  <HeroSlider />
               </SwiperSlide>
            </Swiper>
         </motion.div>
      </section>
   );
};

const HeroSlider = () => {
   return (
      <div className="row g-4 align-items-center">
         <div className="col-lg-6">
            <div className="hero-content">
               <span>EXPRESS YOUR BEAUTY</span>
               <h1>Unique Luxury Jewelry Collection</h1>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nunc viverra laoreet est, a pretium metus aliquam
                  eget. Maecenas porta is nunc ut viverra. Aenean pulvinar
                  maximus leo,
               </p>
               <Link href="/shop-details-one" className="theme-btn">
                  Shop now
               </Link>
            </div>
         </div>
         <div className="col-lg-6">
            <div className="hero-image">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/images/home-5/hero/01.png" alt="img" />
            </div>
         </div>
      </div>
   );
};

export { HeroSection };
