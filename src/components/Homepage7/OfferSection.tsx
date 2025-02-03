import Image from "next/image";
import Link from "next/link";
import { Div } from "../animation";

const OfferSection = () => {
   return (
      <section className="product-section section-padding2">
         <div className="container">
            <div className="product-wrapper">
               <div className="row g-4 justify-content-between">
                  <div className="col-xl-8 col-lg-7">
                     <Div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.75 }}
                        viewport={{ once: true }}
                        className="product-animal-items"
                     >
                        <div className="product-content">
                           <div className="text">
                              <h6>Big Sale</h6>
                              <span>Sale Offer 20% Of This Week</span>
                           </div>
                           <h2>Modern Fashion Look 2024</h2>
                           <p>
                              Consectetur adipiscing elit. Integer nunc viverra
                              laoreet <br />
                              est, a pretium metus aliquam eget.
                           </p>
                           <Link
                              className="theme-btn style6"
                              href="/shop-details-one"
                           >
                              Read More
                           </Link>
                        </div>
                        <div className="animal-image">
                           <Image
                              width={144}
                              height={230}
                              src="/images/home-6/product/dog.png"
                              alt="img"
                           />
                        </div>
                        <div className="animal-image2">
                           <Image
                              width={278}
                              height={432}
                              src="/images/home-6/product/dog-2.png"
                              alt="img"
                           />
                        </div>
                     </Div>
                  </div>
                  <div className="col-xl-4 col-lg-5">
                     <div className="row">
                        <div className="col-md-6 col-lg-12 ">
                           <Div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.75, delay: 0.3 }}
                              viewport={{ once: true }}
                              className="product-animal-items mx-sm-auto mx-md-0 style-2 mb-4"
                           >
                              <div className="animal-image3">
                                 <Image
                                    width={166}
                                    height={195}
                                    src="/images/home-6/product/dog-3.png"
                                    alt="img"
                                 />
                              </div>
                              <div className="product-content">
                                 <h6>COLLACTION</h6>
                                 <h2>Top Treading</h2>
                                 <span>Flat 30% Off</span>
                                 <Link
                                    className="theme-btn style6"
                                    href="/shop-details-one"
                                 >
                                    Read More
                                 </Link>
                              </div>
                           </Div>
                        </div>
                        <div className="col-md-6 col-lg-12 ">
                           <Div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.75, delay: 0.6 }}
                              viewport={{ once: true }}
                              className="product-animal-items mx-sm-auto mx-md-0 style-2 bg-color"
                           >
                              <div className="product-content">
                                 <h6>COLLACTION</h6>
                                 <h2>New Arrivals</h2>
                                 <span>Flat 30% Off</span>
                                 <Link
                                    className="theme-btn style6"
                                    href="/shop-details-one"
                                 >
                                    Read More
                                 </Link>
                              </div>
                              <div className="animal-image3">
                                 <Image
                                    width={169}
                                    height={232}
                                    src="/images/home-6/product/dog-4.png"
                                    alt="img"
                                 />
                              </div>
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

export { OfferSection };
