import { BannerSection } from "@/components/Homepage7/BannerSection";
import { BlogSection } from "@/components/Homepage7/BlogSection";
import { FoodCollectionSection } from "@/components/Homepage7/FoodCollectionSection";
import { IntroSection } from "@/components/Homepage7/IntroSection";
import { OfferSection } from "@/components/Homepage7/OfferSection";
import { ShopFeatureSection } from "@/components/Homepage7/ShopFeatureSection";
import { StylishCollectionSection } from "@/components/Homepage7/StylishCollectionSection";
import { VideoSection } from "@/components/Homepage7/VideoSection";

const Homepage7 = () => {
   return (
      <>
         <IntroSection />
         <BannerSection />
         <FoodCollectionSection />
         <OfferSection />
         <StylishCollectionSection />
         <VideoSection />
         <ShopFeatureSection />
         <BlogSection />
      </>
   );
};

export default Homepage7;
