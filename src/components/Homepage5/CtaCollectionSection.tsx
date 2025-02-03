import Link from "next/link";
import { Div, H2 } from "../animation";

const CtaCollectionSection = () => {
   return (
      <section className="cta-collection-section section-bg-5 section-padding2">
         <div className="container">
            <div className="cta-collection-wrapper">
               <H2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
               >
                  Explore Collections
               </H2>
               <div className="row">
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 1 }}
                     viewport={{ once: true }}
                     className="col-lg-5"
                  >
                     <div
                        className="cta-collection-image bg-cover"
                        style={{
                           backgroundImage:
                              "url('/images/home-5/banner/01.jpg')",
                        }}
                     >
                        <div className="content">
                           <h3>
                              Where Elegance & <br /> Affordability Meet
                           </h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer nc
                           </p>
                        </div>
                        <Link href="/shop-details-one" className="theme-btn">
                           Shop Now
                        </Link>
                     </div>
                  </Div>
                  <div className="col-lg-7">
                     <div className="row">
                        <div className="col-md-6">
                           <Div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.05 }}
                              viewport={{ once: true }}
                              className="cta-collection-image bg-cover"
                              style={{
                                 backgroundImage:
                                    "url('/images/home-5/banner/02.jpg')",
                              }}
                           >
                              <div className="content">
                                 <h4>
                                    Where style and <br /> value unite
                                 </h4>
                              </div>
                              <Link href="/shop-details-one" className="icon">
                                 <i className="fa-solid fa-chevron-right"></i>
                              </Link>
                           </Div>
                        </div>
                        <div className="col-md-6">
                           <Div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1, delay: 0.1 }}
                              viewport={{ once: true }}
                              className="cta-collection-image bg-cover"
                              style={{
                                 backgroundImage:
                                    "url('/images/home-5/banner/03.jpg')",
                              }}
                           >
                              <div className="content">
                                 <h4>
                                    Where sophistication <br /> meets
                                    affordability
                                 </h4>
                              </div>
                              <Link href="/shop-details-one" className="icon">
                                 <i className="fa-solid fa-chevron-right"></i>
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

export { CtaCollectionSection };
