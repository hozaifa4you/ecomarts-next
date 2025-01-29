"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumb } from "@/components/Breadcrumb";
import { Icons } from "@/components/Icons";

const CartPage = () => {
   const [cartDataState, setCartDataState] = useState([
      {
         id: 1,
         img: "/images/cart/cart-thumb1_1.jpg",
         name: "shorter dress above",
         price: 15.0,
         qty: 2,
      },
      {
         id: 2,
         img: "/images/cart/cart-thumb1_2.jpg",
         name: "longer dress below",
         price: 20.0,
         qty: 4,
      },
      {
         id: 3,
         img: "/images/cart/cart-thumb1_3.jpg",
         name: "casual shirt",
         price: 10.0,
         qty: 2,
      },
      {
         id: 4,
         img: "/images/cart/cart-thumb1_4.jpg",
         name: "formal pants",
         price: 25.0,
         qty: 2,
      },
   ]);
   const [total, setTotal] = useState(
      cartDataState.reduce((acc, item) => acc + item.price * item.qty, 0)
   );

   const handleCalculateTotal = () => {
      setTotal(
         cartDataState.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
   };

   return (
      <>
         <Breadcrumb mainTitle="Cart" secondaryTitle="Category" />
         <div className="cart-wrapper  section-padding fix bg-white">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="table_desc">
                        <div className="table_page table-responsive">
                           <table>
                              <thead>
                                 <tr>
                                    <th className="product_name text-start">
                                       Product
                                    </th>
                                    <th className="product-price">Price</th>
                                    <th className="product_quantity">
                                       Quantity
                                    </th>
                                    <th className="product_total">Sub total</th>
                                    <th className="product_remove">Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {cartDataState.map((item) => (
                                    <CartItem
                                       key={item.id}
                                       {...item}
                                       setCartDataState={setCartDataState}
                                       handleCalculateTotal={
                                          handleCalculateTotal
                                       }
                                    />
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="coupon-inner">
                        <div className="coupon-left">
                           <h4>Coupon:</h4>
                           <div className="coupon-input">
                              <input
                                 className="mb-2"
                                 placeholder="Coupon code"
                                 type="text"
                              />
                              <button
                                 type="submit"
                                 className="theme-btn style6"
                              >
                                 Apply coupon
                              </button>
                           </div>
                        </div>
                        <div className="coupon-right">
                           <div className="cart_submit">
                              <button
                                 className="theme-btn style6"
                                 type="submit"
                              >
                                 update cart
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cart-checkout-wrapper">
                  <div
                     className="coupon_code right"
                     data-aos="fade-up"
                     data-aos-delay="400"
                  >
                     <h3>Subtotal</h3>
                     <div className="coupon_inner">
                        <div className="cart-subtotal">
                           <p>Subtotal</p>
                           <p className="cart_amount">${total}</p>
                        </div>
                        <div className="cart_subtotal ">
                           <p>Shipping Address</p>
                           <p className="cart-location pt-2">
                              2801 Lafayette Blvd, Norfolk, Vermont <br />
                              23509, united state
                           </p>
                        </div>

                        <div className="cart-subtotal">
                           <p>Total</p>
                           <p className="cart_amount">${total}</p>
                        </div>
                        <div className="checkout-btn">
                           <Link href="/checkout" className="theme-btn style6">
                              Proceed to Checkout
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

interface CartType {
   img: string;
   name: string;
   price: number;
   qty: number;
   id: number;
}

interface CartItemProps extends CartType {
   setCartDataState: Dispatch<SetStateAction<CartType[]>>;
   handleCalculateTotal: () => void;
}

const CartItem = ({
   img,
   name,
   price,
   qty,
   setCartDataState,
   id,
   handleCalculateTotal,
}: CartItemProps) => {
   const handleRemove = () => {
      setCartDataState((prev) => prev.filter((item) => item.id !== id));
      handleCalculateTotal();
   };
   const handleUpdateQty = (type: "increment" | "decrement") => {
      if (type === "increment") {
         setCartDataState((prev) =>
            prev.map((item) =>
               item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
         );
         handleCalculateTotal();
      }

      if (type === "decrement") {
         setCartDataState((prev) =>
            prev.map((item) =>
               item.id === id && item.qty > 0
                  ? { ...item, qty: item.qty - 1 }
                  : item
            )
         );
         handleCalculateTotal();
      }
   };

   return (
      <tr>
         <td className="product_thumb">
            <Link href="#!">
               <Image width={70} height={70} src={img} alt="img" />
            </Link>
            <Link className="product-name" href="#!">
               {name}
            </Link>
         </td>
         <td className="product-price">${price}</td>
         <td className="product_quantity">
            <div className="plus-minus-input">
               <div className="input-group-button">
                  <button
                     type="button"
                     className="button"
                     onClick={() => handleUpdateQty("decrement")}
                  >
                     <i className="fa fa-minus" aria-hidden="true"></i>
                  </button>
               </div>
               <input
                  className="form-control"
                  type="number"
                  name="quantity1"
                  value={qty}
                  onChange={(event) => {
                     const value = parseInt(event.target.value);

                     setCartDataState((prev) =>
                        prev.map((item) =>
                           item.id === id ? { ...item, qty: value } : item
                        )
                     );
                  }}
               />
               <div className="input-group-button">
                  <button
                     type="button"
                     className="button"
                     onClick={() => handleUpdateQty("increment")}
                  >
                     <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
               </div>
            </div>
         </td>
         <td className="product_total">
            ${isNaN(qty * price) ? 0 : qty * price}
         </td>
         <td className="product_remove">
            <button onClick={handleRemove}>{Icons.Close}</button>
         </td>
      </tr>
   );
};

export default CartPage;
