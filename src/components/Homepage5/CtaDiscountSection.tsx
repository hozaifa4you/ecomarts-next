import React from "react";

const CtaDiscountSection = () => {
   return (
      <section className="cta-discount-section fix section-padding2 pt-0">
         <div className="container">
            <div
               className="cta-discount-wrapper bg-cover"
               // style="background-image: url('/images/home-5/cta-discount.jpg');"
            >
               <div className="girl-image">
                  <img src="/images/home-5/girl-shape.png" alt="img" />
               </div>
               <div className="row justify-content-end">
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
                        <a href="shop-details-one.html" className="theme-btn">
                           Shop now
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CtaDiscountSection };
