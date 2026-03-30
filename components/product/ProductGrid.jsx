import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

const products = [
  {
    id: 1,
    name: "Cortado",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 3,
    name: "Mocha",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
  },
  {
    id: 4,
    name: "Americano",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  }
];

export default function ProductGrid() {
  return (
    <>
      <CategoryTabs />

      <div className="grid grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}