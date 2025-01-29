import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

const ContactPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Contact" secondaryTitle="Category" />

         <section className="contact-section fix section-padding">
            <div className="container">
               <div className="contact-section-wrapper">
                  <div className="row">
                     <div className="col-xl-5">
                        <div className="contact-info">
                           <div className="contact-info__contact">
                              <h5 className="contact-info__contact--title">
                                 Contact Information
                              </h5>
                              <p className="contact-info__contact--subtitle">
                                 Say something to start a live chat!
                              </p>
                              <div className="contact-info__contact--contact-items">
                                 <ul className="contact-info-items">
                                    <li>
                                       <i className="fa-solid fa-phone"></i>
                                       <Link href="tel:2086660112">
                                          +1012 3456 789
                                       </Link>
                                    </li>

                                    <li>
                                       <i className="fa-regular fa-envelope"></i>
                                       <Link href="mailto:infotech@gmail.com">
                                          demo@gmail.com
                                       </Link>
                                    </li>
                                    <li>
                                       <i className="fas fa-map-marker-alt"></i>
                                       <Link href="#">
                                          132 Dartmouth Street Boston, <br />{" "}
                                          Massachusetts 02156 United States
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="contact-info__contact--social-icon d-flex align-items-center">
                                 <Link
                                    href="#"
                                    referrerPolicy="no-referrer"
                                    target="_blank"
                                 >
                                    <i className="fab fa-facebook-f"></i>
                                 </Link>
                                 <Link
                                    href="#"
                                    referrerPolicy="no-referrer"
                                    target="_blank"
                                 >
                                    <i className="fab fa-twitter"></i>
                                 </Link>
                                 <Link
                                    href="#"
                                    referrerPolicy="no-referrer"
                                    target="_blank"
                                 >
                                    <i className="fab fa-linkedin-in"></i>
                                 </Link>
                              </div>
                           </div>
                           <div className="contact-info__icon">
                              <div className="icon-1">
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <img
                                    src="/images/contact/shape-1.png"
                                    alt="icon"
                                 />
                              </div>
                              <div className="icon-2">
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <img
                                    src="/images/contact/shape-2.png"
                                    alt="icon"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-7">
                        <div className="contact-form-items-1">
                           <form
                              action="contact.php"
                              id="contact-form-1"
                              method="POST"
                           >
                              <div className="row g-4">
                                 <div
                                    className="col-xl-6 wow fadeInUp"
                                    data-wow-delay=".3s"
                                 >
                                    <div className="form-clt-1 mb-3">
                                       <label htmlFor="name">First Name</label>
                                       <input
                                          type="text"
                                          name="name"
                                          id="name2"
                                          placeholder="I"
                                       />
                                    </div>
                                 </div>
                                 <div
                                    className="col-xl-6 wow fadeInUp"
                                    data-wow-delay=".3s"
                                 >
                                    <div className="form-clt-1 mb-3">
                                       <label htmlFor="name">Last Name</label>
                                       <input
                                          type="text"
                                          name="name"
                                          id="name"
                                          placeholder="Doe"
                                       />
                                    </div>
                                 </div>
                                 <div
                                    className="col-xl-6 wow fadeInUp mb-5"
                                    data-wow-delay=".5s"
                                 >
                                    <div className="form-clt-1">
                                       <label htmlFor="name">Email</label>
                                       <input
                                          type="text"
                                          name="email"
                                          id="email212"
                                          placeholder="Email"
                                       />
                                    </div>
                                 </div>
                                 <div
                                    className=" col-xl-6 wow fadeInUp mb-5"
                                    data-wow-delay=".7s"
                                 >
                                    <div className="form-clt-1">
                                       <label htmlFor="name">
                                          Phone Number
                                       </label>
                                       <input
                                          type="text"
                                          name="phone"
                                          id="phone"
                                          placeholder="Phone number"
                                       />
                                    </div>
                                 </div>
                                 <div className="col-xl-12">
                                    <div className="subjects">
                                       <h6>Select Subject?</h6>
                                       <div className="checkbox">
                                          <label className="checkbox-single">
                                             <span className="checkbox-area">
                                                <input type="checkbox" />
                                                <span className="checkmark d-center"></span>
                                                <span className="text">
                                                   General Inquiry
                                                </span>
                                             </span>
                                          </label>
                                          <label className="checkbox-single">
                                             <span className="checkbox-area">
                                                <input type="checkbox" />
                                                <span className="checkmark d-center"></span>
                                                <span className="text">
                                                   General Inquiry
                                                </span>
                                             </span>
                                          </label>
                                          <label className="checkbox-single">
                                             <span className="checkbox-area">
                                                <input type="checkbox" />
                                                <span className="checkmark d-center"></span>
                                                <span className="text">
                                                   General Inquiry
                                                </span>
                                             </span>
                                          </label>
                                          <label className="checkbox-single">
                                             <span className="checkbox-area">
                                                <input type="checkbox" />
                                                <span className="checkmark d-center"></span>
                                                <span className="text">
                                                   General Inquiry
                                                </span>
                                             </span>
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 <div
                                    className="col-xl-12 wow fadeInUp"
                                    data-wow-delay=".3s"
                                 >
                                    <div className="form-clt-1">
                                       <label htmlFor="name">Message</label>
                                       <textarea
                                          name="message"
                                          id="message"
                                          placeholder="Write your message.."
                                       ></textarea>
                                    </div>
                                 </div>
                                 <div className="btn-wrapper d-flex justify-content-end">
                                    <Link className="theme-btn style6" href="#">
                                       Send Message
                                    </Link>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactPage;
