import { BestSellerSection } from "@/components/Homepage2/BestSellerSection";
import { BrandSection } from "@/components/Homepage2/BrandSection";
import { FeaturedCardSection } from "@/components/Homepage2/FeaturedCardSection";
import { FeaturedProductSection } from "@/components/Homepage2/FeaturedProductSection";
import { NewItemsSection } from "@/components/Homepage2/NewItemsSection";
import { ShopFeatureSection } from "@/components/Homepage2/ShopFeatureSection";
import { GallerySection } from "@/components/Homepage2/GallerySection";
import { IntroSection } from "@/components/Homepage2/IntroSection";
import { OfferSection } from "@/components/Homepage2/OfferSection";
import { CountDownOfferSection } from "@/components/Homepage2/CountDownOfferSection";
import { PackageShopSection } from "@/components/Homepage2/PackageShopSection";

const Homepage2 = () => {
   return (
      <>
         <IntroSection />
         <OfferSection />
         <BestSellerSection />
         <FeaturedCardSection />
         <CountDownOfferSection />
         <PackageShopSection />
         <FeaturedProductSection />
         <NewItemsSection />
         <BrandSection />
         <GallerySection />
         <ShopFeatureSection />
      </>
   );
};

export default Homepage2;
