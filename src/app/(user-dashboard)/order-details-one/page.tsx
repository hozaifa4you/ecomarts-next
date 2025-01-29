import { OrderDetails } from "@/components/Dashboard/OrderDetails";

const OrderDetailsOnePage = () => {
   return (
      <div className="tab-content" id="v-pills-tabContent">
         <div className="fade show active">
            <OrderDetails />
         </div>
      </div>
   );
};

export default OrderDetailsOnePage;
