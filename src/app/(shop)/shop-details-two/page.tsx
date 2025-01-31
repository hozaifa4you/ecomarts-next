"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/Breadcrumb";
import { RelatedProductSection } from "@/components/Shop/RelatedProductSection";
import { ShopFeatureSection } from "@/components/Homepage2/ShopFeatureSection";

const ShopDetailsTwoPage = () => {
   const [count, setCount] = useState(1);

   return (
      <>
         <Breadcrumb mainTitle="Shop Details Two" secondaryTitle="Category" />

         <section className="shop-details-section section-padding fix">
            <div className="shop-details style2 bg-white">
               <div className="container">
                  <div className="row gy-5 gx-60">
                     <div className="col-lg-6">
                        <div className="product-big-img bg-color2">
                           <Image
                              width={332}
                              height={609}
                              src="/images/shop-details/shop-details-thumb2.png"
                              alt="thumb"
                           />
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="product-about">
                           <h2 className="product-title">
                              High-Neck puff jacket
                           </h2>
                           <div className="rating">
                              <h6>Brands: Design Hub</h6>
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
                              <h6 className="color-text">In Stock</h6>
                           </div>
                           <h6 className="product-price">$199.00</h6>
                           <div className="actions">
                              <div className="quantity">
                                 <div className="qty-wrapper">
                                    <button
                                       className="quantity-plus qty-btn"
                                       type="button"
                                       onClick={() => setCount(count + 1)}
                                    >
                                       <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <input
                                       type="number"
                                       className="qty-input"
                                       step="1"
                                       min="1"
                                       max="100"
                                       name="quantity"
                                       value={count}
                                       onChange={(e) =>
                                          setCount(Number(e.target.value))
                                       }
                                       title="Qty"
                                    />
                                    <button
                                       className="quantity-minus qty-btn"
                                       type="button"
                                       onClick={() =>
                                          count > 1 ? setCount(count - 1) : null
                                       }
                                    >
                                       <i className="fa-solid fa-minus"></i>
                                    </button>
                                 </div>
                              </div>

                              <div className="btn-wrapper">
                                 <Link
                                    className="theme-btn style7 w-100 border-0"
                                    href="/wishlist"
                                 >
                                    ADD TO WISHLIST
                                    <i className="fa-sharp fa-solid fa-heart"></i>
                                 </Link>
                              </div>
                           </div>

                           <div className="more-actions">
                              <div className="left">
                                 <Link href="#">
                                    <i className="fa-sharp fa-regular fa-messages-question"></i>
                                    Ask Question
                                 </Link>
                              </div>
                              <div className="right">
                                 <Link href="#">
                                    <i className="fa-regular fa-heart"></i>
                                    Wishlist
                                 </Link>
                                 <Link href="#">
                                    <i className="fa-solid fa-arrows-cross"></i>
                                    Compare
                                 </Link>
                              </div>
                           </div>

                           <div className="credit-cards">
                              <h6>Guarantee Safe & Secure Checkout</h6>
                              <div className="card-logo">
                                 <Link href="#">
                                    <Image
                                       width={62}
                                       height={26}
                                       src="/images/shop-details/visa-logo.png"
                                       alt="logo"
                                    />
                                 </Link>
                                 <Link href="#">
                                    <Image
                                       width={60}
                                       height={35}
                                       src="/images/shop-details/mastercard-logo.png"
                                       alt="logo"
                                    />
                                 </Link>
                                 <Link href="#">
                                    <Image
                                       width={66}
                                       height={28}
                                       src="/images/shop-details/payoneer-logo.png"
                                       alt="logo"
                                    />
                                 </Link>
                                 <Link href="#">
                                    <Image
                                       width={66}
                                       height={30}
                                       src="/images/shop-details/affirm-logo.png"
                                       alt="logo"
                                    />
                                 </Link>
                              </div>
                           </div>

                           <div className="product-details-footer2">
                              <div className="policy">
                                 <h6>
                                    Free delivery <span>Over $100</span>{" "}
                                 </h6>
                                 <h6>
                                    30 Days Return <span>Period</span>{" "}
                                 </h6>
                              </div>

                              <div className="product-info">
                                 <h6>
                                    Categories:{" "}
                                    <span>High-Neck puff jacket</span>
                                 </h6>
                                 <h6>
                                    Tags: <span>Fashion , Women</span>
                                 </h6>
                                 <h6>
                                    SKU: <span>oliva-9</span>
                                 </h6>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-12">
                        <div className="product-description">
                           <h3>Item Description</h3>
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
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <RelatedProductSection />

         <ShopFeatureSection />
      </>
   );
};

export default ShopDetailsTwoPage;
