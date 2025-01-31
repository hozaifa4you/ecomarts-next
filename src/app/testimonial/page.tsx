import { TestimonialCardSlider as TestimonialCard } from "@/components/AboutUs/TestimonialSection";
import { Breadcrumb } from "@/components/Breadcrumb";
import { testimonialData2 } from "@/utils/data/about-us";

const TestimonialPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Testimonials" secondaryTitle="Category" />

         <section className="testimonial-section fix section-padding">
            <div className="container">
               <div className="row">
                  {testimonialData2.map((testimonial) => (
                     <div
                        key={testimonial.id}
                        className="col-xl-4 col-lg-6 col-md-6"
                     >
                        <TestimonialCard {...testimonial} />
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default TestimonialPage;
