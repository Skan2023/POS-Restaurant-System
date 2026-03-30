import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-5 bg-white shadow-sm">
      <div className="flex gap-6 text-gray-600">
        <p>Home</p>
        <p>Orders</p>
        <p>Customers</p>
        <p>Cashier</p>
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-orange-500 rounded-full">
          New Order
        </Button>
        <Bell />
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
          A
        </div>
      </div>
    </div>
  );
}