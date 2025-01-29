import Image from "next/image";
import { wishlistData } from "@/utils/data/dashboard";

const Wishlist = () => {
   return (
      <div className="wishlist-wrapper fix bg-white">
         <div className="container">
            <form action="#" className="woocommerce-cart-form">
               <table className="wishlist_table">
                  <thead>
                     <tr>
                        <th className="cart-col-image">Product</th>
                        <th className="cart-col-price">Price</th>
                        <th className="cart-col-total">Sub total</th>
                        <th className="cart-col-stock">Stock</th>
                     </tr>
                  </thead>
                  <tbody>
                     {wishlistData.map((item) => (
                        <tr className="cart_item" key={item.id}>
                           <td className="product" data-title="Product">
                              <button>
                                 <i className="fa-solid fa-xmark"></i>
                              </button>
                              <a className="cartimage" href="shop-details.html">
                                 <Image
                                    width={91}
                                    height={91}
                                    src={item.img}
                                    alt="Image"
                                 />
                              </a>
                              {item.name}
                           </td>
                           <td data-title="Price">
                              <span className="amount">
                                 <bdi>{item.price}</bdi>
                              </span>
                           </td>
                           <td data-title="Total">
                              <span className="amount">
                                 <bdi>{item.subtotal}</bdi>
                              </span>
                           </td>
                           <td data-title="stock">
                              <a href="#" className={item.stockClass}>
                                 {item.stock}
                              </a>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </form>
         </div>
      </div>
   );
};

export { Wishlist };
