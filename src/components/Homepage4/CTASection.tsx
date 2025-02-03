import Link from "next/link";
import React from "react";

import { Div } from "../animation";
import { Icons } from "../Icons";

const CTASection = () => {
   return (
      <section
         className="cta-section section-padding4 fix"
         style={{ backgroundImage: "url(/images/cta/ctaBg4_1.jpg" }}
      >
         <div className="container">
            <div className="row">
               <div className="col-xl-5">
                  <Div
                     initial={{ opacity: 0, y: 25 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.75 }}
                     viewport={{ once: true }}
                     className="cta-content-four"
                  >
                     <h6 className="cta-content-four__subtitle">
                        Award winning beauty products
                     </h6>
                     <h2>Highly performing beauty formula</h2>
                     <p>
                        Consectetur adipiscing elit. Integer nunc viverra
                        laoreet est the is porta pretium metus aliquam eget
                        maecenas porta
                     </p>

                     <div className="btn-wrapper">
                        <Link className="theme-btn style6" href="/cart">
                           Explore Now {Icons.ArrowRight}
                        </Link>
                     </div>
                  </Div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CTASection };
