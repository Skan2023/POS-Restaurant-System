import CategoryTabs from '@/components/product/CategoryTabs'
import ProductGrid from '@/components/product/ProductGrid'
import { products } from '@/constants/products'
import React from 'react'

export default function page() {
  const filteredProducts = products.filter((product) => product.category === "food")
  return (
    <>
      <CategoryTabs />
      <ProductGrid products={filteredProducts}/>
    </>
  )
}
