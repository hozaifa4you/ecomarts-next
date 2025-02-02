import Image from "next/image";
import Link from "next/link";

import { Div } from "../animation";
import { bestSellerData, BestSellerDataType } from "@/utils/data/homepage-3";

const BestSellerSection = () => {
   return (
      <section className="best-seller-section section-padding3 pb-0 fix">
         <div className="container">
            <div className="row">
               <Div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="section-title"
               >
                  <div className="subtitle style3">THIS WEEK</div>
                  <h2 className="title style3">Best Sellers</h2>
               </Div>
               {bestSellerData.map((item, index) => (
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75, delay: index * 0.07 }}
                     viewport={{ once: true }}
                     className="col-xl-4 col-md-6"
                     key={item.id}
                  >
                     <BestSellerCard {...item} />
                  </Div>
               ))}
            </div>
         </div>
      </section>
   );
};

const BestSellerCard = ({ img, name, price }: BestSellerDataType) => {
   return (
      <div className="best-seller-items-three">
         <div className="best-seller-items-three__thumb">
            <Image width={118} height={85} src={img} alt="thumb" />
         </div>
         <div className="best-seller-items-three__content">
            <h6>
               <Link href="/shop-details-one">{name}</Link>
            </h6>
            <p>{price}</p>
            <div className="best-seller-items-three__content--star-wrap">
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
               <i className="fa-regular fa-star"></i>
            </div>
         </div>
      </div>
   );
};

export { BestSellerSection };
