import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import Link from "next/link";
import { Div, H2, H5, P } from "@/components/animation";

const RegisterPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Register" secondaryTitle="Category" />

         <section className="register-section fix section-padding">
            <div className="container">
               <div className="register-wrapper">
                  <div className="row gx-5">
                     <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                        <div className="contact-info-area">
                           <div className="contact-content">
                              <H2
                                 initial={{ opacity: 0 }}
                                 whileInView={{ opacity: 1 }}
                                 transition={{ duration: 0.75 }}
                                 viewport={{ once: true }}
                                 className="contact-content__title"
                              >
                                 Get Started Now
                              </H2>
                              <P
                                 initial={{ opacity: 0 }}
                                 whileInView={{ opacity: 1 }}
                                 transition={{ duration: 0.75 }}
                                 viewport={{ once: true }}
                                 className="contact-content__subtitle"
                              >
                                 Enter your Credentials to access your account
                              </P>
                              <form
                                 id="contact-form"
                                 method="POST"
                                 className="contact-form-items"
                              >
                                 <div className="row g-4">
                                    <div className="col-lg-12 ">
                                       <Div
                                          initial={{ opacity: 0, y: 35 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{
                                             duration: 0.75,
                                          }}
                                          viewport={{ once: true }}
                                          className="form-clt"
                                       >
                                          <span>Your name*</span>
                                          <input
                                             type="text"
                                             name="name"
                                             id="name"
                                             placeholder="Enter your name"
                                          />
                                       </Div>
                                    </div>
                                    <div className="col-lg-12  ">
                                       <Div
                                          initial={{ opacity: 0, y: 35 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{
                                             duration: 0.75,
                                             delay: 0.2,
                                          }}
                                          viewport={{ once: true }}
                                          className="form-clt"
                                       >
                                          <span>Email address*</span>
                                          <input
                                             type="text"
                                             name="email"
                                             id="email"
                                             placeholder="Enter your email"
                                          />
                                       </Div>
                                    </div>
                                    <div className="col-lg-12 ">
                                       <Div
                                          initial={{ opacity: 0, y: 35 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{
                                             duration: 0.75,
                                             delay: 0.4,
                                          }}
                                          viewport={{ once: true }}
                                          className="form-clt"
                                       >
                                          <span>Password*</span>
                                          <input
                                             type="text"
                                             name="number"
                                             id="password"
                                             placeholder="********"
                                          />
                                       </Div>
                                    </div>
                                    <div className="form-check">
                                       <Div
                                          initial={{ opacity: 0, y: 35 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{
                                             duration: 0.75,
                                             delay: 0.6,
                                          }}
                                          viewport={{ once: true }}
                                       >
                                          <input
                                             id="reviewcheck"
                                             name="reviewcheck"
                                             type="checkbox"
                                          />
                                          <label
                                             className="form-check-label"
                                             htmlFor="reviewcheck"
                                          >
                                             I agree to the{" "}
                                             <span>terms & policy</span>
                                          </label>
                                       </Div>
                                    </div>
                                    <Div
                                       initial={{ opacity: 0, y: 35 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{
                                          duration: 0.75,
                                          delay: 0.8,
                                       }}
                                       viewport={{ once: true }}
                                       className="col-lg-12  "
                                    >
                                       <button
                                          type="submit"
                                          className="theme-btn style6"
                                       >
                                          Sign Up
                                       </button>
                                    </Div>
                                 </div>
                              </form>

                              <div className="or-border">
                                 <div className="border"></div>
                                 <p>Or</p>
                              </div>

                              <Div
                                 initial={{ opacity: 0, y: 35 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{
                                    duration: 0.75,
                                    delay: 0.8,
                                 }}
                                 viewport={{ once: true }}
                                 className="button-items-1"
                              >
                                 <Link href="#!">
                                    <div className="button-items-1__google-button">
                                       <Image
                                          width={20}
                                          height={20}
                                          src="/images/register/googleIcon.png"
                                          alt="icon"
                                       />
                                       <p>Sign in with Google</p>
                                    </div>
                                 </Link>

                                 <Link href="#!">
                                    <div className="button-items-1__apple-button">
                                       <Image
                                          width={20}
                                          height={20}
                                          src="/images/register/appleIcon.png"
                                          alt="icon"
                                       />
                                       <p>Sign in with Apple</p>
                                    </div>
                                 </Link>
                              </Div>
                              <H5
                                 initial={{ opacity: 0, y: 35 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 transition={{
                                    duration: 0.75,
                                    delay: 0.8,
                                 }}
                                 viewport={{ once: true }}
                                 className="contact-content__logtitle center"
                              >
                                 Have an account?{" "}
                                 <Link href="/login">Sign Up</Link>
                              </H5>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 offset-xl-0 col-md-8 offset-md-2">
                        <div className="register-thumb">
                           <Image
                              width={670}
                              height={955}
                              src="/images/register/loginThumb.jpg"
                              alt="register-thumb"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default RegisterPage;
