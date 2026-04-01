import CategoryTabs from '@/components/product/CategoryTabs'
import ProductGrid from '@/components/product/ProductGrid'
import { products } from '@/constants/products'
import React from 'react'

export default function Beverages() {
  const filteredProducts = products.filter((product) => product.category === "beverages")
  return (
    <>
      <CategoryTabs />
      <ProductGrid products={filteredProducts} />
    </>
  )
}
