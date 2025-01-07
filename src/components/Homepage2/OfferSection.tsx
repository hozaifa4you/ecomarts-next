import Image from "next/image";
import Link from "next/link";

import { offerData, type OfferDataType } from "@/utils/data/homepage-2";

const OfferSection = () => {
   return (
      <section className="offer-section fix section-padding2">
         <div className="container">
            <div className="offer-card-items-fashon-two">
               <div className="row g-4">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     {offerData.map((offer) => (
                        <OfferCard key={offer.id} {...offer} />
                     ))}
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <div className="offer-card-items-fashon-two2">
                        <div className="offer-card-items-fashon-two2__thumb">
                           <Image
                              width={600}
                              height={640}
                              src="/images/offer/offerCardThumb2_3.jpg"
                              alt="thumb"
                           />
                        </div>
                        <div className="offer-card-items-fashon-two2__content">
                           <span className="offer-card-items-fashon-two2__content--subtitle">
                              New Product
                           </span>
                           <h6 className="offer-card-items-fashon-two2__content--title">
                              Get Up To 40% Off Clothing
                           </h6>
                           <p className="offer-card-items-fashon-two2__content--text">
                              Consectetur adipiscing elit. Integer nunc viverra
                              laoreet est,
                           </p>
                           <div className="offer-card-items-fashon-two2__content--btn-wrapper">
                              <a
                                 className="theme-btn style6"
                                 href="shop-details-one.html"
                              >
                                 Shop Now
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

const OfferCard = ({ img, offer, subtitle, title, id }: OfferDataType) => {
   return (
      <div
         className={`offer-card-items-fashon-two1-info1 ${
            id === 2 ? "mt-4" : ""
         }`}
      >
         <div className="offer-card-items-fashon-two1-info1__thumb">
            <Image
               width={id === 1 ? 195 : 255}
               height={id === 1 ? 290 : 280}
               src={img}
               alt="thumb"
            />
         </div>
         <div className="offer-card-items-fashon-two1-info1__content">
            <p className="offer-card-items-fashon-two1-info1__content--subtitle">
               {offer}
            </p>
            <h6 className="offer-card-items-fashon-two1-info1__content--title">
               {title}
               <br />
               <span>{subtitle}</span>
            </h6>
            <div className="offer-card-items-fashon-two1-info1__content--btn-wrapper">
               <Link className="theme-btn style12" href="/shop-details-one">
                  Shop Now
               </Link>
            </div>
         </div>
      </div>
   );
};

export { OfferSection };
