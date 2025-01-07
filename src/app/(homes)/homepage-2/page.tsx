import { BestSellerSection } from "@/components/Homepage2/BestSellerSection";
import { BrandSection } from "@/components/Homepage2/BrandSection";
import { FeaturedCards } from "@/components/Homepage2/FeaturedCards";
import { FeaturedProductSection2 } from "@/components/Homepage2/FeaturedProductSection2";
import { FeaturedProductSection3 } from "@/components/Homepage2/FeaturedProductSection3";
import { FeaturedProductSection4 } from "@/components/Homepage2/FeaturedProductSection4";
import { GallerySection } from "@/components/Homepage2/GallerySection";
import { IntroSection } from "@/components/Homepage2/IntroSection";
import { OfferSection } from "@/components/Homepage2/OfferSection";
import { CountDownOffer } from "@/components/Homepage2/CountDownOffer";
import { PackageShopSection } from "@/components/Homepage2/PackageShopSection";

const Homepage2 = () => {
   return (
      <>
         <IntroSection />
         <OfferSection />
         <BestSellerSection />
         <FeaturedCards />
         <CountDownOffer />
         <PackageShopSection />
         <FeaturedProductSection2 />
         <FeaturedProductSection3 />
         <BrandSection />
         <GallerySection />
         <FeaturedProductSection4 />
      </>
   );
};

export default Homepage2;
