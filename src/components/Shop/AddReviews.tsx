import React from "react";

const AddReviews = () => {
   return (
      <div className="comment-form">
         <div className="form-title">
            <h3 className="inner-title">Add a Review</h3>
            <p>
               Your email address will not be published. Required fields are
               marked *
            </p>
            <div className="rating">
               <p>Rate this product? *</p>
               <ul className="star">
                  <li>
                     <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-regular fa-star"></i>
                  </li>
                  <li>
                     <i className="fa-regular fa-star"></i>
                  </li>
               </ul>
            </div>
         </div>
         <div className="row">
            <div className="col-md-6 form-group style-white2">
               <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control"
               />
               <i className="text-title far fa-user"></i>
            </div>
            <div className="col-md-6 form-group style-white2">
               <input
                  type="text"
                  placeholder="Your Email"
                  className="form-control"
               />
               <i className="text-title far fa-envelope"></i>
            </div>
            <div className="col-12 form-group style-white2">
               <textarea
                  placeholder="Write a Message"
                  className="form-control"
                  rows={5}
               ></textarea>
               <i className="text-title far fa-pencil-alt"></i>
            </div>

            <div className="col-12 form-group">
               <input id="reviewcheck" name="reviewcheck" type="checkbox" />
               <label htmlFor="reviewcheck">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                  <span className="checkmark"></span>
               </label>
            </div>
            <div className="col-12 form-group mb-0">
               <button className="theme-btn">
                  Post A Comment
                  <i className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white"></i>
               </button>
            </div>
         </div>
      </div>
   );
};

export { AddReviews };
