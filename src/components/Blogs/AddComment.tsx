import React from "react";

const AddComment = () => {
   return (
      <div className="blog-post-details__comment-form-wrap">
         <h3 className="blog-post-details__comment-form-wrap--title">
            Leave a comments
         </h3>
         <form action="#" id="contact-form" method="POST">
            <div className="row g-4">
               <div className="col-lg-6">
                  <div className="form-clt">
                     <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                     />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="form-clt">
                     <input
                        type="text"
                        name="email"
                        id="email2"
                        placeholder="Your Email"
                     />
                  </div>
               </div>
               <div className="col-lg-12">
                  <div className="form-clt">
                     <textarea
                        name="message"
                        id="message"
                        placeholder="Write Message"
                     ></textarea>
                  </div>
               </div>
               <div className="col-lg-6">
                  <button type="submit" className="theme-btn ">
                     Post A Comment{" "}
                     <i className="fa-regular fa-arrow-up-right"></i>
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export { AddComment };
