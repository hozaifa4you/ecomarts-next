import React from "react";

const BlogSection = () => {
   return (
      <section className="blog-section section-padding2 pt-0 fix">
         <div className="container">
            <div className="section-title style-6 text-center">
               <div className="subtitle">Blog</div>
               <h2 className="title">Stay updated with our latest posts</h2>
            </div>
            <div className="row">
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="blog-card-items2">
                     <div className="blog-image">
                        <img src="/images/home-6/news/01.jpg" alt="img" />
                        <ul className="post">
                           <li>
                              <i className="fa-solid fa-calendar-days"></i>
                           </li>
                           <li>Oct 05, 2024</li>
                        </ul>
                     </div>
                     <div className="blog-content">
                        <ul className="post-meta">
                           <li>
                              <i className="fa-regular fa-user"></i>
                              By admin
                           </li>
                           <li>
                              <i className="fa-solid fa-tag"></i>
                              Business
                           </li>
                        </ul>
                        <h3>
                           <a href="blog-details.html">
                              What are organic? All You Need <br /> to Know
                           </a>
                        </h3>
                        <a
                           href="blog-details.html"
                           className="theme-btn-2 mt-3"
                        >
                           Read More
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="blog-card-items2">
                     <div className="blog-image">
                        <img src="/images/home-6/news/02.jpg" alt="img" />
                        <ul className="post">
                           <li>
                              <i className="fa-solid fa-calendar-days"></i>
                           </li>
                           <li>Oct 05, 2024</li>
                        </ul>
                     </div>
                     <div className="blog-content">
                        <ul className="post-meta">
                           <li>
                              <i className="fa-regular fa-user"></i>
                              By admin
                           </li>
                           <li>
                              <i className="fa-solid fa-tag"></i>
                              Business
                           </li>
                        </ul>
                        <h3>
                           <a href="blog-details.html">
                              What are organic? All You Need <br /> to Know
                           </a>
                        </h3>
                        <a
                           href="blog-details.html"
                           className="theme-btn-2 mt-3"
                        >
                           Read More
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="blog-card-items2">
                     <div className="blog-image">
                        <img src="/images/home-6/news/03.jpg" alt="img" />
                        <ul className="post">
                           <li>
                              <i className="fa-solid fa-calendar-days"></i>
                           </li>
                           <li>Oct 05, 2024</li>
                        </ul>
                     </div>
                     <div className="blog-content">
                        <ul className="post-meta">
                           <li>
                              <i className="fa-regular fa-user"></i>
                              By admin
                           </li>
                           <li>
                              <i className="fa-solid fa-tag"></i>
                              Business
                           </li>
                        </ul>
                        <h3>
                           <a href="blog-details.html">
                              What are organic? All You Need <br /> to Know
                           </a>
                        </h3>
                        <a
                           href="blog-details.html"
                           className="theme-btn-2 mt-3"
                        >
                           Read More
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
