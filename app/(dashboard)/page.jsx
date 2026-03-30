import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/product/ProductGrid";
import OrderPanel from "@/components/order/OrderPanel";

export default function POSPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex flex-1 p-4 gap-4">
          {/* Products */}
          <div className="flex-1 bg-gray-50 rounded-2xl p-4">
            <ProductGrid />
          </div>

          {/* Order Panel */}
          <OrderPanel />
        </div>
      </div>
    </div>
  );
}