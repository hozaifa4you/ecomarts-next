import Link from "next/link";
import { Div } from "../animation";

const IntroSection = () => {
   return (
      <section
         className="hero-section-7 hero-7 bg-cover overflow-hidden"
         style={{ backgroundImage: "url('/images/home-7/hero/hero-bg.png')" }}
      >
         <Div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
               duration: 0.75,
               ease: "easeOut",
            }}
            className="food-shape"
         >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/home-7/hero/food-shape.png" alt="img" />
         </Div>
         <div className="container">
            <div className="row g-4 align-items-center justify-content-between">
               <div className="col-lg-6">
                  <Div
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{
                        duration: 0.75,
                        ease: "easeOut",
                     }}
                     viewport={{ once: true }}
                     className="hero-content"
                  >
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
                  </Div>
               </div>
               <div className="col-lg-4">
                  <Div
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{
                        duration: 0.75,
                        ease: "easeOut",
                     }}
                     viewport={{ once: true }}
                     className="hero-image"
                  >
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src="/images/home-7/hero/hero-image.png" alt="img" />
                  </Div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { IntroSection };
