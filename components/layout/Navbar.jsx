import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-5 bg-white shadow-sm">
      <h1 className="font-bold text-2xl">Easy <span className="text-orange-500">POS</span></h1>

      <div className="flex items-center gap-4">
        <div className="flex gap-6 text-gray-600">
          <Link className="py-2 px-4 hover:bg-orange-500 hover:text-white rounded-full transition-all" href="/">Home</Link>
          <Link className="py-2 px-4 hover:bg-orange-500 hover:text-white rounded-full transition-all" href="/orders">Orders</Link>
          <Link className="py-2 px-4 hover:bg-orange-500 hover:text-white rounded-full transition-all" href="/customers">Customers</Link>
          {/* <Link href="/cashier">Cashier</Link> */}
        </div>
        <Button className="py-2 px-4 bg-orange-500 rounded-full">New Order</Button>
        <Bell />
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
          A
        </div>
      </div>
    </div>
  );
}
