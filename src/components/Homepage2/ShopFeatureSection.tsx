import Image from "next/image";

import { ShopFeatureDataType, shopFeatureData } from "@/utils/data/homepage-2";
import { Div } from "@/components/animation";

const ShopFeatureSection = () => {
   return (
      <section className="feature-section section-padding2 fix">
         <div className="container">
            <div className="row g-5">
               {shopFeatureData.map((feature, index) => (
                  <Div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     transition={{ duration: 0.75, delay: 0.1 * index }}
                     viewport={{ once: true }}
                     className="col-xl-3 col-md-6"
                     key={feature.id}
                  >
                     <ShopFeatureCard {...feature} />
                  </Div>
               ))}
            </div>
         </div>
      </section>
   );
};

const ShopFeatureCard = ({ feature, image, title }: ShopFeatureDataType) => {
   return (
      <div className="feature-box-item-three">
         <div className="feature-box-item-three__icon">
            <Image
               width={image.width}
               height={image.height}
               src={image.img}
               alt="icon"
            />
         </div>
         <div className="feature-box-item-three__content">
            <h6>{title}</h6>
            <p className="feature-box-item-three__content--text">{feature}</p>
         </div>
      </div>
   );
};

export { ShopFeatureSection };
