import products from '@/data/products'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <section id="products" className="px-8 py-20 bg-gray-50">

      <h2 className="text-4xl font-bold text-center text-[#8B0000] mb-12">
        Our Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>
    </section>
  )
}