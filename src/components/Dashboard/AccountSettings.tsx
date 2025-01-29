import Image from "next/image";

const AccountSettings = () => {
   return (
      <div className="container">
         <div className="account-settings">
            <h4 className="section-title">Account Settings</h4>
            <div className="form-wrapper">
               <div className="row">
                  <div className="col-md-8">
                     <form>
                        <div className="row g-3">
                           <div className="col-md-6">
                              <label htmlFor="firstName" className="form-label">
                                 First Name
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="firstName"
                                 placeholder="Dianne"
                              />
                           </div>
                           <div className="col-md-6">
                              <label htmlFor="lastName" className="form-label">
                                 Last Name
                              </label>
                              <input
                                 type="text"
                                 className="form-control"
                                 id="lastName"
                                 placeholder="Russell"
                              />
                           </div>
                           <div className="col-md-12">
                              <label htmlFor="email" className="form-label">
                                 Email
                              </label>
                              <input
                                 type="email"
                                 className="form-control"
                                 id="email"
                                 placeholder="dianne.russell@gmail.com"
                              />
                           </div>
                           <div className="col-md-12">
                              <label
                                 htmlFor="phoneNumber"
                                 className="form-label"
                              >
                                 Phone Number
                              </label>
                              <input
                                 type="tel"
                                 className="form-control"
                                 id="phoneNumber"
                                 placeholder="(603) 805-0123"
                              />
                           </div>
                        </div>
                        <button type="submit" className="theme-btn mt-3">
                           Save Changes
                        </button>
                     </form>
                  </div>
                  <div className="col-md-4 text-center">
                     <div className="profile-image-wrapper">
                        <Image
                           width={150}
                           height={150}
                           src="/images/dashboard/dashboard-settings-profile.png"
                           alt="Profile"
                           className="img-fluid rounded-circle mb-3"
                        />
                        <button className="theme-btn">Choose Image</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="billing-address mt-4">
            <h4 className="section-title">Billing Address</h4>
            <div className="form-wrapper">
               <div className="row mb-4">
                  <form className="row g-3">
                     <div className="col-md-6">
                        <label
                           htmlFor="billingFirstName"
                           className="form-label"
                        >
                           First Name
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="billingFirstName"
                           placeholder="Dianne"
                        />
                     </div>
                     <div className="col-md-6">
                        <label htmlFor="billingLastName" className="form-label">
                           Last Name
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="billingLastName"
                           placeholder="Dianne"
                        />
                     </div>
                     <div className="col-md-6">
                        <label htmlFor="companyName" className="form-label">
                           Company Name (optional)
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="companyName"
                           placeholder="Zakirsoft"
                        />
                     </div>
                     <div className="col-md-6">
                        <label htmlFor="streetAddress" className="form-label">
                           Street Address
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="streetAddress"
                           placeholder="4140 Parker"
                        />
                     </div>
                     <div className="col-md-4">
                        <label htmlFor="country" className="form-label">
                           Country/Region
                        </label>
                        <select id="country" className="form-select">
                           <option selected>United States</option>
                           <option>Canada</option>
                           <option>Other</option>
                        </select>
                     </div>
                     <div className="col-md-4">
                        <label htmlFor="state" className="form-label">
                           State
                        </label>
                        <select id="state" className="form-select">
                           <option selected>Washington DC</option>
                           <option>California</option>
                           <option>New York</option>
                        </select>
                     </div>
                     <div className="col-md-4">
                        <label htmlFor="zipCode" className="form-label">
                           Zip Code
                        </label>
                        <input
                           type="text"
                           className="form-control"
                           id="zipCode"
                           placeholder="20033"
                        />
                     </div>
                     <div className="col-md-6">
                        <label htmlFor="billingEmail" className="form-label">
                           Email
                        </label>
                        <input
                           type="email"
                           className="form-control"
                           id="billingEmail"
                           placeholder="dianne.russell@gmail.com"
                        />
                     </div>
                     <div className="col-md-6">
                        <label htmlFor="billingPhone" className="form-label">
                           Phone
                        </label>
                        <input
                           type="tel"
                           className="form-control"
                           id="billingPhone"
                           placeholder="(603) 805-0123"
                        />
                     </div>
                     <div className="col-12">
                        <button type="submit" className="theme-btn mt-3">
                           Save Changes
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>

         <div className="change-password mt-4">
            <h4 className="section-title">Change Password</h4>
            <div className="form-wrapper">
               <form className="row g-3">
                  <div className="col-md-4">
                     <label htmlFor="currentPassword" className="form-label">
                        Current Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="currentPassword"
                        placeholder="Password"
                     />
                  </div>
                  <div className="col-md-4">
                     <label htmlFor="newPassword" className="form-label">
                        New Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        placeholder="Password"
                     />
                  </div>
                  <div className="col-md-4">
                     <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Password"
                     />
                  </div>
                  <div className="col-12">
                     <button type="submit" className="theme-btn mt-3">
                        Change Password
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export { AccountSettings };
