"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import { useCountdownTimer } from "@/hooks/useCountdownTimer";

const CountDownOfferSection = () => {
   const timeLeft = useCountdownTimer();

   return (
      <section className="offer-timer-section section-padding3 pb-0 fix">
         <div
            className="offer-timer-container-wrapper section-padding style3"
            style={{
               backgroundImage: `url(${"/images/offer/offerTimerBg3_1.jpg"})`,
            }}
         >
            <div className="container">
               <div className="row">
                  <div className="offer-timer-content">
                     <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="section-title text-center mb-50"
                     >
                        <div className="subtitle style3">THIS WEEK</div>
                        <h2 className="title style3">Weekly Best Deals</h2>
                     </motion.div>

                     <div className="timer-box">
                        <motion.div
                           initial={{ opacity: 0, y: 25 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5 }}
                           viewport={{ once: true }}
                           className="box"
                        >
                           <h5 className="number" id="days">
                              {timeLeft.days}
                           </h5>
                           <p className="text">days</p>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, y: 25 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 0.05 }}
                           viewport={{ once: true }}
                           className="box"
                        >
                           <h5 className="number" id="hours">
                              {timeLeft.hours}
                           </h5>
                           <p className="text">hrs</p>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, y: 25 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 0.1 }}
                           viewport={{ once: true }}
                           className="box"
                        >
                           <h5 className="number" id="minutes">
                              {timeLeft.minutes}
                           </h5>
                           <p className="text">mins</p>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, y: 25 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: 0.15 }}
                           viewport={{ once: true }}
                           className="box"
                        >
                           <h5 className="number" id="seconds">
                              {timeLeft.seconds}
                           </h5>
                           <p className="text">secs</p>
                        </motion.div>
                     </div>

                     <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="btn-wrapper d-flex align-items-center justify-content-center"
                     >
                        <Link className="theme-btn style4" href="/contact">
                           Buy Now
                        </Link>
                     </motion.div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CountDownOfferSection };
