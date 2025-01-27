import React from "react";

const BlogSection = () => {
   return (
      <section className="blog-section section-padding2 pt-0 fix">
         <div className="container">
            <div className="section-title style-6">
               <div className="subtitle color">Blog</div>
               <h2 className="title">Stay updated with our latest posts</h2>
            </div>
            <div className="row">
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="blog-card-items2 style-2">
                     <div className="blog-image">
                        <img src="/images/home-6/news/04.jpg" alt="img" />
                        <ul className="post fashion-post">fashion</ul>
                     </div>
                     <div className="blog-content">
                        <ul className="post-meta style-2">
                           <li>
                              <i className="fa-regular fa-user"></i>
                              Adam Smith
                           </li>
                           <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              07 May,2024
                           </li>
                        </ul>
                        <h3>
                           <a href="blog-details.html">
                              ConCung Good Compact Elite stroller <br />
                              in dark blue color
                           </a>
                        </h3>
                        <a
                           href="blog-details.html"
                           className="theme-btn-2 style-2"
                        >
                           Read More
                           <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="blog-card-items2 style-2">
                     <div className="blog-image">
                        <img src="/images/home-6/news/05.jpg" alt="img" />
                        <ul className="post fashion-post">fashion</ul>
                     </div>
                     <div className="blog-content">
                        <ul className="post-meta style-2">
                           <li>
                              <i className="fa-regular fa-user"></i>
                              Adam Smith
                           </li>
                           <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              07 May,2024
                           </li>
                        </ul>
                        <h3>
                           <a href="blog-details.html">
                              Nutrition for you and your little one at <br />
                              every age
                           </a>
                        </h3>
                        <a
                           href="blog-details.html"
                           className="theme-btn-2 style-2"
                        >
                           Read More
                           <i className="fa-solid fa-arrow-up-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-6 col-md-6">
                  <div className="blog-card-items2 style-2">
                     <div className="blog-image">
                        <img src="/images/home-6/news/06.jpg" alt="img" />
                        <ul className="post fashion-post">fashion</ul>
                     </div>
                     <div className="blog-content">
                        <ul className="post-meta style-2">
                           <li>
                              <i className="fa-regular fa-user"></i>
                              Adam Smith
                           </li>
                           <li>
                              <i className="fa-solid fa-calendar-days"></i>
                              07 May,2024
                           </li>
                        </ul>
                        <h3>
                           <a href="blog-details.html">
                              Nulla tincidunt, ante et luctus <br />
                              dapibus, lacus massa varius nisl,
                           </a>
                        </h3>
                        <a
                           href="blog-details.html"
                           className="theme-btn-2 style-2"
                        >
                           Read More
                           <i className="fa-solid fa-arrow-up-right"></i>
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
