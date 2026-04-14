import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollFade from '../components/ScrollFade';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  {
    name: 'Energized 5 Mukhi Rudraksh',
    price: '₹499',
    image: '/items/rudraksh.png',
  },
  {
    name: 'Energized Rudraksh Bracelet',
    price: '₹699',
    image: '/items/bracelet1.png',
  },
  {
    name: 'Energized 7 Chakra Bracelet',
    price: '₹899',
    image: '/items/bracelet2.png',
  },
];

export default function Shop() {
  return (
    <>
      <Head>
        <title>Shop | Soulful Tarot Journey By Aashi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className="bg-mist text-deepPurple px-4 pt-20 pb-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-serif mb-10">
            Order Crystals, Bracelets & Rudraksh
          </h1>

          <ScrollFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="card bg-lavender p-6 rounded-xl shadow-md transition"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-contain mb-4 rounded-xl"
                  />
                  <h2 className="text-lg font-serif mb-2">{item.name}</h2>
                  <p className="text-sm">{item.price}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-block bg-deepPurple text-white px-6 py-3 rounded-full shadow-lg hover:bg-deepPurple/90 transition"
            >
              Order Now
            </Link>

            <p className="text-xs text-deepPurple/60 mt-2 mb-4">
              * Actual products may slightly vary from images shown.
            </p>
          </ScrollFade>
        </div>
      </main>

      <Footer />
    </>
  );
}