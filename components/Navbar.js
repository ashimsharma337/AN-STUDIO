import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/logo.jpeg"
          alt="AN Studio Logo"
          width={60}
          height={60}
          className="rounded-full"
        />

        <h1 className="text-2xl font-semibold text-[#8B0000]">
          AN Studio
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <a href="#products" className="hover:text-[#8B0000]">
          Products
        </a>

        <a href="#about" className="hover:text-[#8B0000]">
          About
        </a>

        <a href="#contact" className="hover:text-[#8B0000]">
          Contact
        </a>
      </div>
    </nav>
  )
}