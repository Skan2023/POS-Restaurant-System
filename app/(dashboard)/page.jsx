import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/product/ProductGrid";
import OrderPanel from "@/components/order/OrderPanel";
import CategoryTabs from "@/components/product/CategoryTabs";


export default function POSPage() {
  return (
    <div className="flex h-screen bg-gray-100">

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex flex-1 p-4 gap-4">

          <Sidebar />

          {/* Products */}
          <div className="flex-1 rounded-2xl">
            <CategoryTabs />
            <ProductGrid />
          </div>

          {/* Order Panel */}
          <OrderPanel />
        </div>
      </div>
    </div>
  );
}