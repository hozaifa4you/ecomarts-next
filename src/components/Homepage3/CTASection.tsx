import React from "react";

const CTASection = () => {
   return (
      <section className="cta-section bg-color4 fix">
         <div className="container">
            <div className="cta-wrapper-two">
               <div className="row d-flex align-items-center">
                  <div className="col-xl-6 order-2 order-xl-1">
                     <div className="cta-content section-padding3">
                        <h2>Shop Faster With EcomArts App</h2>
                        <p>
                           Get weekly deals, valuable health information and
                           more.
                        </p>

                        <div className="btn-wrapper">
                           <a href="#">
                              <img src="/images/cta/appleStore.png" alt="img" />
                           </a>
                           <a href="#">
                              <img src="/images/cta/playStore.png" alt="img" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 order-1 order-xl-2 mt-xl-0 mt-5 d-flex justify-content-xl-end">
                     <div className="cta-thumb">
                        <img src="/images/cta/ctaThumb3_1.png" alt="thumb" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CTASection };
