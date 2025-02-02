/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { Div, H1, MotionDiv } from "@/components/animation";

const IntroSection = () => {
   return (
      <section className="intro-section">
         <div className="intro-container-wrapper style2">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="intro-wrapper style2">
                        <MotionDiv
                           initial={{ opacity: 0, y: -25 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.75 }}
                           viewport={{ once: true }}
                           className="intro-subtitle"
                        >
                           Unmatched fashion trend 2024 at Ecomarts
                        </MotionDiv>
                        <H1
                           initial={{ opacity: 0 }}
                           whileInView={{ opacity: 1 }}
                           transition={{ duration: 0.5 }}
                           viewport={{ once: true }}
                           className="intro-title"
                        >
                           Make your fashion look more charming
                        </H1>
                        <div className="intro-thumbs">
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75 }}
                              viewport={{ once: true }}
                              className="thumb1"
                           >
                              <img
                                 src="/images/intro/introThumb2_1.jpg"
                                 alt="thumb"
                              />
                           </Div>
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="thumb2"
                           >
                              <img
                                 src="/images/intro/introThumb2_2.jpg"
                                 alt="thumb"
                              />
                           </Div>
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75, delay: 0.15 }}
                              viewport={{ once: true }}
                              className="thumb3"
                           >
                              <img
                                 src="/images/intro/introThumb2_3.jpg"
                                 alt="thumb"
                              />
                           </Div>
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="thumb4"
                           >
                              <img
                                 src="/images/intro/introThumb2_4.jpg"
                                 alt="thumb"
                              />
                           </Div>
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75 }}
                              viewport={{ once: true }}
                              className="thumb5"
                           >
                              <img
                                 src="/images/intro/introThumb2_5.jpg"
                                 alt="thumb"
                              />
                           </Div>
                        </div>
                        <div className="collections">
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="summer-collections"
                           >
                              <div className="subtitle">Summer collection</div>
                              <div className="title">
                                 Trendy & clussi for new season
                              </div>
                              <Link href="/shop-left-sidebar">
                                 view products
                                 <i className="fa-solid fa-chevrons-right"></i>
                              </Link>
                           </Div>
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.75, delay: 0.2 }}
                              viewport={{ once: true }}
                              className="winter-collections"
                           >
                              <div className="subtitle">Winter collection</div>
                              <div className="title">
                                 Trendy & clussi for new season
                              </div>
                              <Link href="/shop-left-sidebar">
                                 view products
                                 <i className="fa-solid fa-chevrons-right"></i>
                              </Link>
                           </Div>
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
