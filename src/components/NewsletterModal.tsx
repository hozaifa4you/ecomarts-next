import React from "react";

const NewsletterModal = () => {
   return (
      <div
         className="modal fade bd-example-modal-lg common-newsletter-modal"
         id="exampleModal"
         tabIndex={-1}
         role="dialog"
         aria-hidden="true"
      >
         <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
         >
            <div className="modal-content">
               <div className="modal-body modal1 modal-bg">
                  <div className="row">
                     <div className="col-12">
                        <button
                           type="button"
                           className="close"
                           data-bs-dismiss="modal"
                           aria-label="Close"
                        >
                           <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                     <div className="col-lg-12">
                        <div className="row align-items-center">
                           <div className="col-lg-5 col-md-12">
                              <div className="offer-modal-img d-none d-lg-block">
                                 <img
                                    src="/images/modal/common-modal.jpg"
                                    alt="img"
                                 />
                              </div>
                           </div>
                           <div className="col-lg-7 col-md-12">
                              <div className="offer-modal-right">
                                 <h3>Subcribe to Our Newsletter</h3>
                                 <p>
                                    Subscribe to our newsletter and Save your
                                    <span>20% money</span> with discount code
                                    today.
                                 </p>
                                 <form action="#!">
                                    <div className="input-group mb-3">
                                       <input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter your email"
                                       />
                                       <div className="input-group-append">
                                          <button className="theme-btn style6">
                                             Subscribe
                                          </button>
                                       </div>
                                    </div>
                                    <div className="check_boxed_modal">
                                       <input
                                          type="checkbox"
                                          id="vehicle1"
                                          name="vehicle1"
                                          value="Bike"
                                       />
                                       <label htmlFor="vehicle1">
                                          Do not show this window
                                       </label>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export { NewsletterModal };
