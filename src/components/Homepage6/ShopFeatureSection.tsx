import Image from "next/image";
import { Div } from "../animation";

const ShopFeatureSection = () => {
   return (
      <section className="feature-section section-padding2 fix">
         <div className="container">
            <div className="row g-5">
               <div className="col-xl-3 col-md-6">
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75, delay: 0.1 }}
                     viewport={{ once: true }}
                     className="feature-box-item-three"
                  >
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={80}
                           height={63}
                           src="/images/home-6/icon/01.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Free Delivery</h6>
                        <p className="feature-box-item-three__content--text">
                           Free shipping on all order
                        </p>
                     </div>
                  </Div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="feature-box-item-three"
                  >
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={60}
                           height={60}
                           src="/images/home-6/icon/02.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Money Return</h6>
                        <p className="feature-box-item-three__content--text">
                           Back guarantee under 7 day
                        </p>
                     </div>
                  </Div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75, delay: 0.3 }}
                     viewport={{ once: true }}
                     className="feature-box-item-three"
                  >
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={64}
                           height={63}
                           src="/images/home-6/icon/03.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Online Support 24/7</h6>
                        <p className="feature-box-item-three__content--text">
                           Support online 24 hours a day
                        </p>
                     </div>
                  </Div>
               </div>
               <div className="col-xl-3 col-md-6">
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75, delay: 0.4 }}
                     viewport={{ once: true }}
                     className="feature-box-item-three"
                  >
                     <div className="feature-box-item-three__icon">
                        <Image
                           width={56}
                           height={57}
                           src="/images/home-6/icon/04.svg"
                           alt="icon"
                        />
                     </div>
                     <div className="feature-box-item-three__content">
                        <h6>Reliable</h6>
                        <p className="feature-box-item-three__content--text">
                           Trusted by 1000+ brand
                        </p>
                     </div>
                  </Div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { ShopFeatureSection };
