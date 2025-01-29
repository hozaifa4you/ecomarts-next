import { Breadcrumb } from "@/components/Breadcrumb";
import React from "react";

const OrderTrackingPage = () => {
   return (
      <>
         <Breadcrumb mainTitle="Order Track" secondaryTitle="Order List" />

         <div className="order-tracking-section section-padding fix">
            <div className="container">
               <div className="order-tracking-form">
                  <p>
                     To track your order please enter your Order ID in the box
                     below and press the “Track” button. This was given to your
                     receipt and in the confirmation email you should have
                     received
                  </p>
                  <form className="row g-4">
                     <div className="col-12">
                        <label htmlFor="inputOrderid" className="form-label">
                           Order ID
                        </label>
                        <input
                           type="number"
                           className="form-control"
                           placeholder="Found In Your order confirmation email."
                           id="inputOrderid"
                        />
                     </div>
                     <div className="col-12">
                        <label htmlFor="inputEmail4" className="form-label">
                           Billing email
                        </label>
                        <input
                           type="email"
                           className="form-control"
                           placeholder="Email You during checkout"
                           id="inputEmail4"
                        />
                     </div>
                     <div className="col-12">
                        <button type="submit" className="theme-btn style6">
                           Track
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default OrderTrackingPage;
