import Image from "next/image";
import Link from "next/link";

import { newProductsData, NewProductType } from "@/utils/data/homepage-5";

const NewProductsSection = () => {
   return (
      <section className="news-section-5 fix section-padding2 fix section-padding">
         <div className="container">
            <div className="section-title style-5 text-center">
               <div className="subtitle">Our Latest News & Blog </div>
               <h2 className="title">Stay updated with our latest posts</h2>
            </div>
            <div className="row">
               {newProductsData.map((item) => (
                  <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                     <NewProductCard {...item} />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

const NewProductCard = ({ category, img, name }: NewProductType) => {
   return (
      <div className="news-box-items-5">
         <div className="thumb">
            <Image width={455} height={255} src={img} alt="img" />
            <div className="post-date">
               <span className="date">25</span>
               <span className="month">AUG</span>
            </div>
         </div>
         <div className="content">
            <Link href="/blog-details" className="post-box">
               {category}
            </Link>
            <h3>
               <Link href="/blog-details">{name}</Link>
            </h3>
            <Link href="/blog-details" className="link-btn">
               READ MORE
            </Link>
         </div>
      </div>
   );
};

export { NewProductsSection };
