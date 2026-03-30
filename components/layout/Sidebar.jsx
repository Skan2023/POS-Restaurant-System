import { Coffee, Beer, Utensils, Croissant } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 bg-white flex flex-col items-center py-4 shadow">
      <h1 className="font-bold text-orange-500 mb-6">POS</h1>

      <div className="flex flex-col gap-6">
        <SidebarItem icon={<Coffee />} active />
        <SidebarItem icon={<Beer />} />
        <SidebarItem icon={<Utensils />} />
        <SidebarItem icon={<Croissant />} />
      </div>
    </div>
  );
}

function SidebarItem({ icon, active }) {
  return (
    <div
      className={`p-3 rounded-xl cursor-pointer ${
        active ? "bg-green-100 text-green-600" : "text-gray-400"
      }`}
    >
      {icon}
    </div>
  );
}