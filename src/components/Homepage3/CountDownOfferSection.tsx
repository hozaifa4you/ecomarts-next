import Link from "next/link";

const CountDownOfferSection = () => {
   return (
      <section className="offer-timer-section section-padding3 pb-0 fix">
         <div
            className="offer-timer-container-wrapper section-padding style3"
            style={{
               backgroundImage: `url(${"/images/offer/offerTimerBg3_1.jpg"})`,
            }}
         >
            <div className="container">
               <div className="row">
                  <div className="offer-timer-content">
                     <div className="section-title text-center mb-50">
                        <div className="subtitle style3">THIS WEEK</div>
                        <h2 className="title style3">Weekly Best Deals</h2>
                     </div>

                     <div className="timer-box">
                        <div className="box">
                           <h5 className="number" id="days">
                              28
                           </h5>
                           <p className="text">days</p>
                        </div>
                        <div className="box">
                           <h5 className="number" id="hours">
                              22
                           </h5>
                           <p className="text">hrs</p>
                        </div>
                        <div className="box">
                           <h5 className="number" id="minutes">
                              17
                           </h5>
                           <p className="text">mins</p>
                        </div>
                        <div className="box">
                           <h5 className="number" id="seconds">
                              48
                           </h5>
                           <p className="text">secs</p>
                        </div>
                     </div>

                     <div className="btn-wrapper d-flex align-items-center justify-content-center">
                        <Link className="theme-btn style4" href="/contact">
                           Buy Now
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { CountDownOfferSection };
