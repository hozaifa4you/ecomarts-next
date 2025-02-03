import Image from "next/image";
import Link from "next/link";

import { Icons } from "../Icons";
import { Div } from "../animation";

const GallerySection = () => {
   return (
      <section className="product-gallery-section section-padding4 pb-0 fix">
         <div className="container">
            <div className="row g-4">
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75 }}
                  viewport={{ once: true }}
                  className="col-lg-6"
               >
                  <div className="product-gallery-items-four style-1">
                     <div className="product-gallery-items-four__thumb">
                        <Image
                           width={693}
                           height={795}
                           src="/images/product-gallery/productGalleryThumb4_1.jpg"
                           alt="thumb"
                        />
                     </div>
                     <div className="product-gallery-items-four__content">
                        <h2>Flawless Finish Powder</h2>
                        <Link href="#">Now Up To -30% {Icons.ArrowRight}</Link>
                     </div>
                  </div>
               </Div>
               <Div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="col-lg-6"
               >
                  <div className="product-gallery-items-four style-2">
                     <div className="product-gallery-items-four__thumb">
                        <Image
                           width={693}
                           height={363}
                           src="/images/product-gallery/productGalleryThumb4_2.jpg"
                           alt="thumb"
                        />
                     </div>
                     <div className="product-gallery-items-four__content">
                        <h2>Stripes are back!</h2>
                        <Link href="#">
                           New collection arrival!
                           {Icons.ArrowRight}
                        </Link>
                     </div>
                  </div>
                  <div className="product-gallery-items-four style-3">
                     <div className="product-gallery-items-four__thumb">
                        <Image
                           width={693}
                           height={363}
                           src="/images/product-gallery/productGalleryThumb4_3.jpg"
                           alt="thumb"
                        />
                     </div>
                     <div className="product-gallery-items-four__content">
                        <h2>Body Lotion</h2>
                        <Link href="#">
                           Check Now
                           {Icons.ArrowRight}
                        </Link>
                     </div>
                  </div>
               </Div>
            </div>
         </div>
      </section>
   );
};

export { GallerySection };
