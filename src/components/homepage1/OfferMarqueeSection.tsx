import Image from "next/image";
import { marqueeData } from "@/utils/data/homepage-1";

const OfferMarqueeSection = () => {
   return (
      <div className="marquee-section1 pt-20">
         <div className="container">
            <div className="mycustom-marque">
               <div className="scrolling-wrap">
                  <div className="comm">
                     {marqueeData.map((item) => (
                        <MarqueItem key={item} title={item} />
                     ))}
                  </div>
                  <div className="comm">
                     {marqueeData.map((item) => (
                        <MarqueItem key={item} title={item} />
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export const MarqueItem = ({ title }: { title: string }) => {
   return (
      <>
         <div className="flex-shrink-0">
            <Image
               width={16}
               height={16}
               src="/images/icon/starIcon1_1.svg"
               alt="img"
            />
         </div>
         <div className="cmn-textslide">{title}</div>
      </>
   );
};

export { OfferMarqueeSection };
