import Image from "next/image";
import Link from "next/link";

import { Div } from "../animation";

const CtaDiscountSection = () => {
   return (
      <section className="cta-discount-section fix section-padding2 pt-0">
         <div className="container">
            <div
               className="cta-discount-wrapper bg-cover"
               style={{
                  backgroundImage: "url('/images/home-5/cta-discount.jpg')",
               }}
            >
               <Div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="girl-image"
               >
                  <Image
                     width={602}
                     height={395}
                     src="/images/home-5/girl-shape.png"
                     alt="img"
                  />
               </Div>
               <Div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="row justify-content-end"
               >
                  <div className="col-lg-5">
                     <div className="content">
                        <span>Up To 15% DISCOUNT</span>
                        <h2>
                           Antique <br />
                           Diamond Necklaces
                        </h2>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Integer nunc viverra laoreet est, a pretium
                           metus
                        </p>
                        <Link href="/shop-details-one" className="theme-btn">
                           Shop now
                        </Link>
                     </div>
                  </div>
               </Div>
            </div>
         </div>
      </section>
   );
};

export { CtaDiscountSection };
