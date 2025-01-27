import Image from "next/image";
import { hotDealData, HotDealType } from "@/utils/data/homepage-6";
import Link from "next/link";

const HotDealSection = () => {
   return (
      <section className="beauty-care-product-section section-padding2 pt-0 fix">
         <div className="beauty-care-product-container-wrapper style4">
            <div className="container">
               <div className="row gy-4 d-flex align-items-center mb-40">
                  <div className="col-xl-6">
                     <div className="section-title style-6">
                        <div className="subtitle style4">Products</div>
                        <h2 className="title">Hot Deals</h2>
                     </div>
                  </div>
                  <div className="col-xl-6 d-flex justify-content-md-end">
                     <div className="btn-wrapper">
                        <Link className="theme-btn style15" href="$">
                           View All <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="row g-4">
                  <div className="col-xl-3 col-lg-4">
                     <div className="product-card-items">
                        <div className="product-image">
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
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="11"
                                       viewBox="0 0 16 11"
                                       fill="none"
                                    >
                                       <path
                                          d="M2.43622 5.09473C3.87391 5.09473 5.87386 5.15673 7.81191 5.21908C9.7496 5.21908 11.6873 5.28108 13.1872 5.28108H14.4374C14.3748 5.28108 14.3748 5.21908 14.3125 5.21908C13.4852 4.81386 12.7265 4.29032 12.0624 3.66632C11.878 3.49483 11.7106 3.30721 11.5624 3.10588C11.397 2.93403 11.2506 2.74622 11.1254 2.54544L10.7503 1.985C10.6254 1.79866 10.5628 1.61231 10.4379 1.42456C10.3752 1.23822 10.2503 1.11387 10.2503 0.927525C10.181 0.815408 10.1378 0.690171 10.1236 0.560438C10.0888 0.454462 10.047 0.350693 9.99868 0.249745C10.1466 0.248619 10.2937 0.227754 10.4357 0.187747C10.5856 0.133477 10.7322 0.0707866 10.8745 0C10.88 0.105892 10.9011 0.210499 10.9371 0.310693C10.9371 0.43504 10.9997 0.497039 10.9997 0.683384C10.9997 0.807732 11.1247 0.994077 11.1247 1.11807C11.1873 1.30442 11.2496 1.42877 11.3122 1.61511C11.3915 1.81377 11.4965 2.00205 11.6246 2.17555L11.9997 2.73599C12.1249 2.93677 12.2714 3.12458 12.4367 3.29643C13.0114 3.93949 13.7123 4.46715 14.4993 4.84919C14.7605 4.99162 15.0323 5.11525 15.3125 5.21908L16 5.52977L15.2498 5.77812C14.9926 5.88854 14.7422 6.01297 14.4997 6.15081C13.7335 6.56368 13.0378 7.08738 12.4371 7.70357C12.2718 7.87542 12.1253 8.06323 12.0001 8.26401L11.625 8.82445C11.5001 9.01079 11.4375 9.19714 11.3126 9.38489C11.2327 9.54403 11.1699 9.71057 11.125 9.88193C11.0625 10.0205 11.0205 10.1668 11.0001 10.3166C10.949 10.4344 10.9276 10.5621 10.9375 10.6893C10.9014 10.7895 10.8803 10.8941 10.8748 11C10.7331 10.9298 10.5872 10.8675 10.4379 10.8137C10.2959 10.7736 10.1488 10.7528 10.0009 10.7517C10.0492 10.6507 10.0909 10.5469 10.1258 10.441C10.1884 10.3166 10.1884 10.1926 10.2507 10.0683C10.3236 9.90638 10.3862 9.7404 10.4382 9.57123C10.5176 9.37258 10.6225 9.18429 10.7507 9.01079C10.8531 8.81085 10.9789 8.62282 11.1257 8.45036C11.251 8.24958 11.3974 8.06178 11.5627 7.88992C11.7503 7.70357 11.8752 7.51723 12.0627 7.32948C12.715 6.69334 13.4755 6.16914 14.3114 5.77952C14.374 5.77952 14.374 5.71752 14.4363 5.71752H13.1872C11.7496 5.71752 9.7496 5.77952 7.81191 5.77952C5.87423 5.84152 3.93655 5.84152 2.43622 5.90387C0.998521 5.96411 0 5.96411 0 5.96411C0.0354127 5.8215 0.0563889 5.67592 0.0626352 5.52942C0.0563889 5.38292 0.0354127 5.23735 0 5.09473C0.811555 5.05533 1.62466 5.05533 2.43622 5.09473Z"
                                          fill="white"
                                       ></path>
                                    </svg>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-8">
                     <div className="row">
                        {hotDealData.map((product) => (
                           <div
                              key={product.id}
                              className="col-xl-3 col-lg-6 col-md-6"
                           >
                              <HotDealCard {...product} />
                           </div>
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
                           stroke-width="1.3"
                           stroke-linecap="round"
                           stroke-linejoin="round"
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
