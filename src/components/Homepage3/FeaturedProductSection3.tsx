import Image from "next/image";
import { Div } from "../animation";

const FeaturedProductSection3 = () => {
   return (
      <section className="feature-section section-padding3 fix">
         <div className="container">
            <div className="row g-4">
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="col-xl-3 col-md-6"
               >
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={80}
                           height={63}
                           src="/images/icon/featureIcon3_1.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Free Delivery</h6>
                        <p className="feature-box-item-three__content--text">
                           Free shipping on all order
                        </p>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="col-xl-3 col-md-6"
               >
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={60}
                           height={60}
                           src="/images/icon/featureIcon3_2.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Money Return</h6>
                        <p className="feature-box-item-three__content--text">
                           Back guarantee under 7 day
                        </p>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="col-xl-3 col-md-6"
               >
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={64}
                           height={63}
                           src="/images/icon/featureIcon3_3.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Online Support 24/7</h6>
                        <p className="feature-box-item-three__content--text">
                           Support online 24 hours a day
                        </p>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="col-xl-3 col-md-6"
               >
                  <div className="feature-box-item-three">
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={56}
                           height={57}
                           src="/images/icon/featureIcon3_4.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Reliable</h6>
                        <p className="feature-box-item-three__content--text">
                           Trusted by 1000+ brands
                        </p>
                     </div>
                  </div>
               </Div>
            </div>
         </div>
      </section>
   );
};

export { FeaturedProductSection3 };
