import Link from "next/link";
import { Div } from "../animation";

const OfferSection = () => {
   return (
      <section className="offer-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row gy-5">
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="col-xl-5"
               >
                  <div
                     className="offer-card-items-one"
                     style={{
                        backgroundImage:
                           "url(/images/offer/offerCardBg3_1.jpg)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                     }}
                  >
                     <h6>GET 30% OFF</h6>
                     <h4>Fresh Vegetables</h4>
                     <div className="btn-wrapper">
                        <Link className="theme-btn style4" href="/cart">
                           Buy Now<i className="fa-light fa-chevron-right"></i>
                        </Link>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  viewport={{ once: true }}
                  className="col-xl-7"
               >
                  <div
                     className="offer-card-items-two"
                     style={{
                        backgroundImage:
                           "url(/images/offer/offerCardBg3_2.jpg)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                     }}
                  >
                     <h6>Limited Offer</h6>
                     <h4 className="text-white">
                        Don&apos;t miss 25% off on all fruits
                     </h4>
                     <div className="btn-wrapper">
                        <Link className="theme-btn style13" href="/cart">
                           Buy Now<i className="fa-light fa-chevron-right"></i>
                        </Link>
                     </div>
                  </div>
               </Div>
            </div>
         </div>
      </section>
   );
};

export { OfferSection };
