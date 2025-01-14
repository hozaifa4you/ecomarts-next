import { BestSellerSection } from "@/components/Homepage3/BestSellerSection";
import { CountDownOfferSection } from "@/components/Homepage3/CountDownOfferSection";
import { CTASection } from "@/components/Homepage3/CTASection";
import { FeaturesSection } from "@/components/Homepage3/FeaturesSection";
import { FeaturedProductSection2 } from "@/components/Homepage3/FeaturedProductSection2";
import { FeaturedProductSection3 } from "@/components/Homepage3/FeaturedProductSection3";
import { IntroSection } from "@/components/Homepage3/IntroSection";
import { OfferSection } from "@/components/Homepage3/OfferSection";
import { CategoryCardsSection } from "@/components/Homepage3/CategoryCardsSection";
import { TrendySection } from "@/components/Homepage3/TrendySection";

const Homepage3 = () => {
   return (
      <>
         <IntroSection />
         <FeaturesSection />
         <CategoryCardsSection />
         <TrendySection />
         <OfferSection />
         <BestSellerSection />
         <CountDownOfferSection />
         <FeaturedProductSection2 />
         <CTASection />
         <FeaturedProductSection3 />
      </>
   );
};

export default Homepage3;
