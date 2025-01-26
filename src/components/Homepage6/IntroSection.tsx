import Link from "next/link";

const IntroSection = () => {
   return (
      <section className="hero-section-6">
         <div
            className="hero-6 bg-cover"
            style={{ backgroundImage: "url('/images/home-6/hero/01.jpg')" }}
         >
            <div className="container">
               <div className="row justify-content-end">
                  <div className="col-xl-6">
                     <div className="hero-content">
                        <span>Best Quality</span>
                        <h1>Help You To Make Modern Furniture</h1>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Integer nunc viverra laoreet est, a pretium
                        </p>
                        <div className="hero-button">
                           <Link href="/cart" className="theme-btn">
                              Add to cart
                           </Link>
                           <Link
                              href="/homepage-6"
                              className="theme-btn style-2"
                           >
                              view now
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { IntroSection };
