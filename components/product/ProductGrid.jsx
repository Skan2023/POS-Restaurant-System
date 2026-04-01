import { products } from "@/constants/products";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";

export default function ProductGrid({products}) {
  return (
    <>
      <div className="h-[calc(100vh-180px)] overflow-y-auto pr-2">
        <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      </div>
    </>
  );
}