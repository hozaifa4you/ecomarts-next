"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Div } from "@/components/animation";
import { calculateTimeLeft, TimeLeft } from "@/utils/utils";

const CountDownOfferSection = () => {
   const TARGET_DATE = new Date();
   TARGET_DATE.setDate(TARGET_DATE.getDate() + 3);
   const TARGET_DATE_STRING =
      TARGET_DATE.toISOString().split("T")[0] + "T23:59:59";

   const [timeLeft, setTimeLeft] = useState<TimeLeft>(
      calculateTimeLeft(TARGET_DATE_STRING)
   );

   useEffect(() => {
      const timer = setTimeout(() => {
         setTimeLeft(calculateTimeLeft(TARGET_DATE_STRING));
      }, 1000);

      return () => clearTimeout(timer);
   });

   return (
      <section className="offer-section fix bg-color7">
         <div className="offer-container-wrapper style2">
            <div className="container">
               <div className="offer-wrapper style2">
                  <div className="row d-flex align-items-center gx-60 gy-5 gy-lg-0">
                     <div className="col-xl-7">
                        <Div
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 0.75 }}
                           viewport={{ once: true }}
                           className="thumb"
                        >
                           <Image
                              width={850}
                              height={560}
                              src="/images/offer/offerThumb2_1.png"
                              alt="thumb"
                           />
                        </Div>
                     </div>
                     <div className="col-xl-5">
                        <Div
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 0.75 }}
                           viewport={{ once: true }}
                           className="offer-content"
                        >
                           <h6>Clearing Sale</h6>
                           <h2>60% sale on selected products</h2>
                           <p>
                              Consectetur adipiscing elit. Integer nunc viverra
                              laoreet est, a pretium metus aliquam eget.
                              Maecenas porta is nunc
                           </p>

                           <div className="timer-box2">
                              <div className="box">
                                 <div className="number" id="days">
                                    {timeLeft.days}
                                 </div>
                                 <div className="text">Day</div>
                              </div>
                              <div className="box">
                                 <div className="number" id="hours">
                                    {timeLeft.hours}
                                 </div>
                                 <div className="text">Hour</div>
                              </div>
                              <div className="box">
                                 <div className="number" id="minutes">
                                    {timeLeft.minutes}
                                 </div>
                                 <div className="text">Min</div>
                              </div>
                              <div className="box">
                                 <div className="number" id="seconds">
                                    {timeLeft.seconds}
                                 </div>
                                 <div className="text">Sec</div>
                              </div>
                           </div>

                           <div className="btn-wrapper">
                              <Link className="theme-btn style6" href="/cart">
                                 Shop Now
                              </Link>
                           </div>

                           <h6 className="bottom-text">
                              Limited time offer. The deal will expires on{" "}
                              <span className="date">December 11, 2024</span>{" "}
                              HURRY UP!
                           </h6>
                        </Div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CountDownOfferSection };
