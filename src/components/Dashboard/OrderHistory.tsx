import Link from "next/link";
import { orderHistoryData } from "@/utils/data/dashboard";

const OrderHistory = () => {
   return (
      <div className="order-history2">
         <div className="header">
            <h2>Order History</h2>
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
               {orderHistoryData.map((order) => (
                  <tr key={order.id}>
                     <td>{order.id}</td>
                     <td>{order.date}</td>
                     <td>{order.items}</td>
                     <td>
                        <span className={`status ${order.statusClass}`}>
                           {order.status}
                        </span>
                        <Link href="/order-details">View Details</Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <div className="pagination">
            <Link href="#" className="prev">
               <i className="fa-solid fa-chevron-left"></i>
            </Link>
            <Link href="#" className="page active">
               01
            </Link>
            <Link href="#" className="page">
               02
            </Link>
            <Link href="#" className="page">
               03
            </Link>
            <Link href="#" className="page">
               04
            </Link>
            <Link href="#" className="next">
               <i className="fa-solid fa-chevron-right"></i>
            </Link>
         </div>
      </div>
   );
};

export { OrderHistory };
