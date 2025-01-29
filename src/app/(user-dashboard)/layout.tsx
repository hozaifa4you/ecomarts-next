import { Navigation } from "@/components/Dashboard/Navigation";
import React, { PropsWithChildren } from "react";

const UserDashboardLayout = async ({ children }: PropsWithChildren) => {
   return (
      <div className="dashboard-section section-padding fix">
         <div className="container">
            <div className="row">
               <div className="col-xl-3">
                  <div className="dashboard-navigation-sidebar">
                     <h3>Navigation</h3>
                     <Navigation />
                  </div>
               </div>
               <div className="col-xl-9">{children}</div>
            </div>
         </div>
      </div>
   );
};

export default UserDashboardLayout;

{
   /* <div
            className=" fade"
            id="v-pills-wishlist"
            role="tabpanel"
            aria-labelledby="v-pills-wishlist-tab"
         >
             wishlist 
         </div> */
}
