import Image from "next/image";
import { Div } from "../animation";

const ShopFeatureSection = () => {
   return (
      <section className="cta-section-3 section-padding2 fix">
         <div className="container-fluid">
            <div className="cta-wrapper-4">
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="cta-items2"
               >
                  <div className="icon">
                     <Image
                        width={50}
                        height={50}
                        src="/images/home-6/icon/05.svg"
                        alt="img"
                     />
                  </div>
                  <div className="content">
                     <h4>High Quality</h4>
                     <p>Crafted from top materials</p>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="cta-items2"
               >
                  <div className="icon">
                     <Image
                        width={38}
                        height={50}
                        src="/images/home-6/icon/06.svg"
                        alt="img"
                     />
                  </div>
                  <div className="content">
                     <h4>Warrany Protection</h4>
                     <p>Over 2 years</p>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="cta-items2"
               >
                  <div className="icon">
                     <Image
                        width={46}
                        height={50}
                        src="/images/home-6/icon/07.svg"
                        alt="img"
                     />
                  </div>
                  <div className="content">
                     <h4>Free Shipping</h4>
                     <p>Order over 150$</p>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="cta-items2"
               >
                  <div className="icon">
                     <Image
                        width={50}
                        height={50}
                        src="/images/home-6/icon/08.svg"
                        alt="img"
                     />
                  </div>
                  <div className="content">
                     <h4>24 / 7 Support</h4>
                     <p>Dedicated support</p>
                  </div>
               </Div>
            </div>
         </div>
      </section>
   );
};

export { ShopFeatureSection };
