import React from "react";

const NewProductsSection = () => {
   return (
      <section className="news-section-5 fix section-padding2 fix section-padding">
         <div className="container">
            <div className="section-title style-5 text-center">
               <div className="subtitle">Our Latest News & Blog </div>
               <h2 className="title">Stay updated with our latest posts</h2>
            </div>
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="news-box-items-5">
                     <div className="thumb">
                        <img src="/images/home-5/news/01.jpg" alt="img" />
                        <div className="post-date">
                           <span className="date">25</span>
                           <span className="month">AUG</span>
                        </div>
                     </div>
                     <div className="content">
                        <a href="blog-details.html" className="post-box">
                           JEWELRY
                        </a>
                        <h3>
                           <a href="blog-details.html">
                              Quick and Easy Flaky Pastry for Tasty Breakfast
                           </a>
                        </h3>
                        <a href="blog-details.html" className="link-btn">
                           READ MORE
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="news-box-items-5">
                     <div className="thumb">
                        <img src="/images/home-5/news/02.jpg" alt="img" />
                        <div className="post-date">
                           <span className="date">20</span>
                           <span className="month">AUG</span>
                        </div>
                     </div>
                     <div className="content">
                        <a href="blog-details.html" className="post-box">
                           JEWELRY
                        </a>
                        <h3>
                           <a href="blog-details.html">
                              Quick and Easy Flaky Pastry for Tasty Breakfast
                           </a>
                        </h3>
                        <a href="blog-details.html" className="link-btn">
                           READ MORE
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="news-box-items-5">
                     <div className="thumb">
                        <img src="/images/home-5/news/03.jpg" alt="img" />
                        <div className="post-date">
                           <span className="date">02</span>
                           <span className="month">AUG</span>
                        </div>
                     </div>
                     <div className="content">
                        <a href="blog-details.html" className="post-box">
                           JEWELRY
                        </a>
                        <h3>
                           <a href="blog-details.html">
                              Quick and Easy Flaky Pastry for Tasty Breakfast
                           </a>
                        </h3>
                        <a href="blog-details.html" className="link-btn">
                           READ MORE
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export { NewProductsSection };
