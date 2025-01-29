"use client";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AddReviews } from "@/components/Shop/AddReviews";
import { Reviews } from "@/components/Shop/Reviews";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SizeType = "L" | "M" | "S" | "Xl" | "XXl";
type ColorType =
   | "color1"
   | "color2"
   | "color3"
   | "color4"
   | "color5"
   | "color6"
   | "color7";

const ShopDetailsOnePage = () => {
   const [size, setSize] = useState<SizeType>("L");
   const [color, setColor] = useState<ColorType>("color1");
   const [count, setCount] = useState(1);

   return (
      <>
         <Breadcrumb mainTitle="Shop Details" secondaryTitle="Shop" />

         <div className="shop-details-section section-padding fix">
            <div className="shop-details bg-white">
               <div className="container">
                  <div className="row gx-60">
                     <div className="col-lg-6">
                        <div className="product-big-img bg-color2">
                           <Image
                              width={280}
                              height={520}
                              src="/images/shop-details/shop-details-thumb.png"
                              alt="thumb"
                           />
                        </div>
                     </div>
                     <div className="col-lg-6">
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
                              Aliquam hendrerit a augue insuscipit. Etiam
                              aliquam massa quis des mauris commodo venenatis
                              ligula commodo leez sed blandit convallis
                              dignissim onec vel pellentesque neque.
                           </p>
                           <div className="product-details">
                              <div className="size">
                                 <span className="title">Size</span>
                                 <span
                                    role="button"
                                    className={`size-number ${
                                       size === "L" ? "active" : ""
                                    }`}
                                    onClick={() => setSize("L")}
                                 >
                                    L
                                 </span>
                                 <span
                                    role="button"
                                    className={`size-number ${
                                       size === "M" ? "active" : ""
                                    }`}
                                    onClick={() => setSize("M")}
                                 >
                                    M
                                 </span>
                                 <span
                                    role="button"
                                    className={`size-number ${
                                       size === "S" ? "active" : ""
                                    }`}
                                    onClick={() => setSize("S")}
                                 >
                                    S
                                 </span>
                                 <span
                                    role="button"
                                    className={`size-number ${
                                       size === "Xl" ? "active" : ""
                                    }`}
                                    onClick={() => setSize("Xl")}
                                 >
                                    Xl
                                 </span>
                                 <span
                                    role="button"
                                    className={`size-number ${
                                       size === "XXl" ? "active" : ""
                                    }`}
                                    onClick={() => setSize("XXl")}
                                 >
                                    XXl
                                 </span>
                              </div>
                              <div className="color">
                                 <h6>Color</h6>
                                 <div
                                    className={`selectable-color color1 ${
                                       color === "color1" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color1")}
                                 ></div>
                                 <div
                                    className={`selectable-color color2 ${
                                       color === "color2" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color2")}
                                 ></div>
                                 <div
                                    className={`selectable-color color3 ${
                                       color === "color3" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color3")}
                                 ></div>
                                 <div
                                    className={`selectable-color color4 ${
                                       color === "color4" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color4")}
                                 ></div>
                                 <div
                                    className={`selectable-color color5 ${
                                       color === "color5" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color5")}
                                 ></div>
                                 <div
                                    className={`selectable-color color7 ${
                                       color === "color7" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color7")}
                                 ></div>
                                 <div
                                    className={`selectable-color color6 ${
                                       color === "color6" ? "active" : ""
                                    }`}
                                    onClick={() => setColor("color6")}
                                 ></div>
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
                                       value={count}
                                       title="Qty"
                                    />
                                    <div className="btn-wrapper">
                                       <button
                                          className="quantity-plus qty-btn"
                                          type="button"
                                          onClick={() => setCount(count + 1)}
                                       >
                                          <i className="fa-solid fa-plus"></i>
                                       </button>
                                       <button
                                          className="quantity-minus qty-btn"
                                          type="button"
                                          onClick={() => {
                                             if (count > 1) setCount(count - 1);
                                          }}
                                       >
                                          <i className="fa-solid fa-minus"></i>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="product-details-footer">
                              <Link className="theme-btn" href="/cart">
                                 Add to Cart
                                 <i className="fa-regular fa-cart-shopping bg-transparent text-white"></i>
                              </Link>
                              <Link
                                 className="theme-btn style7 border-0"
                                 href="/wishlist"
                              >
                                 ADD TO WISHLIST
                                 <i className="fa-sharp fa-solid fa-heart"></i>
                              </Link>

                              <div className="share">
                                 <ul className="social-media">
                                    <li>
                                       <Link
                                          href="#"
                                          target="_blank"
                                          referrerPolicy="no-referrer"
                                       >
                                          <i className="fa-brands fa-facebook-f"></i>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          href="#"
                                          target="_blank"
                                          referrerPolicy="no-referrer"
                                       >
                                          <i className="fa-brands fa-youtube"></i>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          href="#"
                                          target="_blank"
                                          referrerPolicy="no-referrer"
                                       >
                                          <i className="fa-brands fa-twitter"></i>
                                       </Link>
                                    </li>
                                    <li>
                                       <Link
                                          href="#"
                                          target="_blank"
                                          referrerPolicy="no-referrer"
                                       >
                                          <i className="fa-brands fa-instagram"></i>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <div className="product-description">
                           <h3>product Description</h3>
                           <div className="desc">
                              <p>
                                 Phasellus eget fermentum mauris. Suspendisse
                                 nec dignissim nulla. Integer non quam commodo,
                                 scelerisque felis id, eleifend turpis.
                                 Phasellus in nulla quis erat tempor tristique
                                 eget vel purus. Nulla pharetra pharetra
                                 pharetra. Praesent varius eget justo ut
                                 lacinia. Phasellus pharetra, velit viverra
                                 lacinia consequat, ipsum odio mollis dolor, nec
                                 facilisis arcu arcu ultricies sapien. Quisque
                                 ut dapibus nunc. Vivamus sit amet efficitur
                                 velit. Phasellus eget fermentum mauris.
                                 Suspendisse nec dignissim nulla. Integer non
                                 quam commodo, scelerisque felis id, eleifend
                                 turpis. Phasellus in nulla quis erat tempor
                                 tristique eget vel purus. Nulla pharetra
                                 pharetra pharetra. Praesent varius eget justo
                                 ut lacinia. Phasellus pharetra, velit viverra
                                 lacinia consequat, ipsum odio mollis dolor, nec
                                 facilisis arcu arcu ultricies sapien. Quisque
                                 ut dapibus nunc. Vivamus sit amet efficitur
                                 velit.
                              </p>
                              <br />
                              <p>
                                 Phasellus eget fermentum mauris. Suspendisse
                                 nec dignissim nulla. Integer non quam commodo,
                                 scelerisque felis id, eleifend turpis.
                                 Phasellus in nulla quis erat tempor tristique
                                 eget vel purus. Nulla pharetra pharetra
                                 pharetra. Praesent varius eget justo ut
                                 lacinia. Phasellus pharetra, velit viverra
                                 lacinia consequat, ipsum odio mollis dolor, nec
                                 facilisis arcu arcu ultricies sapien. Quisque
                                 ut dapibus nunc. Vivamus sit amet efficitur
                                 velit. Phasellus eget fermentum mauris.
                                 Suspendisse nec dignissim nulla. Integer non
                                 quam commodo, scelerisque felis id, eleifend
                                 turpis
                              </p>
                           </div>
                        </div>
                        <Reviews />
                        <AddReviews />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ShopDetailsOnePage;
