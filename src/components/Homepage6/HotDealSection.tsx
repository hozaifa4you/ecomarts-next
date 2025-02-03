import Image from "next/image";
import Link from "next/link";

import { hotDealData, HotDealType } from "@/utils/data/homepage-6";
import { Div, titleEffect } from "@/components/animation";
import { Icons } from "@/components/Icons";

const HotDealSection = () => {
   return (
      <section className="beauty-care-product-section section-padding2 pt-0 fix">
         <div className="beauty-care-product-container-wrapper style4">
            <div className="container">
               <div className="row gy-4 d-flex align-items-center mb-40">
                  <div className="col-xl-6">
                     <Div {...titleEffect} className="section-title style-6">
                        <div className="subtitle style4">Products</div>
                        <h2 className="title">Hot Deals</h2>
                     </Div>
                  </div>
                  <div className="col-xl-6 d-flex justify-content-md-end">
                     <Div {...titleEffect} className="btn-wrapper">
                        <Link className="theme-btn style15" href="$">
                           View All <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </Div>
                  </div>
               </div>
               <div className="row g-4">
                  <div className="col-xl-3 col-lg-4">
                     <div className="product-card-items">
                        <Div
                           initial={{ opacity: 0, y: 25 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, ease: "easeInOut" }}
                           viewport={{ once: true }}
                           className="product-image"
                        >
                           <Image
                              width={336}
                              height={340}
                              src="/images/home-6/product/23.jpg"
                              alt="img"
                           />
                           <div className="product-content">
                              <h6 className="subtitle">Summer Sale</h6>
                              <h2>
                                 <span>75%</span> OFF
                              </h2>
                              <div className="btn-wrapper">
                                 <Link
                                    className="theme-btn style6 color"
                                    href="/cart"
                                 >
                                    Shop now
                                    {Icons.ArrowRight}
                                 </Link>
                              </div>
                           </div>
                        </Div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-8">
                     <div className="row">
                        {hotDealData.map((product, index) => (
                           <Div
                              initial={{ opacity: 0, y: 25 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{
                                 duration: 0.5,
                                 ease: "easeInOut",
                                 delay: 0.05 * index,
                              }}
                              viewport={{ once: true }}
                              key={product.id}
                              className="col-xl-3 col-lg-6 col-md-6"
                           >
                              <HotDealCard {...product} />
                           </Div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const HotDealCard = ({ img, name, price, tag }: HotDealType) => {
   return (
      <div className="best-seller-product-items-two style-seller-3 style-11">
         <div className="icon-box2 new-style">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal2">
               <i className="fa-regular fa-eye"></i>
            </button>
            <Link href="/wishlist">
               <i className="fa-regular fa-heart"></i>
            </Link>
         </div>
         <div className="badge2">{tag}</div>
         <div className="product-thumb">
            <Image width={204} height={204} src={img} alt="img" />
         </div>
         <div className="product-content">
            <div className="product-details">
               <p className="subtitle">{name}</p>
               <div className="pricee">
                  <div className="text">
                     <span className="offer-price">${price}</span>
                  </div>
                  <Link href="/cart" className="icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                     >
                        <path
                           d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
                           stroke="#0A111E"
                           strokeWidth="1.3"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </Link>
               </div>
            </div>
            <div className="star">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star color"></i>
            </div>
         </div>
      </div>
   );
};

export { HotDealSection };
