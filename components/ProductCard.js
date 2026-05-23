import Image from 'next/image'

export default function ProductCard({ product }) {
  const whatsappMessage = `Hi, I am interested in ${product.name}`

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      <Image
        src={product.image}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-80 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-semibold">
          {product.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {product.price}
        </p>

        <a
          href={`https://wa.me/16472934294?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          className="inline-block mt-4 bg-[#8B0000] text-white px-5 py-3 rounded-lg hover:bg-red-900 transition"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}