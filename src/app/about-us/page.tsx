import Image from "next/image";

import { TeamsSection } from "@/components/AboutUs/TeamsSection";
import { TestimonialSection } from "@/components/AboutUs/TestimonialSection";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OfferSection } from "@/components/Homepage2/OfferSection";
import { ShopFeatureSection } from "@/components/Homepage2/ShopFeatureSection";

const AboutPage = () => {
   return (
      <>
         <Breadcrumb secondaryTitle="Category" mainTitle="About Us" />

         <section className="about-page-section pt-40 pb-40 fix">
            <div className="container">
               <div className="row gy-4 gx-64 d-flex align-items-center">
                  <div className="col-xl-6">
                     <div className="about-page-thumb1">
                        <Image
                           width={925}
                           height={415}
                           src="/images/about-us/aboutThumb1_1.jpg"
                           alt="thumb"
                        />
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="about-page-content">
                        <h1>Our Journey</h1>
                        <p className="mb-15">
                           Founded in a quaint but vibrant corner of the city,
                           Oliva Beauty began as a small dream with a big
                           vision. Our founder, a passionate advocate for
                           natural and effective skincare, sought to create a
                           brand that not only enhanced beauty but also
                           empowered individuals to feel confident in their
                           skin.
                        </p>
                        <p>
                           Founded in a quaint but vibrant corner of the city,
                           Oliva Beauty began as a small dream with a big
                           vision. Our founder, a passionate advocate for
                           natural and effective skincare, sought to create a
                           brand that not only enhanced beauty but
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row gx-80 mt-20 d-flex align-items-center">
                  <div className="col-xl-7">
                     <div className="about-page-content">
                        <h1>Where Beauty Meets Innovation</h1>
                        <p className="mb-15">
                           Founded in a quaint but vibrant corner of the city,
                           Oliva Beauty began as a small dream with a big
                           vision. Our founder, a passionate advocate for
                           natural and effective skincare, sought to create a
                           brand that not only enhanced beauty but also
                           empowered individuals to feel confident in their
                           skin.
                        </p>
                     </div>
                  </div>
                  <div className="col-xl-5">
                     <div className="about-page-thumb2">
                        <Image
                           width={410}
                           height={297}
                           src="/images/about-us/aboutThumb1_2.jpg"
                           alt="thumb"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <ShopFeatureSection />
         <OfferSection />
         <TeamsSection />
         <TestimonialSection />
      </>
   );
};

export default AboutPage;
