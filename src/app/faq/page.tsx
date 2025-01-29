"use client";
import { Accordion } from "react-bootstrap";

import { Breadcrumb } from "@/components/Breadcrumb";

const FAQPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="FAQ's" secondaryTitle="Category" />

         <section className="faq-section fix section-padding">
            <div className="container">
               <div className="faq-wrapper">
                  <div className="faq-content style-2">
                     <div className="faq-accordion mt-4 mt-md-0">
                        <Accordion defaultActiveKey="1">
                           <Accordion.Item eventKey="0" className="mb-3">
                              <Accordion.Header>
                                 How do I get in touch with WooCommerce?
                              </Accordion.Header>
                              <Accordion.Body>
                                 We do have restock notifications! If a product
                                 is coming back in stock, simply click on the
                                 size ofthe product you&apos;re wanting to be
                                 notified of and a button should appear that
                                 says once somecome back in stock, it will send
                                 you an email to notify you
                              </Accordion.Body>
                           </Accordion.Item>

                           <Accordion.Item eventKey="1" className="mb-3">
                              <Accordion.Header>
                                 Do you have restock notifications?
                              </Accordion.Header>
                              <Accordion.Body>
                                 We do have restock notifications! If a product
                                 is coming back in stock, simply click on the
                                 size ofthe product you&apos;re wanting to be
                                 notified of and a button should appear that
                                 says once somecome back in stock, it will send
                                 you an email to notify you
                              </Accordion.Body>
                           </Accordion.Item>

                           <Accordion.Item eventKey="2" className="mb-3">
                              <Accordion.Header>
                                 How do I care for my items?
                              </Accordion.Header>
                              <Accordion.Body>
                                 We do have restock notifications! If a product
                                 is coming back in stock, simply click on the
                                 size ofthe product you&apos;re wanting to be
                                 notified of and a button should appear that
                                 says once somecome back in stock, it will send
                                 you an email to notify you
                              </Accordion.Body>
                           </Accordion.Item>

                           <Accordion.Item eventKey="3" className="mb-3">
                              <Accordion.Header>
                                 How do I know what size I am?
                              </Accordion.Header>
                              <Accordion.Body>
                                 We do have restock notifications! If a product
                                 is coming back in stock, simply click on the
                                 size ofthe product you&apos;re wanting to be
                                 notified of and a button should appear that
                                 says once somecome back in stock, it will send
                                 you an email to notify you
                              </Accordion.Body>
                           </Accordion.Item>

                           <Accordion.Item eventKey="4" className="mb-3">
                              <Accordion.Header>
                                 How do I use a gift card?
                              </Accordion.Header>
                              <Accordion.Body>
                                 We do have restock notifications! If a product
                                 is coming back in stock, simply click on the
                                 size ofthe product you&apos;re wanting to be
                                 notified of and a button should appear that
                                 says once somecome back in stock, it will send
                                 you an email to notify you
                              </Accordion.Body>
                           </Accordion.Item>

                           <Accordion.Item eventKey="5" className="mb-3">
                              <Accordion.Header>
                                 How often do you restock items?
                              </Accordion.Header>
                              <Accordion.Body>
                                 We do have restock notifications! If a product
                                 is coming back in stock, simply click on the
                                 size ofthe product you&apos;re wanting to be
                                 notified of and a button should appear that
                                 says once somecome back in stock, it will send
                                 you an email to notify you
                              </Accordion.Body>
                           </Accordion.Item>
                        </Accordion>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default FAQPage;
