import Image from "next/image";
import Link from "next/link";

import { orderListData } from "@/utils/data/dashboard";

const Overview = () => {
   return (
      <div className="dashboard-wrapper">
         <div className="dashboard-top">
            <div className="row">
               <div className="col-xl-7 col-md-6">
                  <div className="dashboard-profile">
                     <div className="thumb">
                        <Image
                           width={120}
                           height={120}
                           src="/images/dashboard/dashboard-profileThumb.jpg"
                           alt="thumb"
                        />
                     </div>
                     <h3>Dianne Russell</h3>
                     <p>Customer</p>
                     <Link href="#">Edit Profile</Link>
                  </div>
               </div>
               <div className="col-xl-5 col-md-6 mt-4 mt-md-0">
                  <div className="dashboard-profile-info">
                     <h6>Billing Address</h6>
                     <h5>Dainne Russell</h5>
                     <Link href="#" className="address">
                        4140 Parker Rd. Allentown, New Mexico 31134
                     </Link>
                     <Link href="mailto:abcd@gmail.com" className="email">
                        dainne.ressell@gmail.com
                     </Link>
                     <Link href="tel:234343423" className="phone">
                        (671) 555-0110
                     </Link>
                     <button className="edit">Edit Address</button>
                  </div>
               </div>
            </div>
         </div>
         <div className="order-history">
            <div className="header">
               <h2>Recent Order History</h2>
               <Link href="/order-history" className="view-all">
                  View All
               </Link>
            </div>
            <table>
               <thead>
                  <tr>
                     <th>ORDER ID</th>
                     <th>DATE</th>
                     <th>TOTAL</th>
                     <th>STATUS</th>
                  </tr>
               </thead>
               <tbody>
                  {orderListData.map((order) => (
                     <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.date}</td>
                        <td>{order.items}</td>
                        <td>
                           <span className={`status ${order.statusClass}`}>
                              {order.status}
                           </span>{" "}
                           <Link href="/order-details-one">View Details</Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export { Overview };
