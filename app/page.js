import Navbar from '@/components/Navbar/Navbar';
import Products from '@/components/Products/Products';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-[#8B0000]">
          Welcome to AN Studio
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Elegant fashion for modern style.
        </p>
      </section>

      <Products />

      <About />

      <Footer />
      
    </main>
  )
}