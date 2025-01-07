"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ProductQuicDisplay = () => {
   const [open, setOpen] = useState(false);

   return (
      <>
         <button onClick={() => setOpen(true)} className="btn btn-primary">
            Open
         </button>
         <Modal
            show={open}
            onHide={() => setOpen(false)}
            dialogClassName="model-80w"
         >
            <Modal.Body className="m-0 p-0">
               <div
                  className=" modal-common-wrap m-0 p-0"
                  id="exampleModal2"
                  tabIndex={-1}
               >
                  <div className="modal-dialog modal-dialog-centered modal-xl">
                     <div className="modal-content">
                        <div className="modal-header">
                           <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                           ></button>
                        </div>
                        <div className="modal-body">
                           <div className="shop-details">
                              <div className="row gx-60">
                                 <div className="col-lg-6">
                                    <div className="product-big-img bg-color2">
                                       <img
                                          src="/images/shop-details/shop-details-thumb.png"
                                          alt="thumb"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-lg-6 mt-4 mt-md-0">
                                    <div className="product-about">
                                       <div className="rating">
                                          <ul className="star">
                                             <li>
                                                <i className="fa-solid fa-star"></i>
                                             </li>
                                             <li>
                                                <i className="fa-solid fa-star"></i>
                                             </li>
                                             <li>
                                                <i className="fa-solid fa-star"></i>
                                             </li>
                                             <li>
                                                <i className="fa-solid fa-star"></i>
                                             </li>
                                             <li>
                                                <i className="fa-solid fa-star"></i>
                                             </li>
                                          </ul>
                                          <h6>(2 customer reviews)</h6>
                                       </div>
                                       <h6 className="product-price">$99.00</h6>
                                       <h2 className="product-title">
                                          High-Neck puff jacket
                                       </h2>
                                       <p className="text">
                                          Aliquam hendrerit a augue insuscipit.
                                          Etiam aliquam massa quis des mauris
                                          commodo venenatis ligula commodo leez
                                          sed blandit convallis dignissim onec
                                          vel pellentesque neque.
                                       </p>
                                       <div className="product-details">
                                          <div className="size">
                                             <span className="title">Size</span>
                                             <span className="size-number">
                                                L
                                             </span>
                                             <span className="size-number">
                                                M
                                             </span>
                                             <span className="size-number">
                                                S
                                             </span>
                                             <span className="size-number">
                                                Xl
                                             </span>
                                             <span className="size-number">
                                                XXl
                                             </span>
                                          </div>
                                          <div className="color">
                                             <h6>Color</h6>
                                             <div className="color1"></div>
                                             <div className="color2"></div>
                                             <div className="color1"></div>
                                             <div className="color3"></div>
                                             <div className="color4"></div>
                                             <div className="color5"></div>
                                             <div className="color6"></div>
                                          </div>
                                       </div>
                                       <div className="actions">
                                          <div className="quantity">
                                             <p>Quantity</p>
                                             <div className="qty-wrapper">
                                                <input
                                                   type="number"
                                                   className="qty-input"
                                                   step="1"
                                                   min="1"
                                                   max="100"
                                                   name="quantity"
                                                   value="1"
                                                   title="Qty"
                                                />
                                                <div className="btn-wrapper">
                                                   <button
                                                      className="quantity-plus qty-btn"
                                                      type="button"
                                                   >
                                                      <i className="fa-solid fa-plus"></i>
                                                   </button>
                                                   <button
                                                      className="quantity-minus qty-btn"
                                                      type="button"
                                                   >
                                                      <i className="fa-solid fa-minus"></i>
                                                   </button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>

                                       <div className="product-details-footer">
                                          <a
                                             className="theme-btn"
                                             href="cart.html"
                                          >
                                             Add to Cart
                                             <i className="fa-regular fa-cart-shopping bg-transparent text-white"></i>
                                          </a>
                                          <a
                                             className="theme-btn style7 border-0"
                                             href="wishlist.html"
                                          >
                                             ADD TO WISHLIST
                                             <i className="fa-sharp fa-solid fa-heart"></i>
                                          </a>

                                          <div className="share">
                                             <ul className="social-media">
                                                <li>
                                                   <a href="https://www.facebook.com">
                                                      <i className="fa-brands fa-facebook-f"></i>
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="https://www.youtube.com">
                                                      <i className="fa-brands fa-youtube"></i>
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="https://www.x.com">
                                                      <i className="fa-brands fa-twitter"></i>
                                                   </a>
                                                </li>
                                                <li>
                                                   <a href="https://www.instagram.com">
                                                      <i className="fa-brands fa-instagram"></i>
                                                   </a>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
};

export { ProductQuicDisplay };
