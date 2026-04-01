"use client";

import { Coffee, Beer, Utensils, Croissant, Table } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-20 bg-white flex flex-col items-center justify-between rounded-2xl py-4 shadow">
      <div className="flex flex-col gap-6">
        <Link href="/">
          <SidebarItem icon={<Coffee />} active={pathname === "/"} />
        </Link>
        <Link href="/beverages">
          <SidebarItem icon={<Beer />} active={pathname === "/beverages"} />
        </Link>
        <Link href="/food">
          <SidebarItem icon={<Utensils />} active={pathname === "/food"} />
        </Link>
        <Link href="/bakeries">
          <SidebarItem icon={<Croissant />} active={pathname === "/bakeries"} />
        </Link>
      </div>

      <Link href={"/tables"}>
        <SidebarItem icon={<Table />} active={pathname === "/tables"} />
      </Link>
    </div>
  );
}

function SidebarItem({ icon, active }) {
  return (
    <div
      className={`
        p-3 rounded-xl cursor-pointer transition-all duration-200
        ${
          active
            ? "bg-green-100 text-green-600"
            : "text-gray-400 hover:bg-green-50 hover:text-green-600 hover:scale-105"
        }
      `}
    >
      {icon}
    </div>
  );
}
