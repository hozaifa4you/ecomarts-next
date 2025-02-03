"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useCountdownTimer } from "@/hooks/useCountdownTimer";

const BannerSection = () => {
   const timeLeft = useCountdownTimer();

   return (
      <section className="banner-section-7 fix section-padding4">
         <div className="container">
            <div className="row g-4">
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <motion.div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.75 }}
                     viewport={{ once: true }}
                     className="banner-shop-7"
                  >
                     <h3>
                        Exclusive Early Bird <br />
                        Offer: 20% Off
                     </h3>
                     <p>Hurry up! Deals end up :</p>
                     <div className="popular-product-timer-box">
                        <div className="box">
                           <h5 id="day" className="number">
                              {timeLeft.days}
                           </h5>
                           <p className="text">Days</p>
                        </div>
                        <div className="box">
                           <h5 id="hrs" className="number">
                              {timeLeft.hours}
                           </h5>
                           <p className="text">Hour</p>
                        </div>
                        <div className="box">
                           <h5 id="min" className="number">
                              {timeLeft.minutes}
                           </h5>
                           <p className="text">Min</p>
                        </div>
                        <div className="box">
                           <h5 id="sec" className="number">
                              {timeLeft.seconds}
                           </h5>
                           <p className="text">Sec</p>
                        </div>
                     </div>
                     <div className="dog-image">
                        <Image
                           width={193}
                           height={208}
                           src="/images/home-7/animal/01.png"
                           alt="img"
                        />
                     </div>
                  </motion.div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <motion.div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.75, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="banner-shop-7 bg-2"
                  >
                     <h3>Kennels</h3>
                     <p>
                        Consectetur adipiscing elit. <br />
                        Integer nunc viverra
                     </p>

                     <Link href="/shop-details-one" className="link-btn">
                        Shop Now
                     </Link>

                     <div className="dog-image">
                        <Image
                           width={210}
                           height={262}
                           src="/images/home-7/animal/02.png"
                           alt="img"
                        />
                     </div>
                  </motion.div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6 mx-md-auto mx-lg-0">
                  <motion.div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.75, delay: 0.4 }}
                     viewport={{ once: true }}
                     className="banner-shop-7 bg-2 bg-3"
                  >
                     <h3>Home Boarding</h3>
                     <p>
                        Consectetur adipiscing elit. <br />
                        Integer nunc viverra
                     </p>

                     <Link href="/shop-details-one" className="link-btn">
                        Shop Now
                     </Link>
                     <div className="dog-image">
                        <Image
                           width={230}
                           height={227}
                           src="/images/home-7/animal/03.png"
                           alt="img"
                        />
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { BannerSection };
