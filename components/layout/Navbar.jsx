import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-5 bg-white shadow-sm">
      <h1 className="font-bold text-2xl">Easy <span className="text-orange-500">POS</span></h1>

      <div className="flex items-center gap-4">
        <div className="flex gap-6 text-gray-600">
          <p>Home</p>
          <p>Orders</p>
          <p>Customers</p>
          <p>Cashier</p>
        </div>
        <Button className="bg-orange-500 rounded-full">New Order</Button>
        <Bell />
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
          A
        </div>
      </div>
    </div>
  );
}
