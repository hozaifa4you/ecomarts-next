import Image from "next/image";
import Link from "next/link";

import { orderDetailsData } from "@/utils/data/dashboard";

const OrderDetails = () => {
   return (
      <div className="order-details">
         <div className="header">
            <h2>
               Order Details
               <span>• April 24, 2021 • 3 Products</span>
            </h2>
            <Link href="/order-list" className="back-to-list">
               Back to List
            </Link>
         </div>
         <div className="details-wrapper">
            <div className="address-section">
               <div className="box">
                  <h4>Billing Address</h4>
                  <div className="content">
                     <h5>Dainne Russell</h5>
                     <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                     <p>
                        Email:
                        <Link href="mailto:dainne.russell@gmail.com">
                           dainne.russell@gmail.com
                        </Link>
                     </p>
                     <p>
                        Phone:
                        <Link href="tel:435346543r">(671) 555–0110</Link>
                     </p>
                  </div>
               </div>
               <div className="box">
                  <h4>Shipping Address</h4>
                  <div className="content">
                     <h5>Dainne Russell</h5>
                     <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                     <p>
                        Email:
                        <Link href="mailto:dainne.russell@gmail.com">
                           dainne.russell@gmail.com
                        </Link>
                     </p>
                     <p>
                        Phone:
                        <Link href="tel:435346543r">(671) 555–0110</Link>
                     </p>
                  </div>
               </div>
            </div>
            <div className="summary-section">
               <h5>Order Summary</h5>
               <p>
                  <strong>Order ID:</strong> #4152
               </p>
               <p>
                  <strong>Payment Method:</strong> Paypal
               </p>
               <p>
                  <strong>Subtotal:</strong> $365.00
               </p>
               <p>
                  <strong>Discount:</strong> 20%
               </p>
               <p>
                  <strong>Shipping:</strong> Free
               </p>
               <p>
                  <strong>Total:</strong>
                  <span className="total-amount">$84.00</span>
               </p>
            </div>
         </div>
         <div className="progress-bar">
            <div className="step completed">
               <i className="fa-solid fa-check"></i>
               <span>Order Received</span>
            </div>
            <div className="step active">
               <span className="circle">02</span>
               <span>Processing</span>
            </div>
            <div className="step">
               <span className="circle">03</span>
               <span>On the Way</span>
            </div>
            <div className="step">
               <span className="circle">04</span>
               <span>Delivered</span>
            </div>
         </div>
         <div className="product-table">
            <table>
               <thead>
                  <tr>
                     <th>PRODUCT</th>
                     <th>PRICE</th>
                     <th>QUANTITY</th>
                     <th>SUBTOTAL</th>
                  </tr>
               </thead>
               <tbody>
                  {orderDetailsData.map((item) => (
                     <tr key={item.id}>
                        <td>
                           <Image
                              width={70}
                              height={70}
                              src={item.img}
                              alt="Product"
                           />
                           {item.name}
                        </td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{item.subtotal}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export { OrderDetails };
