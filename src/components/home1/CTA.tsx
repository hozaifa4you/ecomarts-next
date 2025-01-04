import React from "react";

const CTA = () => {
   return (
      <section className="cta-section fix bg-color2">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div
                     className="cta-wrapper style1"
                     style={{
                        backgroundImage: "url(/images/cta/ctaBg1_1.jpg)",
                     }}
                  >
                     <div className="cta-main-content">
                        <h2>get Bundle products offer</h2>
                        <p>
                           Ullamcorper velit sed ullamcorper morbi. Risus
                           commodo viverra maecenas <br />
                           accumsan lacus vel facilisis volutpat.
                        </p>
                        <div className="promo-btn-wrapper">
                           <a
                              className="theme-btn style5"
                              href="shop-left-sidebar.html"
                           >
                              View All
                           </a>
                        </div>
                     </div>
                     <div className="shape-1">
                        <div className="thumb">
                           <img
                              src="/images/cta/cta-shape1_1.jpg"
                              alt="Shape"
                           />
                           <div className="badge">25% OFF</div>
                        </div>
                     </div>
                     <div className="shape-2">
                        <div className="thumb">
                           <img src="/images/cta/ctaThumb1_1.png" alt="thumb" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CTA };
