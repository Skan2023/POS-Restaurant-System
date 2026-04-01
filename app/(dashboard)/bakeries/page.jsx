import CategoryTabs from "@/components/product/CategoryTabs";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/constants/products";

export default function Bakeries() {
  const filteredProducts = products.filter((product) => product.category === "bakery")
  return (
    <>
      <CategoryTabs />
      <ProductGrid products={filteredProducts} />
    </>
  );
}