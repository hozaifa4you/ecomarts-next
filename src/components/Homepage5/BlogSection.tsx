import Image from "next/image";
import React from "react";

const BlogSection = () => {
   return (
      <section className="blog-section section-padding2 fix pt-0">
         <div className="container">
            <div className="row g-0 align-items-center">
               <div className="col-xl-4 col-md-6">
                  <div className="blog-card-items-four style-2">
                     <div className="blog-card-items-four__thumb">
                        <Image
                           width={470}
                           height={309}
                           src="/images/home-5/banner/04.jpg"
                           alt="thumb"
                        />
                     </div>
                     <div className="blog-card-items-four__content style-two pt-0 mb-0">
                        <span>New collection</span>
                        <h3>Wedding Rings</h3>
                        <p>
                           Praesent ut lacus at tincidunt aliquam a eget urna.
                           Sed ullamcorper
                        </p>
                        <a href="shop-details-one.html" className="theme-btn">
                           Discover More
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-md-6">
                  <div className="blog-card-items-four style-2">
                     <div className="blog-card-items-four__content style-two pt-0 mb-0">
                        <span>New collection</span>
                        <h3>Wedding Rings</h3>
                        <p>
                           Praesent ut lacus at tincidunt aliquam a eget urna.
                           Sed ullamcorper
                        </p>
                        <a href="shop-details-one.html" className="theme-btn">
                           Discover More
                        </a>
                     </div>
                     <div className="blog-card-items-four__thumb">
                        <Image
                           width={470}
                           height={309}
                           src="/images/home-5/banner/05.jpg"
                           alt="thumb"
                        />
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-md-6">
                  <div className="blog-card-items-four style-2">
                     <div className="blog-card-items-four__thumb">
                        <Image
                           width={470}
                           height={309}
                           src="/images/home-5/banner/06.jpg"
                           alt="thumb"
                        />
                     </div>
                     <div className="blog-card-items-four__content style-two pt-0 mb-0">
                        <span>New collection</span>
                        <h3>Wedding Rings</h3>
                        <p>
                           Praesent ut lacus at tincidunt aliquam a eget urna.
                           Sed ullamcorper
                        </p>
                        <a href="shop-details-one.html" className="theme-btn">
                           Discover More
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { BlogSection };
