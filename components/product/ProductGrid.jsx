import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";

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
  },

  {
    id: 5,
    name: "Latte",
    price: 9.0,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
  },
  {
    id: 6,
    name: "Espresso",
    price: 7.0,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 7,
    name: "Flat White",
    price: 8.8,
    image: "https://images.unsplash.com/photo-1523942839745-7848d0c7d5c0",
  },
  {
    id: 8,
    name: "Macchiato",
    price: 8.2,
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
  },
  {
    id: 9,
    name: "Iced Coffee",
    price: 7.5,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 10,
    name: "Cold Brew",
    price: 9.2,
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
  },
  {
    id: 11,
    name: "Affogato",
    price: 10.0,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 12,
    name: "Caramel Latte",
    price: 9.5,
    image: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5",
  },
  {
    id: 13,
    name: "Vanilla Latte",
    price: 9.5,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    id: 14,
    name: "Hazelnut Coffee",
    price: 9.3,
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589",
  },
  {
    id: 15,
    name: "Irish Coffee",
    price: 11.0,
    image: "https://images.unsplash.com/photo-1527169402691-a0f13a1db6f4",
  },
  {
    id: 16,
    name: "Iced Latte",
    price: 8.9,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
  {
    id: 17,
    name: "Frappuccino",
    price: 10.5,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
  },
  {
    id: 18,
    name: "Turkish Coffee",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },
  {
    id: 19,
    name: "Vietnamese Coffee",
    price: 8.7,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 20,
    name: "Matcha Latte",
    price: 9.8,
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
  }
];

export default function ProductGrid() {
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