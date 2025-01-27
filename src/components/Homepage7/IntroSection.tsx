import Link from "next/link";

const IntroSection = () => {
   return (
      <section
         className="hero-section-7 hero-7 bg-cover"
         style={{ backgroundImage: "url('/images/home-7/hero/hero-bg.png')" }}
      >
         <div className="food-shape">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home-7/hero/food-shape.png" alt="img" />
         </div>
         <div className="container">
            <div className="row g-4 align-items-center justify-content-between">
               <div className="col-lg-6">
                  <div className="hero-content">
                     <span>Best Quality</span>
                     <h1>25% Off On Premium Dog Foods</h1>
                     <p>
                        Dolor sit amet, consectetur adipiscing elit. Integer
                        nunc viverra laoreet est, a pretium metus aliquam eget.
                        Maecenas porta
                     </p>
                     <div className="hero-button">
                        <Link href="/cart" className="theme-btn">
                           Add to cart
                        </Link>
                        <Link href="/homepage-7" className="theme-btn style-2">
                           View Now
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="hero-image">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src="/images/home-7/hero/hero-image.png" alt="img" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { IntroSection };
