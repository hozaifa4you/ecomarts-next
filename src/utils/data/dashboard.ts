const orderListData = [
   {
      id: "#232",
      date: "8 Sep, 2024",
      items: "$135.00 (5 Products)",
      status: "Processing",
      statusClass: "processing",
   },
   {
      id: "#233",
      date: "9 Sep, 2024",
      items: "$150.00 (3 Products)",
      status: "On the way",
      statusClass: "on-the-way",
   },
   {
      id: "#234",
      date: "10 Sep, 2024",
      items: "$200.00 (7 Products)",
      status: "Completed",
      statusClass: "completed",
   },
   {
      id: "#235",
      date: "11 Sep, 2024",
      items: "$120.00 (2 Products)",
      status: "Processing",
      statusClass: "processing",
   },
   {
      id: "#236",
      date: "12 Sep, 2024",
      items: "$180.00 (6 Products)",
      status: "On the way",
      statusClass: "on-the-way",
   },
   {
      id: "#237",
      date: "13 Sep, 2024",
      items: "$220.00 (8 Products)",
      status: "Completed",
      statusClass: "completed",
   },
];

const orderHistoryData = [
   ...orderListData,
   {
      id: "#238",
      date: "14 Sep, 2024",
      items: "$140.00 (4 Products)",
      status: "Processing",
      statusClass: "processing",
   },
   {
      id: "#239",
      date: "15 Sep, 2024",
      items: "$160.00 (5 Products)",
      status: "On the way",
      statusClass: "on-the-way",
   },
   {
      id: "#240",
      date: "16 Sep, 2024",
      items: "$210.00 (9 Products)",
      status: "Completed",
      statusClass: "completed",
   },
   {
      id: "#241",
      date: "17 Sep, 2024",
      items: "$130.00 (3 Products)",
      status: "Processing",
      statusClass: "processing",
   },
   {
      id: "#242",
      date: "18 Sep, 2024",
      items: "$170.00 (6 Products)",
      status: "On the way",
      statusClass: "on-the-way",
   },
   {
      id: "#243",
      date: "19 Sep, 2024",
      items: "$230.00 (10 Products)",
      status: "Completed",
      statusClass: "completed",
   },
];

const orderDetailsData = [
   {
      id: 1,
      img: "/images/dashboard/dashboard-order-product1.png",
      qty: "x5",
      price: "$14.00",
      subtotal: "$79.00",
      name: "High-Neck puff jacket",
   },
   {
      id: 2,
      img: "/images/dashboard/dashboard-order-product2.png",
      qty: "x3",
      price: "$20.00",
      subtotal: "$60.00",
      name: "Flowy dress that often",
   },
   {
      id: 3,
      img: "/images/dashboard/dashboard-order-product3.png",
      qty: "x7",
      price: "$10.00",
      subtotal: "$70.00",
      name: "Close-fitting dress",
   },
];

const wishlistData = [
   {
      id: 1,
      img: "/images/cart/cart-thumb1_1.jpg",
      name: "shorter dress above",
      price: "$50.00",
      subtotal: "$60.00",
      stock: "in stock",
      stockClass: "stock",
   },
   {
      id: 2,
      img: "/images/cart/cart-thumb1_2.jpg",
      name: "long sleeve shirt",
      price: "$40.00",
      subtotal: "$50.00",
      stock: "in stock",
      stockClass: "stock",
   },
   {
      id: 3,
      img: "/images/cart/cart-thumb1_3.jpg",
      name: "casual jeans",
      price: "$60.00",
      subtotal: "$70.00",
      stock: "out of stock",
      stockClass: "stock_out",
   },
   {
      id: 4,
      img: "/images/cart/cart-thumb1_4.jpg",
      name: "summer hat",
      price: "$30.00",
      subtotal: "$35.00",
      stock: "in stock",
      stockClass: "stock",
   },
];

export type OderListType = (typeof orderListData)[0];
export type OrderDetailsType = (typeof orderDetailsData)[0];
export type WishlistType = (typeof wishlistData)[0];
export { orderListData, orderHistoryData, orderDetailsData, wishlistData };
